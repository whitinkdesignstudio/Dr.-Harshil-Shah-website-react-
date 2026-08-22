import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// Hotspot definitions for each joint
const JOINT_HOTSPOTS = {
  knee: [
    { id: 'femur', name: 'Femoral Condyles', pos: [0, 1.4, 0.4], desc: 'Articular cartilage surface on the distal femur bone.' },
    { id: 'acl', name: 'Anterior Cruciate Ligament (ACL)', pos: [0, 0.1, 0.25], desc: 'Primary stabilizer preventing forward translation and rotation of the tibia.' },
    { id: 'meniscus', name: 'Meniscus Cartilage', pos: [0.9, -0.05, 0.1], desc: 'C-shaped shock-absorbing fibrocartilage pads protecting the joint space.' },
    { id: 'patella', name: 'Patella (Kneecap)', pos: [0, 0.7, 1.1], desc: 'Sesamoid bone protecting the joint and enhancing quadriceps leverage.' },
    { id: 'tibia', name: 'Tibial Plateau', pos: [0, -1.2, 0.3], desc: 'Weight-bearing horizontal articular surface of the shinbone.' }
  ],
  hip: [
    { id: 'acetabulum', name: 'Acetabulum (Socket)', pos: [0.6, 1.1, 0.3], desc: 'Deep cup in the pelvis where the femoral head articulates.' },
    { id: 'head', name: 'Femoral Head (Ball)', pos: [0.2, 0.5, 0.1], desc: 'Spherical ball with smooth cartilage for multi-axis hip mobility.' },
    { id: 'neck', name: 'Femoral Neck', pos: [-0.4, 0.1, 0], desc: 'Connects the femoral head to the shaft; critical area in hip preservation.' },
    { id: 'labrum', name: 'Acetabular Labrum', pos: [0.8, 0.5, 0.4], desc: 'Fibrocartilaginous seal deepening the socket and stabilizing the hip.' },
    { id: 'trochanter', name: 'Greater Trochanter', pos: [-1.1, -0.2, -0.1], desc: 'Lateral anchor for gluteal muscles controlling gait and pelvic stability.' }
  ],
  shoulder: [
    { id: 'glenoid', name: 'Glenoid Fossa (Socket)', pos: [-0.6, 0.4, 0.1], desc: 'Shallow pear-shaped socket on the lateral scapula.' },
    { id: 'humeral_head', name: 'Humeral Head (Ball)', pos: [0.1, 0.3, 0.2], desc: 'Ball of the upper arm allowing the body’s greatest range of multi-directional motion.' },
    { id: 'rotator_cuff', name: 'Rotator Cuff (Supraspinatus)', pos: [0.3, 1.2, 0.1], desc: 'Dynamic tendon sleeve centering and stabilizing the ball in the socket.' },
    { id: 'acromion', name: 'Acromion Arch', pos: [-0.4, 1.4, -0.2], desc: 'Bony roof of the shoulder forming the acromioclavicular (AC) joint.' },
    { id: 'clavicle', name: 'Clavicle (Collarbone)', pos: [-0.9, 1.5, 0.4], desc: 'Strut connecting the upper limb to the central torso skeleton.' }
  ]
};

// Texture cache to prevent redundant network reloads
const textureCache = {};
function loadTexture(loader, url) {
  if (!textureCache[url]) {
    textureCache[url] = loader.load(url);
    textureCache[url].colorSpace = THREE.SRGBColorSpace;
  }
  return textureCache[url];
}

