// FAQ Data — Dr. Harshil Shah, Orthopaedic Surgeon
// Structured for search, filtering and JSON-LD schema

export const FAQ_CATEGORIES = [
  'All Questions',
  'Appointments',
  'First Consultation',
  'Conditions & Treatments',
  'Surgery',
  'Recovery',
  'Second Opinion',
  'Reports & Scans',
  'Follow-up Care',
  'General',
];

export const faqData = [
  // ─── APPOINTMENTS ────────────────────────────────────────────────────────────
  {
    id: 'appt-needed',
    category: 'Appointments',
    question: 'Do I need an appointment before visiting the clinic?',
    answer:
      'Booking an appointment in advance is recommended so the clinic team can reserve an appropriate consultation slot and ensure the doctor has adequate time for your visit. For scheduling queries, please contact the clinic directly.',
    keywords: ['appointment', 'booking', 'walk-in', 'visit', 'schedule', 'reservation'],
    featured: true,
  },
  {
    id: 'appt-how-book',
    category: 'Appointments',
    question: 'How can I book an appointment?',
    answer:
      'You can request an appointment through the online appointment form on this website or contact the clinic directly by phone or WhatsApp. After your request is received, the clinic team will help confirm availability.',
    keywords: ['book', 'appointment', 'online', 'form', 'WhatsApp', 'phone', 'request'],
  },
  {
    id: 'appt-reschedule',
    category: 'Appointments',
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'If you need to reschedule or cancel, please contact the clinic as early as possible so the slot can be offered to another patient. The clinic team will help arrange a suitable alternative time.',
    keywords: ['reschedule', 'cancel', 'change', 'postpone', 'appointment'],
  },
  {
    id: 'appt-family-member',
    category: 'Appointments',
    question: 'Can I book an appointment for a family member?',
    answer:
      'Yes. You can request an appointment on behalf of a family member. Please provide their name, contact details and a brief description of their concern when making the request.',
    keywords: ['family', 'relative', 'book', 'appointment', 'someone else'],
  },
  {
    id: 'appt-arrive-early',
    category: 'Appointments',
    question: 'How early should I arrive before my consultation?',
    answer:
      'Arriving 10–15 minutes before your scheduled time allows adequate time for registration and clinic formalities, ensuring the consultation can begin as planned.',
    keywords: ['arrive', 'early', 'time', 'registration', 'clinic', 'punctual'],
  },
  {
    id: 'appt-urgent',
    category: 'Appointments',
    question: 'Can I request an urgent consultation?',
    answer:
      'If your condition requires prompt attention, please contact the clinic directly by phone or WhatsApp and explain your situation. The team will do their best to accommodate urgent requests based on availability.',
    keywords: ['urgent', 'emergency', 'same day', 'fast', 'quick', 'immediate'],
  },

  // ─── FIRST CONSULTATION ──────────────────────────────────────────────────────
  {
    id: 'first-bring',
    category: 'First Consultation',
    question: 'What should I bring to my first orthopaedic consultation?',
    answer:
      'Bring any relevant X-rays, MRI scans, CT scan reports or discharge summaries you already have, along with a list of your current medications. A brief note of when your symptoms started, what makes them better or worse, and any specific questions you have in mind can also be very helpful.',
    keywords: ['bring', 'first visit', 'documents', 'reports', 'medication', 'consultation', 'what to carry'],
    featured: true,
  },
  {
    id: 'first-what-happens',
    category: 'First Consultation',
    question: 'What happens during the first consultation?',
    answer:
      'During the first consultation, the doctor will typically review your symptoms, medical history and any available reports, carry out an appropriate clinical assessment, and discuss possible next steps based on the findings. This may include further investigations, non-surgical management or surgical options where relevant.',
    keywords: ['first visit', 'consultation', 'process', 'examination', 'what happens', 'clinical assessment'],
    featured: true,
  },
  {
    id: 'first-duration',
    category: 'First Consultation',
    question: 'How long does an orthopaedic consultation usually take?',
    answer:
      'Consultation duration can vary depending on the complexity of your condition. A first visit is typically longer than a follow-up, allowing adequate time for history, examination and discussion. Please allow sufficient time when planning your schedule.',
    keywords: ['how long', 'duration', 'time', 'consultation', 'appointment length'],
  },
  {
    id: 'first-medications',
    category: 'First Consultation',
    question: 'Should I bring a list of my current medications?',
    answer:
      'Yes. Knowing your current medications, including supplements and over-the-counter drugs, helps ensure safe and accurate clinical assessment. You can write them down or bring the packaging.',
    keywords: ['medications', 'medicines', 'drugs', 'supplements', 'list', 'bring'],
  },
  {
    id: 'first-family-accompany',
    category: 'First Consultation',
    question: 'Can a family member accompany me to the consultation?',
    answer:
      'Yes. A family member or trusted companion is welcome to attend the consultation. Having someone to help recall details of the discussion can be useful, particularly for complex treatment decisions.',
    keywords: ['family', 'companion', 'accompany', 'attend', 'someone with me'],
  },
  {
    id: 'first-prepare-questions',
    category: 'First Consultation',
    question: 'Should I prepare questions before my consultation?',
    answer:
      'It is helpful to note down your main concerns and any questions you would like to discuss before the appointment. This allows you to make the most of your consultation time and ensures nothing important is overlooked.',
    keywords: ['questions', 'prepare', 'list', 'concerns', 'consultation'],
  },

  // ─── CONDITIONS & TREATMENTS ─────────────────────────────────────────────────
  {
    id: 'treatment-conditions',
    category: 'Conditions & Treatments',
    question: 'What orthopaedic conditions are treated?',
    answer:
      'The practice focuses on conditions of the knee, hip and shoulder including arthritis, ligament injuries, sports injuries, fractures, cartilage problems, rotator cuff tears, and joint degeneration. Treatment is tailored to each patient\'s specific diagnosis and needs.',
    keywords: ['conditions', 'treated', 'knee', 'hip', 'shoulder', 'arthritis', 'ligament', 'sports injury', 'fracture'],
  },
  {
    id: 'treatment-no-surgery',
    category: 'Conditions & Treatments',
    question: 'Does every orthopaedic condition require surgery?',
    answer:
      'No. Many orthopaedic conditions may be managed effectively with non-surgical approaches such as physiotherapy, activity modification, medications or injections. Surgery is considered only when clinically appropriate after thorough evaluation.',
    keywords: ['surgery', 'not always', 'non-surgical', 'conservative', 'physiotherapy', 'injection'],
    featured: true,
  },
  {
    id: 'treatment-non-surgical',
    category: 'Conditions & Treatments',
    question: 'What non-surgical treatment options may be considered?',
    answer:
      'Non-surgical options may include physiotherapy and rehabilitation exercises, activity and lifestyle modifications, medications for pain and inflammation, and image-guided injections where appropriate. The right approach depends on your diagnosis and individual circumstances.',
    keywords: ['physiotherapy', 'rehabilitation', 'injection', 'medication', 'conservative', 'non-surgical', 'treatment'],
  },
  {
    id: 'treatment-plan-decided',
    category: 'Conditions & Treatments',
    question: 'How is a treatment plan decided?',
    answer:
      'Treatment recommendations are based on your symptoms, clinical examination, available imaging and medical history. Where appropriate, non-surgical options are considered first. Surgical options are discussed when they may offer meaningful benefit given your diagnosis and circumstances.',
    keywords: ['treatment plan', 'decided', 'how', 'recommendation', 'diagnosis', 'evaluation'],
  },
  {
    id: 'treatment-physio',
    category: 'Conditions & Treatments',
    question: 'Is physiotherapy part of orthopaedic treatment?',
    answer:
      'Physiotherapy is often an important part of both non-surgical management and post-operative recovery. Specific physiotherapy guidance may be recommended depending on your condition and treatment plan.',
    keywords: ['physiotherapy', 'rehab', 'exercise', 'recovery', 'treatment', 'post-op'],
  },

  // ─── SURGERY ─────────────────────────────────────────────────────────────────
  {
    id: 'surgery-when-needed',
    category: 'Surgery',
    question: 'How do I know whether surgery may be required?',
    answer:
      'Surgery is considered when conservative treatment has not achieved adequate improvement, when the nature of the injury or condition typically benefits from surgical correction, or when delaying surgery may cause further harm. This decision is made together with you after a thorough assessment and discussion.',
    keywords: ['surgery needed', 'when surgery', 'surgical', 'indication', 'required', 'operation'],
    featured: true,
  },
  {
    id: 'surgery-what-before',
    category: 'Surgery',
    question: 'What happens before surgery is planned?',
    answer:
      'Before surgery is planned, a comprehensive evaluation is completed including clinical assessment, relevant imaging and sometimes pre-operative tests such as blood work and anaesthetic review. The surgical procedure, expected outcomes and risks are explained and consent is obtained.',
    keywords: ['before surgery', 'pre-operative', 'pre-op', 'tests', 'planning', 'consent'],
  },
  {
    id: 'surgery-what-bring',
    category: 'Surgery',
    question: 'What should I bring on the day of surgery?',
    answer:
      'You will typically be given specific instructions before the day of surgery. Generally, bring a government-issued identification document, any pre-operative reports or imaging as directed, prescribed medications and comfortable clothing. Follow any fasting instructions given by the medical team.',
    keywords: ['surgery day', 'bring', 'what to carry', 'admission', 'hospital', 'documents'],
  },
  {
    id: 'surgery-hospital-stay',
    category: 'Surgery',
    question: 'How long will I need to stay in hospital?',
    answer:
      'The expected hospital stay varies depending on the procedure performed, your overall health and your early recovery progress. This will be discussed with you specifically in the context of your planned procedure.',
    keywords: ['hospital stay', 'overnight', 'admission', 'discharge', 'how many days', 'stay'],
  },
  {
    id: 'surgery-questions-consent',
    category: 'Surgery',
    question: 'Can I ask questions before giving consent for surgery?',
    answer:
      'Yes. You are encouraged to ask any questions you may have about the surgical procedure, its purpose, alternatives, expected outcomes and possible risks before consenting. Informed decision-making is an important part of the process.',
    keywords: ['consent', 'questions', 'before surgery', 'right to ask', 'informed', 'decision'],
  },

  // ─── RECOVERY ────────────────────────────────────────────────────────────────
  {
    id: 'recovery-duration',
    category: 'Recovery',
    question: 'How long does recovery usually take?',
    answer:
      'Recovery time varies between patients and depends on the condition treated, the procedure performed, your overall health and how well rehabilitation progresses. Your expected recovery timeline will be discussed in the context of your specific situation.',
    keywords: ['recovery time', 'how long', 'duration', 'heal', 'weeks', 'months', 'rehabilitation'],
    featured: true,
  },
  {
    id: 'recovery-daily-activities',
    category: 'Recovery',
    question: 'When can I return to normal daily activities?',
    answer:
      'The timing for returning to daily activities depends on your procedure, recovery progress and individual health factors. Guidance on activity restrictions and gradual return to normal function will be provided as part of your recovery plan.',
    keywords: ['daily activities', 'return', 'normal', 'walking', 'driving', 'routine', 'independence'],
  },
  {
    id: 'recovery-physio-needed',
    category: 'Recovery',
    question: 'Will I need physiotherapy after surgery?',
    answer:
      'Physiotherapy and rehabilitation are often an important part of recovery following orthopaedic surgery. A rehabilitation plan tailored to your procedure and progress will typically be recommended.',
    keywords: ['physiotherapy', 'rehab', 'after surgery', 'exercises', 'post-op', 'recovery'],
  },
  {
    id: 'recovery-return-work',
    category: 'Recovery',
    question: 'When can I return to work?',
    answer:
      'Return-to-work timing depends on your procedure, recovery progress and the nature of your work. Desk-based roles may permit an earlier return than physically demanding occupations. A specific estimate can be discussed once your procedure and individual circumstances are known.',
    keywords: ['return to work', 'office', 'job', 'work', 'back', 'when'],
  },
  {
    id: 'recovery-exercise',
    category: 'Recovery',
    question: 'When can I resume exercise or sport?',
    answer:
      'Returning to exercise and sport is typically a gradual process guided by recovery progress and clinical assessment. Specific timelines depend on the procedure and your individual healing. This will be discussed as part of your recovery guidance.',
    keywords: ['exercise', 'sport', 'gym', 'running', 'fitness', 'return', 'activity', 'athletics'],
  },
  {
    id: 'recovery-concerns',
    category: 'Recovery',
    question: 'What should I do if I have concerns during recovery?',
    answer:
      'If you experience unexpected symptoms, worsening pain or any signs of complication during your recovery, please contact the clinic promptly. Do not wait for a scheduled follow-up if you are concerned about your recovery progress.',
    keywords: ['concerns', 'problems', 'complications', 'during recovery', 'pain', 'worry', 'contact'],
  },

  // ─── SECOND OPINION ──────────────────────────────────────────────────────────
  {
    id: 'second-opinion',
    category: 'Second Opinion',
    question: 'Can I request a second opinion?',
    answer:
      'Yes. You can arrange a consultation to discuss an existing diagnosis, treatment recommendation or surgical plan. Bringing your previous reports, imaging and any relevant documentation can provide useful clinical context for the discussion.',
    keywords: ['second opinion', 'review', 'another doctor', 'diagnosis', 'existing plan', 'confirm'],
    featured: true,
  },
  {
    id: 'second-opinion-documents',
    category: 'Second Opinion',
    question: 'What documents are useful for a second opinion?',
    answer:
      'Useful documents include your previous medical reports, imaging such as X-rays, MRI or CT scans on disc or film, discharge summaries, operation notes if applicable, and any existing treatment plans or referral letters.',
    keywords: ['documents', 'second opinion', 'reports', 'bring', 'papers', 'records', 'MRI'],
  },
  {
    id: 'second-opinion-before-surgery',
    category: 'Second Opinion',
    question: 'Can I seek a second opinion before deciding on surgery?',
    answer:
      'Yes. Seeking a second opinion before committing to any surgical procedure is entirely reasonable. Bringing your existing reports and imaging is helpful so the available information can be reviewed carefully.',
    keywords: ['second opinion', 'before surgery', 'deciding', 'confirm', 'surgical plan'],
  },
  {
    id: 'second-opinion-repeat-tests',
    category: 'Second Opinion',
    question: 'Do I need to repeat all investigations for a second opinion?',
    answer:
      'Not necessarily. Bringing your existing X-rays, MRI scans, CT scans and reports can reduce the need for repeat investigations. The doctor will advise if any additional imaging or tests are needed based on what is already available and the nature of your condition.',
    keywords: ['repeat tests', 'second opinion', 'investigations', 'imaging', 'avoid', 'unnecessary'],
  },

  // ─── REPORTS & SCANS ─────────────────────────────────────────────────────────
  {
    id: 'reports-xray',
    category: 'Reports & Scans',
    question: 'Should I bring my previous X-rays to the consultation?',
    answer:
      'If you have previous X-rays relevant to your condition, bringing them can provide useful background information for your consultation. Both the physical films and any written reports are helpful.',
    keywords: ['X-ray', 'xray', 'bring', 'reports', 'consultation', 'imaging'],
  },
  {
    id: 'reports-mri',
    category: 'Reports & Scans',
    question: 'Should I bring my MRI or CT scan reports?',
    answer:
      'If you already have relevant MRI scans, CT scans or reports, bringing them can provide useful background for your consultation. The doctor can advise whether any additional imaging is needed after reviewing your symptoms, examination and existing reports.',
    keywords: ['MRI', 'CT scan', 'reports', 'scan', 'imaging', 'bring', 'investigation'],
    featured: true,
  },
  {
    id: 'reports-from-another-hospital',
    category: 'Reports & Scans',
    question: 'Can I bring scans done at another hospital?',
    answer:
      'Yes. Scans and reports from any hospital or imaging centre are relevant and can be brought for review. Bringing the actual disc or film along with the written report is recommended.',
    keywords: ['another hospital', 'external', 'different', 'scans', 'transfer', 'reports'],
  },
  {
    id: 'reports-send-before',
    category: 'Reports & Scans',
    question: 'Can I send reports before my appointment?',
    answer:
      'To enquire about sharing reports before your appointment, please contact the clinic directly. The team can advise on the best way to provide previous reports or imaging prior to your consultation.',
    keywords: ['send', 'reports', 'before', 'appointment', 'email', 'WhatsApp', 'share'],
  },
  {
    id: 'reports-no-reports',
    category: 'Reports & Scans',
    question: 'What if I do not have any previous reports?',
    answer:
      'A consultation can proceed without previous reports. The doctor will assess your symptoms and examination findings and advise on any investigations that may be appropriate based on the clinical picture.',
    keywords: ['no reports', 'without', 'missing', 'lost', 'unavailable', 'investigation'],
  },
  {
    id: 'reports-how-recent',
    category: 'Reports & Scans',
    question: 'How recent should my scans be?',
    answer:
      'The clinical relevance of existing scans depends on your condition and how much may have changed since they were taken. Bring whatever you have available and the doctor can advise whether updated imaging is necessary.',
    keywords: ['how recent', 'old', 'expired', 'scans', 'valid', 'date', 'current'],
  },

  // ─── FOLLOW-UP CARE ──────────────────────────────────────────────────────────
  {
    id: 'followup-book',
    category: 'Follow-up Care',
    question: 'How do I book a post-surgery follow-up appointment?',
    answer:
      'Follow-up appointments can be arranged through the clinic. The team will usually advise on the timing and scheduling of your next visit before or shortly after your discharge.',
    keywords: ['follow-up', 'post surgery', 'book', 'appointment', 'next visit', 'review'],
  },
  {
    id: 'followup-bring',
    category: 'Follow-up Care',
    question: 'What should I bring to a follow-up appointment?',
    answer:
      'Bring any new reports or imaging obtained since your last visit, a list of current medications if they have changed, and a note of any symptoms or concerns you would like to discuss.',
    keywords: ['follow-up', 'bring', 'reports', 'appointment', 'documents', 'medications'],
  },
  {
    id: 'followup-what-happens',
    category: 'Follow-up Care',
    question: 'What happens during a follow-up visit?',
    answer:
      'A follow-up visit typically involves reviewing your recovery progress, assessing healing and function, discussing any concerns you have, and advising on the next steps in your rehabilitation or ongoing care.',
    keywords: ['follow-up', 'what happens', 'review', 'progress', 'recovery', 'assessment'],
  },
  {
    id: 'followup-how-often',
    category: 'Follow-up Care',
    question: 'How often are follow-up appointments required?',
    answer:
      'The frequency of follow-up appointments depends on your condition, procedure and recovery progress. The clinic team will advise on a suitable schedule as part of your ongoing care plan.',
    keywords: ['how often', 'follow-up', 'frequency', 'schedule', 'appointment', 'regular'],
  },
  {
    id: 'followup-questions',
    category: 'Follow-up Care',
    question: 'Who should I contact if I have appointment-related questions after my visit?',
    answer:
      'For appointment coordination, scheduling or general follow-up queries, please contact the clinic directly by phone or WhatsApp. Questions requiring clinical assessment may need a formal follow-up consultation.',
    keywords: ['contact', 'questions', 'after visit', 'follow-up', 'clinic', 'phone', 'WhatsApp'],
  },

  // ─── GENERAL ─────────────────────────────────────────────────────────────────
  {
    id: 'general-contact',
    category: 'General',
    question: 'How can I contact the clinic?',
    answer:
      'You can reach the clinic by phone at +91 93167 53985, via WhatsApp at the same number, or through the contact form on the website. For appointment requests, the online appointment form is also available.',
    keywords: ['contact', 'phone', 'WhatsApp', 'email', 'reach', 'clinic', 'number'],
  },
  {
    id: 'general-location',
    category: 'General',
    question: 'Where is the clinic located?',
    answer:
      'For current clinic location details and directions, please refer to the Contact page on this website or contact the clinic directly for the most up-to-date information.',
    keywords: ['location', 'address', 'directions', 'where', 'clinic', 'find', 'map'],
  },
  {
    id: 'general-whatsapp',
    category: 'General',
    question: 'Can I use WhatsApp for appointment coordination?',
    answer:
      'Yes. WhatsApp can be used to contact the clinic for appointment coordination queries. The clinic WhatsApp number is +91 93167 53985.',
    keywords: ['WhatsApp', 'appointment', 'contact', 'message', 'chat'],
  },
  {
    id: 'general-disclaimer',
    category: 'General',
    question: 'Is the information on this website medical advice?',
    answer:
      'No. The information on this website is intended for general guidance only and does not replace a personal medical consultation. For advice specific to your condition, please arrange a consultation.',
    keywords: ['medical advice', 'disclaimer', 'diagnosis', 'website information', 'general'],
  },
  {
    id: 'general-emergency',
    category: 'General',
    question: 'Can I use this page for urgent medical advice?',
    answer:
      'No. This page provides general information and is not intended for urgent medical assessment. If you believe you are experiencing a medical emergency, please contact local emergency services or visit the nearest appropriate hospital immediately.',
    keywords: ['emergency', 'urgent', 'medical advice', 'critical', 'immediate help'],
  },
];

// Featured questions shown in the "Most Asked" section
export const featuredFaqIds = [
  'appt-needed',
  'first-bring',
  'reports-mri',
  'treatment-no-surgery',
  'surgery-when-needed',
  'second-opinion',
];
