// Content source: https://deepakgoel.in/about-deepak-goel/
// (education/career details cross-checked against /area-of-expertise-deepak-goel/)

export type Education = { degree: string; school: string; year: string };

export const EDUCATION: Education[] = [
  {
    degree: "PGDM (MBA) - IT & Management Systems / Marketing",
    school: "Symbiosis SCMHRD, Pune",
    year: "2001 - 2003",
  },
  {
    degree: "PG Diploma in Sales & Marketing",
    school: "National Institute of Sales, New Delhi",
    year: "1996 - 1998",
  },
  {
    degree: "B.A. (Hons.) Economics",
    school: "University of Delhi",
    year: "1995 - 1998",
  },
  { degree: "AISSCE (CBSE)", school: "New Delhi", year: "1994 - 1995" },
];

export type CareerRole = { company: string; role: string; current?: boolean };

export const CAREER: CareerRole[] = [
  { company: "Digitally Next", role: "Strategic Driver", current: true },
  { company: "iMET Global", role: "Group CEO", current: true },
  { company: "iSoCIAL", role: "Group CEO", current: true },
  { company: "Advent Global Solutions", role: "Director - Business Strategy" },
  { company: "Hexaware Technologies", role: "Director - Americas" },
  { company: "Ariba Inc", role: "Sr Manager - Sales Operations" },
  { company: "QAI Asia", role: "Manager - Client Services" },
  { company: "Fujitsu Zensar", role: "Manager - International Marketing" },
  { company: "Bharti Telecom (Airtel)", role: "Customer Services" },
];