export default function Interactive3DViewer({ initialJoint = 'knee', onSelectTreatment }) {
  const mountRef = useRef(null);
  const [selectedJoint, setSelectedJoint] = useState(initialJoint);
  const [viewMode, setViewMode] = useState('natural'); // 'natural' | 'surgical' | 'xray'
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const jointGroupRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0.004 });

  useEffect(() => {
    if (initialJoint && initialJoint !== selectedJoint) {
      setSelectedJoint(initialJoint);
    }
  }, [initialJoint]);

  // -------------------------------------------------------------
  // PROCEDURAL MESH BUILDER (Used for Hip & instant fallback)
  // -------------------------------------------------------------
  const buildProceduralMeshes = useCallback((jointType, mode) => {
    const group = new THREE.Group();
    const isXray = mode === 'xray';
    const isSurgical = mode === 'surgical';

    const boneMat = new THREE.MeshStandardMaterial({
      color: isXray ? 0x0284c7 : 0xf8fafc,
      roughness: isXray ? 0.2 : 0.45,
      metalness: isXray ? 0.8 : 0.1,
      wireframe: isXray,
      transparent: isXray,
      opacity: isXray ? 0.65 : 1.0
    });

    const cartilageMat = new THREE.MeshStandardMaterial({
      color: isSurgical ? 0x38bdf8 : (isXray ? 0x00f0ff : 0x7dd3fc),
      roughness: 0.2,
      metalness: 0.2,
      transparent: true,
      opacity: isXray ? 0.8 : 0.9
    });

    const ligamentMat = new THREE.MeshStandardMaterial({
      color: isSurgical ? 0x0284c7 : (isXray ? 0x38bdf8 : 0x0284c7),
      roughness: 0.35,
      metalness: 0.15,
      transparent: true,
      opacity: 0.95
    });

    const implantMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.9,
      roughness: 0.15
    });

    if (jointType === 'hip') {
      const pelvisGeo = new THREE.CylinderGeometry(1.4, 1.1, 0.9, 32);
      pelvisGeo.scale(1.2, 0.8, 1.1);
      const pelvis = new THREE.Mesh(pelvisGeo, boneMat);
      pelvis.position.set(0.8, 1.5, 0);
      pelvis.rotation.z = -0.3;
      group.add(pelvis);

      const socketGeo = new THREE.SphereGeometry(0.9, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.55);
      const socket = new THREE.Mesh(socketGeo, boneMat);
      socket.position.set(0.6, 0.8, 0.2);
      socket.rotation.x = Math.PI * 0.8;
      socket.rotation.z = -0.4;
      group.add(socket);

      const labrumGeo = new THREE.TorusGeometry(0.85, 0.12, 16, 32);
      const labrum = new THREE.Mesh(labrumGeo, cartilageMat);
      labrum.position.set(0.6, 0.75, 0.25);
      labrum.rotation.x = Math.PI * 0.8;
      labrum.rotation.z = -0.4;
      group.add(labrum);

      const headGeo = new THREE.SphereGeometry(0.78, 32, 32);
      const head = new THREE.Mesh(headGeo, isSurgical ? implantMat : cartilageMat);
      head.position.set(0.4, 0.65, 0.15);
      group.add(head);

      const neckCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.4, 0.65, 0.15),
        new THREE.Vector3(-0.2, 0.2, 0.0),
        new THREE.Vector3(-0.7, -0.2, -0.05)
      ]);
      const neckGeo = new THREE.TubeGeometry(neckCurve, 20, 0.38, 20, false);
      const neck = new THREE.Mesh(neckGeo, isSurgical ? implantMat : boneMat);
      group.add(neck);

      const trochanterGeo = new THREE.SphereGeometry(0.7, 24, 20);
      trochanterGeo.scale(1.1, 1.4, 1.0);
      const trochanter = new THREE.Mesh(trochanterGeo, boneMat);
      trochanter.position.set(-0.9, -0.3, 0);
      group.add(trochanter);

      const hipShaftGeo = new THREE.CylinderGeometry(0.65, 0.5, 2.4, 32);
      const hipShaft = new THREE.Mesh(hipShaftGeo, boneMat);
      hipShaft.position.set(-0.75, -1.8, 0);
      hipShaft.rotation.z = 0.08;
      group.add(hipShaft);

      const capCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.8, 1.0, 0.3),
        new THREE.Vector3(0.0, 0.5, 0.5),
        new THREE.Vector3(-0.8, -0.1, 0.2)
      ]);
      const capGeo = new THREE.TubeGeometry(capCurve, 16, 0.12, 12, false);
      const capMesh = new THREE.Mesh(capGeo, ligamentMat);
      group.add(capMesh);
    }

    return group;
  }, []);

  // -------------------------------------------------------------
  // THREE.JS SCENE & FBX MODEL LOADER
  // -------------------------------------------------------------
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    setIsLoading(true);

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0.2, 5.8);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf0f9ff, 2.6);
    keyLight.position.set(5, 7, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x0284c7, 1.4);
    fillLight.position.set(-6, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 2.4, 18);
    rimLight.position.set(0, 4, -5);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topLight.position.set(0, 8, 0);
    scene.add(topLight);

    // Soft Floor Shadow Disc
    const groundGeo = new THREE.CircleGeometry(2.4, 32);
    const groundMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.08 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.3;
    scene.add(ground);

    const activeGroup = new THREE.Group();
    scene.add(activeGroup);
    jointGroupRef.current = activeGroup;

    const textureLoader = new THREE.TextureLoader();
    const isXray = viewMode === 'xray';
    const isSurgical = viewMode === 'surgical';

    // Model Setup Logic
    if (selectedJoint === 'knee') {
      // ─────────────────────────────────────────────────────────────
      // LOAD KNEE FBX MODEL & PBR TEXTURES
      // ─────────────────────────────────────────────────────────────
      const fbxLoader = new FBXLoader();
      const fbxUrl = '/knee-anatomy/source/Knee Anatomy.fbx';

      const boneBaseColor = loadTexture(textureLoader, '/knee-anatomy/textures/bone_Base_color.png');
      const boneNormal = loadTexture(textureLoader, '/knee-anatomy/textures/bone_Normal_OpenGL.png');
      const boneRoughness = loadTexture(textureLoader, '/knee-anatomy/textures/bone_Roughness.png');
      const boneAO = loadTexture(textureLoader, '/knee-anatomy/textures/bone_Mixed_AO.png');

      const opacityBaseColor = loadTexture(textureLoader, '/knee-anatomy/textures/Opacyty_Base_color.png');
      const opacityNormal = loadTexture(textureLoader, '/knee-anatomy/textures/Opacyty_Normal_OpenGL.png');
      const opacityRoughness = loadTexture(textureLoader, '/knee-anatomy/textures/Opacyty_Roughness.png');
      const opacityAO = loadTexture(textureLoader, '/knee-anatomy/textures/Opacyty_Mixed_AO.png');

      const mashBaseColor = loadTexture(textureLoader, '/knee-anatomy/textures/mash_Base_color.png');
      const mashNormal = loadTexture(textureLoader, '/knee-anatomy/textures/mash_Normal_OpenGL.png');
      const mashRoughness = loadTexture(textureLoader, '/knee-anatomy/textures/mash_Roughness.png');
      const mashAO = loadTexture(textureLoader, '/knee-anatomy/textures/mash_Mixed_AO.png');

      const boneMaterial = new THREE.MeshStandardMaterial({
        map: isXray ? null : boneBaseColor,
        normalMap: isXray ? null : boneNormal,
        roughnessMap: isXray ? null : boneRoughness,
        aoMap: isXray ? null : boneAO,
        roughness: isXray ? 0.2 : 0.6,
        metalness: isXray ? 0.8 : 0.05,
        color: isXray ? 0x0284c7 : 0xffffff,
        wireframe: isXray,
        transparent: isXray,
        opacity: isXray ? 0.6 : 1.0
      });

      const opacityMaterial = new THREE.MeshStandardMaterial({
        map: isXray ? null : opacityBaseColor,
        normalMap: isXray ? null : opacityNormal,
        roughnessMap: isXray ? null : opacityRoughness,
        aoMap: isXray ? null : opacityAO,
        roughness: 0.35,
        metalness: 0.1,
        transparent: true,
        opacity: isXray ? 0.75 : 0.88,
        color: isSurgical ? 0x38bdf8 : (isXray ? 0x00f0ff : 0xffffff),
        side: THREE.DoubleSide
      });

      const mashMaterial = new THREE.MeshStandardMaterial({
        map: isXray ? null : mashBaseColor,
        normalMap: isXray ? null : mashNormal,
        roughnessMap: isXray ? null : mashRoughness,
        aoMap: isXray ? null : mashAO,
        roughness: 0.45,
        metalness: 0.1,
        color: isSurgical ? 0x0284c7 : (isXray ? 0x38bdf8 : 0xffffff),
        transparent: isXray,
        opacity: isXray ? 0.7 : 0.95
      });

      fbxLoader.load(
        fbxUrl,
        (fbx) => {
          fbx.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              const nameLower = (child.name || '').toLowerCase();
              const matNameLower = (child.material?.name || '').toLowerCase();

              if (nameLower.includes('opac') || matNameLower.includes('opac') || nameLower.includes('cartil') || nameLower.includes('menisc')) {
                child.material = opacityMaterial;
              } else if (nameLower.includes('mash') || matNameLower.includes('mash') || nameLower.includes('ligament') || nameLower.includes('tendon') || nameLower.includes('musc')) {
                child.material = mashMaterial;
              } else {
                child.material = boneMaterial;
              }
            }
          });

          // Auto-center and normalize size
          const box = new THREE.Box3().setFromObject(fbx);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const scaleFactor = 3.6 / (maxDim || 1);
          fbx.scale.setScalar(scaleFactor);

          fbx.position.x = -center.x * scaleFactor;
          fbx.position.y = -center.y * scaleFactor + 0.1;
          fbx.position.z = -center.z * scaleFactor;

          activeGroup.add(fbx);
          setIsLoading(false);
        },
        undefined,
        (err) => {
          console.warn('Fallback to procedural Knee mesh:', err);
          const procKnee = buildProceduralMeshes('knee', viewMode);
          activeGroup.add(procKnee);
          setIsLoading(false);
        }
      );
    } else if (selectedJoint === 'shoulder') {
      // ─────────────────────────────────────────────────────────────
      // LOAD SHOULDER FBX MODEL & PBR TEXTURES
      // ─────────────────────────────────────────────────────────────
      const fbxLoader = new FBXLoader();
      const fbxUrl = '/shoulder-joint/source/Glenohumeral Joint.fbx';

      const boneBaseColor = loadTexture(textureLoader, '/shoulder-joint/textures/bone_Base_color.png');
      const boneNormal = loadTexture(textureLoader, '/shoulder-joint/textures/bone_Normal_OpenGL.png');
      const boneRoughness = loadTexture(textureLoader, '/shoulder-joint/textures/bone_Roughness.png');
      const boneAO = loadTexture(textureLoader, '/shoulder-joint/textures/bone_Mixed_AO.png');

      const musculesBaseColor = loadTexture(textureLoader, '/shoulder-joint/textures/muscules_Base_color.png');
      const musculesNormal = loadTexture(textureLoader, '/shoulder-joint/textures/muscules_Normal_OpenGL.png');
      const musculesRoughness = loadTexture(textureLoader, '/shoulder-joint/textures/muscules_Roughness.png');
      const musculesAO = loadTexture(textureLoader, '/shoulder-joint/textures/muscules_Mixed_AO.png');

      const boneMaterial = new THREE.MeshStandardMaterial({
        map: isXray ? null : boneBaseColor,
        normalMap: isXray ? null : boneNormal,
        roughnessMap: isXray ? null : boneRoughness,
        aoMap: isXray ? null : boneAO,
        roughness: isXray ? 0.2 : 0.6,
        metalness: isXray ? 0.8 : 0.05,
        color: isXray ? 0x0284c7 : 0xffffff,
        wireframe: isXray,
        transparent: isXray,
        opacity: isXray ? 0.6 : 1.0
      });

      const musculesMaterial = new THREE.MeshStandardMaterial({
        map: isXray ? null : musculesBaseColor,
        normalMap: isXray ? null : musculesNormal,
        roughnessMap: isXray ? null : musculesRoughness,
        aoMap: isXray ? null : musculesAO,
        roughness: 0.4,
        metalness: 0.1,
        color: isSurgical ? 0x0284c7 : (isXray ? 0x38bdf8 : 0xffffff),
        transparent: isXray,
        opacity: isXray ? 0.7 : 0.95
      });

      fbxLoader.load(
        fbxUrl,
        (fbx) => {
          fbx.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              const nameLower = (child.name || '').toLowerCase();
              const matNameLower = (child.material?.name || '').toLowerCase();

              if (nameLower.includes('musc') || matNameLower.includes('musc') || nameLower.includes('cuff') || nameLower.includes('tendon')) {
                child.material = musculesMaterial;
              } else {
                child.material = boneMaterial;
              }
            }
          });

          // Auto-center and normalize size
          const box = new THREE.Box3().setFromObject(fbx);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const scaleFactor = 3.6 / (maxDim || 1);
          fbx.scale.setScalar(scaleFactor);

          fbx.position.x = -center.x * scaleFactor;
          fbx.position.y = -center.y * scaleFactor;
          fbx.position.z = -center.z * scaleFactor;

          activeGroup.add(fbx);
          setIsLoading(false);
        },
        undefined,
        (err) => {
          console.warn('Fallback to procedural Shoulder mesh:', err);
          const procShoulder = buildProceduralMeshes('shoulder', viewMode);
          activeGroup.add(procShoulder);
          setIsLoading(false);
        }
      );
    } else {
      // ─────────────────────────────────────────────────────────────
      // HIP JOINT PROCEDURAL ANATOMICAL MODEL
      // ─────────────────────────────────────────────────────────────
      const procHip = buildProceduralMeshes('hip', viewMode);
      activeGroup.add(procHip);
      setIsLoading(false);
    }

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (jointGroupRef.current) {
        if (autoRotate && !isDraggingRef.current) {
          jointGroupRef.current.rotation.y += 0.007;
        }

        if (isDraggingRef.current) {
          jointGroupRef.current.rotation.y += rotationVelocityRef.current.y;
          jointGroupRef.current.rotation.x += rotationVelocityRef.current.x;
          jointGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, jointGroupRef.current.rotation.x));
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [selectedJoint, viewMode, autoRotate, buildProceduralMeshes]);

  // -------------------------------------------------------------
  // MOUSE & TOUCH 360 DRAG ROTATION
  // -------------------------------------------------------------
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !jointGroupRef.current) return;

    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    rotationVelocityRef.current = {
      x: deltaY * 0.005,
      y: deltaX * 0.005
    };

    jointGroupRef.current.rotation.y += deltaX * 0.008;
    jointGroupRef.current.rotation.x += deltaY * 0.008;
    jointGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, jointGroupRef.current.rotation.x));

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !jointGroupRef.current || e.touches.length !== 1) return;

    const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
    const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

    jointGroupRef.current.rotation.y += deltaX * 0.008;
    jointGroupRef.current.rotation.x += deltaY * 0.008;
    jointGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, jointGroupRef.current.rotation.x));

    previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const handleZoom = (delta) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.z = Math.max(3.8, Math.min(8.5, cameraRef.current.position.z + delta));
  };

  const handleResetView = () => {
    if (!jointGroupRef.current || !cameraRef.current) return;
    jointGroupRef.current.rotation.set(0, 0, 0);
    cameraRef.current.position.set(0, 0.2, 5.8);
    setActiveHotspot(null);
  };

  const currentHotspots = JOINT_HOTSPOTS[selectedJoint] || [];

  return (
    <div className="interactive-3d-wrapper" aria-label="Interactive 3D Anatomical Joint Viewer">
      {/* Top Controls Bar */}
      <div className="viewer-top-bar">
        {/* Joint Selector Pills */}
        <div className="viewer-joint-pills" role="tablist" aria-label="Select Anatomical Joint">
          <button
            type="button"
            className={`viewer-joint-pill ${selectedJoint === 'knee' ? 'active' : ''}`}
            onClick={() => { setSelectedJoint('knee'); setActiveHotspot(null); }}
          >
            🦿 Knee Anatomy (3D Model)
          </button>
          <button
            type="button"
            className={`viewer-joint-pill ${selectedJoint === 'shoulder' ? 'active' : ''}`}
            onClick={() => { setSelectedJoint('shoulder'); setActiveHotspot(null); }}
          >
            🦾 Shoulder Joint (3D Model)
          </button>
          <button
            type="button"
            className={`viewer-joint-pill ${selectedJoint === 'hip' ? 'active' : ''}`}
            onClick={() => { setSelectedJoint('hip'); setActiveHotspot(null); }}
          >
            🦴 Hip Joint
          </button>
        </div>

        {/* View Mode Switcher */}
        <div className="viewer-mode-selector">
          <button
            type="button"
            className={`mode-btn ${viewMode === 'natural' ? 'mode-active' : ''}`}
            onClick={() => setViewMode('natural')}
            title="Natural Anatomy PBR Mode"
          >
            Real Textures
          </button>
          <button
            type="button"
            className={`mode-btn ${viewMode === 'surgical' ? 'mode-active' : ''}`}
            onClick={() => setViewMode('surgical')}
            title="Surgical & Implant View"
          >
            Surgical
          </button>
          <button
            type="button"
            className={`mode-btn ${viewMode === 'xray' ? 'mode-active' : ''}`}
            onClick={() => setViewMode('xray')}
            title="3D Holographic / X-Ray Mode"
          >
            3D Hologram
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Stage */}
      <div
        className="viewer-stage"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div ref={mountRef} className="three-canvas-container" />

        {/* Loading Spinner */}
        {isLoading && (
          <div className="viewer-loading-overlay">
            <div className="viewer-spinner" />
            <span>Loading 3D Anatomy Model &amp; 4K Textures...</span>
          </div>
        )}

        {/* Ambient Neon Orbit Ring & Grid */}
        <div className="viewer-orbital-grid" aria-hidden="true" />
        <div className="viewer-center-glow" aria-hidden="true" />

        {/* Drag Hint Badge */}
        <div className="viewer-drag-hint">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span>Click &amp; drag to rotate in 360°</span>
        </div>

        {/* On-Canvas Floating Action Tools */}
        <div className="viewer-action-dock">
          <button
            type="button"
            className="dock-tool-btn"
            onClick={() => handleZoom(-0.7)}
            title="Zoom In"
            aria-label="Zoom In"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <button
            type="button"
            className="dock-tool-btn"
            onClick={() => handleZoom(0.7)}
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14" />
            </svg>
          </button>
          <button
            type="button"
            className={`dock-tool-btn ${autoRotate ? 'btn-engaged' : ''}`}
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? 'Pause 360 Rotation' : 'Start 360 Rotation'}
            aria-label="Toggle Auto Rotation"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-1.19" />
            </svg>
          </button>
          <button
            type="button"
            className="dock-tool-btn"
            onClick={handleResetView}
            title="Reset Camera View"
            aria-label="Reset View"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>
        </div>

        {/* Hotspot Card Overlay if clicked */}
        {activeHotspot && (
          <div className="viewer-hotspot-popover">
            <button
              type="button"
              className="popover-close-btn"
              onClick={() => setActiveHotspot(null)}
              aria-label="Close hotspot info"
            >
              ✕
            </button>
            <span className="popover-badge">ANATOMICAL STRUCTURE</span>
            <h4>{activeHotspot.name}</h4>
            <p>{activeHotspot.desc}</p>
          </div>
        )}
      </div>

      {/* Bottom Anatomical Hotspots Ribbon */}
      <div className="viewer-hotspots-ribbon">
        <span className="ribbon-label">Key Anatomy:</span>
        <div className="ribbon-items">
          {currentHotspots.map((spot) => (
            <button
              key={spot.id}
              type="button"
              className={`ribbon-spot-btn ${activeHotspot?.id === spot.id ? 'spot-active' : ''}`}
              onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
            >
              <span className="spot-dot" />
              {spot.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
