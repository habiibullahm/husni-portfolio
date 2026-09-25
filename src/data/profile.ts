export interface Experience { organization: string; role: string; period: string; bullets: string[] }
export interface Education { institution: string; degree: string; status?: string; period?: string; website: string }
export interface FieldExperience { organization: string; role: string; period: string; summary: string }

export const profile = {
  name: 'Husni Attin',
  headline: 'Healthcare Administration | Environmental Health | Public Health',
  location: 'Jakarta, Indonesia',
  email: 'husniattin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/husni-attin-83613224a/',
  careerTarget: 'Healthcare Administration Staff',
  portraitAlt: 'Husni Attin in a professional portrait wearing a black hijab and white blouse',
  summary: 'Supporting efficient healthcare operations through patient administration, structured documentation, service excellence, and a foundation in environmental health.',
  experiences: [
    {
      organization: 'Bidakara Medical Center (BIMC)', role: 'Admission / Frontliner', period: '20 January 2025 — Present',
      bullets: [
        'Manage outpatient registration and ODC pre-admission in line with operational procedures.',
        'Verify patient, insurance, referral, and administrative information while protecting confidentiality.',
        'Support online registration and patient information services, including through WhatsApp.',
        'Coordinate with medical staff and cashiers to support smooth patient-service workflows.',
        'Respond to initial patient concerns with clear, professional communication.',
      ],
    },
    {
      organization: 'Bamed Health Care Group', role: 'Frontliner', period: '16 February 2023 — 20 June 2024',
      bullets: [
        'Supported patient service through invoices, treatment information, and insurance-claim payment administration.',
        'Prepared recurring operational reports using Microsoft Excel and Word.',
        'Maintained weekly petty-cash reports and monthly records for utilities, payroll deductions, medical-service deductions, and clinic supplies.',
      ],
    },
  ] satisfies Experience[],
  education: [
    { institution: 'Universitas Respati Indonesia (URINDO)', degree: 'Bachelor’s in Public Health', status: 'Currently studying', website: 'https://www.urindo.ac.id/id/' },
    { institution: 'Poltekkes Kemenkes Jakarta II', degree: 'Diploma III in Environmental Health', period: 'August 2019 — October 2022', website: 'https://poltekkesjkt2.ac.id/' },
  ] satisfies Education[],
  fieldExperience: [
    { organization: 'RSPAD Gatot Soebroto', role: 'Sanitarian Intern', period: '18 October — 31 October 2021', summary: 'Conducted environmental health measurements, identified hospital sanitation conditions, and analyzed findings.' },
    { organization: 'PT Dok & Perkapalan Kodja Bahari (Persero) — Galangan II', role: 'QHSE Intern', period: '1 November — 28 November 2021', summary: 'Conducted environmental health measurements and identification, then analyzed the findings.' },
    { organization: 'Puskesmas Kecamatan Pasar Minggu', role: 'Sanitarian Intern', period: '29 November — 10 December 2021', summary: 'Performed environmental health assessments and workplace safety risk analysis across the district clinic and two urban clinics.' },
    { organization: 'Puskesmas Kecamatan Baros', role: 'Environmental Health Intern', period: 'March 2022', summary: 'Supported sanitation-clinic services for patients with environmentally related illnesses.' },
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
