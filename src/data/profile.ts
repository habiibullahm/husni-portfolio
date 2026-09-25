export interface Experience {
  organization: string;
  role: string;
  period: string;
  highlights: string[];
  tools: string;
}
export interface Education { institution: string; degree: string; status?: string; period?: string; website: string }
export interface FieldExperience { organization: string; role: string; period: string }

export const profile = {
  location: 'Jakarta, Indonesia',
  email: 'husniattin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/husni-attin-83613224a/',
  careerTarget: 'Patient Admission & Healthcare Administration',
  portraitAlt: 'Husni Attin in a professional portrait wearing a black hijab and white blouse',
  summary: 'Admission / Frontliner at Bidakara Medical Center, supporting outpatient registration, ODC pre-admission, patient data verification, insurance and referral checks, and patient communication. D-III Environmental Health graduate currently pursuing a Bachelor’s degree in Public Health.',
  operationalTools: ['Clinic information system', 'Microsoft Excel', 'Microsoft Word', 'WhatsApp patient communication', 'Insurance and referral verification'],
  profileNarrative: [
    'I support patient-facing healthcare operations through registration, pre-admission, administrative verification, documentation, reporting, and clear communication with patients and internal teams.',
    'My Environmental Health background strengthens my attention to sanitation, safety, accuracy, and service quality. My ongoing Public Health study adds a broader perspective on healthcare delivery. Together, these foundations support reliable patient-administration and front-office work.',
  ],
  experiences: [
    {
      organization: 'Bidakara Medical Center (BIMC)', role: 'Admission / Frontliner', period: '20 January 2025 — Present',
      highlights: [
        'Manage outpatient registration and ODC pre-admission, ensuring patient, referral, insurance, and administrative information is complete before service handoff.',
        'Provide registration information through direct communication and WhatsApp, then coordinate with medical staff and cashiers to support smooth service flow.',
        'Handle initial patient enquiries professionally while following operational procedures and protecting patient confidentiality.',
      ],
      tools: 'Clinic information system · WhatsApp · Operational procedures',
    },
    {
      organization: 'Bamed Health Care Group', role: 'Frontliner', period: '16 February 2023 — 20 June 2024',
      highlights: [
        'Supported patient billing, treatment-information requests, and insurance-claim payment administration in a patient-facing clinic environment.',
        'Prepared weekly petty-cash reports and monthly operational records for utilities, payroll deductions, medical-service deductions, and clinic supplies.',
        'Used Microsoft Excel and Word to maintain recurring administrative reports and support clinic operations.',
      ],
      tools: 'Microsoft Excel · Microsoft Word · Weekly and monthly reporting',
    },
  ] satisfies Experience[],
  education: [
    { institution: 'Universitas Respati Indonesia (URINDO)', degree: 'Bachelor’s in Public Health', status: 'Currently studying', website: 'https://www.urindo.ac.id/id/' },
    { institution: 'Poltekkes Kemenkes Jakarta II', degree: 'Diploma III in Environmental Health', period: 'August 2019 — October 2022', website: 'https://poltekkesjkt2.ac.id/' },
  ] satisfies Education[],
  fieldExperience: [
    { organization: 'RSPAD Gatot Soebroto', role: 'Sanitarian Intern', period: '18 October — 31 October 2021' },
    { organization: 'PT Dok & Perkapalan Kodja Bahari (Persero) — Galangan II', role: 'QHSE Intern', period: '1 November — 28 November 2021' },
    { organization: 'Puskesmas Kecamatan Pasar Minggu', role: 'Sanitarian Intern', period: '29 November — 10 December 2021' },
    { organization: 'Puskesmas Kecamatan Baros', role: 'Environmental Health Intern', period: 'March 2022' },
  ] satisfies FieldExperience[],
  focusAreas: [
    ['Healthcare Administration', 'Patient-facing administrative workflows and operational support.'],
    ['Patient Admission', 'Registration, pre-admission, data verification, and patient information.'],
    ['Documentation & Reporting', 'Structured administrative reporting using Microsoft Office tools.'],
    ['Patient Service', 'Clear communication, service delivery, and initial complaint handling.'],
    ['Environmental Health', 'Academic and field foundation in sanitation and environmental health.'],
    ['Occupational Health & Safety', 'Foundational field exposure to workplace risk identification and QHSE.'],
  ],
  development: {
    title: 'Service Excellence & Selling Skill', provider: 'Inhouse Training', date: '17 June 2026', duration: '20 JPL',
    certificateNumber: 'TRN-CERT/2026/1118/034', certificateUrl: '/certificates/service-excellence-selling-skill-2026.pdf',
    topics: ['Service excellence in healthcare', 'Patient experience', 'Professional complaint handling', 'Ethical selling', 'Patient needs', 'Patient journey'],
  },
  values: [
    ['Communicative', 'Clear communication with patients, colleagues, and operational teams.'],
    ['Detail-oriented', 'Careful handling of administrative information, documentation, and reporting.'],
    ['Adaptable', 'Comfortable learning new workflows and working across service environments.'],
    ['Collaborative', 'Used to coordinating with colleagues across healthcare operations.'],
    ['Problem solver', 'Approaches day-to-day service issues calmly and practically.'],
  ],
  cvUrl: '/cv/husni-attin-cv.pdf',
} as const;
