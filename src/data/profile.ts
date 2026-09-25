export interface Experience {
  organization: string;
  role: string;
  period: string;
  caseStudy: {
    context: string;
    responsibility: string;
    process: string;
    deliverables: string;
    toolsAndControls: string;
  };
}
export interface Education { institution: string; degree: string; status?: string; period?: string; website: string }
export interface FieldExperience { organization: string; role: string; period: string }

export const profile = {
  location: 'Jakarta, Indonesia',
  email: 'husniattin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/husni-attin-83613224a/',
  careerTarget: 'Healthcare Administration Staff',
  portraitAlt: 'Husni Attin in a professional portrait wearing a black hijab and white blouse',
  summary: 'Supporting efficient healthcare operations through patient administration, structured documentation, service excellence, and a foundation in environmental health.',
  experiences: [
    {
      organization: 'Bidakara Medical Center (BIMC)', role: 'Admission / Frontliner', period: '20 January 2025 — Present',
      caseStudy: {
        context: 'Outpatient registration and one-day-care (ODC) pre-admission at a medical center.',
        responsibility: 'Verify patient, insurance, referral, and administrative information while protecting confidentiality.',
        process: 'Support online registration and patient information via WhatsApp, then coordinate with medical staff and cashiers. Respond to initial patient concerns.',
        deliverables: 'Patient registration, ODC pre-admission, and coordinated service handoffs.',
        toolsAndControls: 'Clinic information system, WhatsApp, operational procedures, and patient-data confidentiality.',
      },
    },
    {
      organization: 'Bamed Health Care Group', role: 'Frontliner', period: '16 February 2023 — 20 June 2024',
      caseStudy: {
        context: 'Patient-facing billing and recurring clinic administration.',
        responsibility: 'Handle patient invoices, treatment information, and insurance-claim payment administration.',
        process: 'Prepare operational reports and track petty cash, utilities, payroll and medical-service deductions, and clinic supplies.',
        deliverables: 'Weekly petty-cash reports and monthly records for operational costs, deductions, and clinic supplies.',
        toolsAndControls: 'Microsoft Excel and Word; weekly and monthly reporting cadence.',
      },
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
