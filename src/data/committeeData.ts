import profSatyanarayana from "@/assets/committee/prof_kn_satyanarayana.jpg";
import profSrinivasa from "@/assets/committee/prof_s_srinivasa_murthy.jpg";
import profMuthukumar from "@/assets/committee/prof_p_muthukumar.jpg";
import profAnilKumar from "@/assets/committee/prof_e_anil_kumar.jpg";
import profSaravanan from "@/assets/committee/prof_r_saravanan.jpg";
import profRamGopal from "@/assets/committee/prof_m_ram_gopal.jpg";
import profSaha from "@/assets/committee/prof_bidyut_baran_saha.jpg";
import drGnanasekaran from "@/assets/committee/dr_n_gnanasekaran.jpg";
import drVignesh from "@/assets/committee/dr_vignesh_tg.jpg";
import drFurquan from "@/assets/committee/dr_mohd_furquan.jpg";
import profGoswami from "@/assets/committee/prof_dy_goswami.jpg";
import profCoronas from "@/assets/committee/prof_alberto_coronas.jpg";
import profDutta from "@/assets/committee/prof_pradip_dutta.jpg";
import profPramod from "@/assets/committee/prof_pramod_kumar.jpg";
import profMathur from "@/assets/committee/prof_jyotirmay_mathur.jpg";
import drShukla from "@/assets/committee/dr_yashkumar_shukla.jpg";
import profRane from "@/assets/committee/prof_mv_rane.jpg";
import drDevotta from "@/assets/committee/dr_sukumar_devotta.jpg";
import profDasgupta from "@/assets/committee/prof_ms_dasgupta.jpg";
import profHafner from "@/assets/committee/prof_armin_hafner.jpg";
import drAdvaith from "@/assets/committee/dr_advaith.jpg";
import drSekhar from "@/assets/committee/dr_b_satya_sekhar.jpg";
import drGurubalan from "@/assets/committee/dr_gurubalan_a.jpg";
import drKiranNaik from "@/assets/committee/dr_b_kiran_naik.jpg";
import profSarkar from "@/assets/committee/prof_jahar_sarkar.jpg";
import drRai from "@/assets/committee/dr_aakash_c_rai.jpg";
import drSahoo from "@/assets/committee/dr_s_sahoo.jpg";
import drSharma from "@/assets/committee/dr_vinod_kumar_sharma.jpg";
import drPraveen from "@/assets/committee/dr_g_praveen_kumar.jpg";
import drHarikrishnan from "@/assets/committee/dr_harikrishnan_s.jpg";
import placeholderAvatar from "@/assets/committee/placeholder_avatar.jpg";

export interface CommitteeMember {
  name: string;
  designation: string;
  institution: string;
  photo: string;
  description?: string;
}

export interface CommitteeSection {
  title: string;
  members: CommitteeMember[];
}

export const committeeData: CommitteeSection[] = [
  {
    title: "Patron",
    members: [
      {
        name: "Prof. K. N. Satyanarayana",
        designation: "Director",
        institution: "IIT Tirupati",
        photo: profSatyanarayana,
        description: "Ph.D., Clemson University, South Carolina, USA; M.S., Clemson University, South Carolina, USA; B.Tech, IIT Madras, India",
      },
    ],
  },
  {
    title: "Chairman",
    members: [
      {
        name: "Prof. S. Srinivasa Murthy",
        designation: "Professor of Refrigeration and Clean Energy Technologies",
        institution: "IISc Bangalore",
        photo: profSrinivasa,
      },
      {
        name: "Prof. P. Muthukumar",
        designation: "Professor, Mechanical Engineering",
        institution: "IIT Tirupati",
        photo: profMuthukumar,
        description: "Ph.D. in Mechanical Engineering from IIT Madras (2005)",
      },
    ],
  },
  {
    title: "Co-Chairmen",
    members: [
      {
        name: "Prof. E. Anil Kumar",
        designation: "Professor, Mechanical Engineering",
        institution: "IIT Tirupati",
        photo: profAnilKumar,
        description: "Ph.D., IIT Madras, Chennai, India",
      },
      {
        name: "Prof. R. Saravanan",
        designation: "President Elect, ISHRAE",
        institution: "Anna University, Chennai",
        photo: profSaravanan,
        description: "Ph.D., IIT Madras",
      },
      {
        name: "Prof. M. Ram Gopal",
        designation: "Professor, Mechanical Engineering",
        institution: "IIT Kharagpur",
        photo: profRamGopal,
      },
      {
        name: "Prof. Bidyut Baran Saha",
        designation: "Professor",
        institution: "WPI-I2CNER, Kyushu University, Japan",
        photo: profSaha,
      },
    ],
  },
  {
    title: "Organizing Committee",
    members: [
      {
        name: "Dr. N. Gnanasekaran",
        designation: "Faculty, Mechanical Engineering",
        institution: "IIT Tirupati",
        photo: drGnanasekaran,
        description: "Ph.D., Inverse Heat Transfer, IIT Madras, India; M.E., Thermal Engineering, Government College of Technology, Coimbatore, India",
      },
      {
        name: "Dr. Vignesh T.G.",
        designation: "Faculty, Mechanical Engineering",
        institution: "IIT Tirupati",
        photo: drVignesh,
        description: "Ph.D., Mechanical Engineering, Technische Universität Darmstadt, Germany; M.S., Mechanical Engineering, IIT Madras, India; B.E., Mechanical Engineering, Thiagarajar College of Engineering, Madurai, India",
      },
      {
        name: "Dr. Mohd Furquan",
        designation: "Faculty, Mechanical Engineering",
        institution: "IIT Tirupati",
        photo: drFurquan,
        description: "Ph.D., IIT Kanpur, India; M.Tech, IIT Kanpur, India; B.Tech, Aligarh Muslim University, India",
      },
    ],
  },
  {
    title: "Advisory Committee",
    members: [
      {
        name: "Prof. S. Srinivasa Murthy",
        designation: "Professor Emeritus, ICER",
        institution: "IISc Bangalore",
        photo: profSrinivasa,
        description: "Doctor of Philosophy, Professor Emeritus at IISc Bangalore",
      },
      {
        name: "Prof. D. Yogi Goswami",
        designation: "Distinguished University Professor",
        institution: "University of South Florida, USA",
        photo: profGoswami,
        description: "Ph.D., Mechanical Engineering, Auburn University, Alabama; M.S., Mechanical Engineering, Auburn University, Alabama; B.S., Mechanical Engineering, University of Delhi, India",
      },
      {
        name: "Prof. Alberto Coronas",
        designation: "Full Professor, Mechanical Engineering",
        institution: "University Rovira i Virgili, Spain",
        photo: profCoronas,
        description: "Founder and Director of the research group of Applied Thermal Engineering-CREVER",
      },
      {
        name: "Prof. Pradip Dutta",
        designation: "Professor, Mechanical Engineering",
        institution: "IISc Bangalore",
        photo: profDutta,
        description: "Ph.D., Columbia University, New York (1992); M.Tech, IIT Madras (1987); B.Tech, IIT Kharagpur (1983)",
      },
      {
        name: "Prof. Pramod Kumar",
        designation: "Chairperson, ISER",
        institution: "IISc Bangalore",
        photo: profPramod,
        description: "Ph.D., IISc Bangalore (2008); M.S., IISc Bangalore (2001); B.E., Govt. Engineering College, Goa (1997)",
      },
      {
        name: "Prof. Jyotirmay Mathur",
        designation: "Professor-HAG, Mechanical Engineering",
        institution: "MNIT Jaipur",
        photo: profMathur,
        description: "Ph.D., University of Essen, Germany (2001); M.Tech, IIT Delhi, India (1998); B.E., University of Jodhpur, India (1991)",
      },
      {
        name: "Dr. Yashkumar Shukla",
        designation: "Principal Researcher & Centre Head, CARBSE",
        institution: "CEPT University, Ahmedabad",
        photo: drShukla,
      },
      {
        name: "Mr. I. Hariprasad",
        designation: "President Elect",
        institution: "ASHRAE Chennai Chapter",
        photo: placeholderAvatar,
      },
      {
        name: "Prof. M. V. Rane",
        designation: "Professor, Mechanical Engineering",
        institution: "IIT Bombay",
        photo: profRane,
      },
      {
        name: "Dr. Sukumar Devotta",
        designation: "Former Director",
        institution: "NEERI",
        photo: drDevotta,
        description: "Hon. Professor of Eminence, Anna University, Chennai; Chemical & Environmental Engineering Consultant",
      },
      {
        name: "Prof. M. S. Dasgupta",
        designation: "Senior Professor, Mechanical Engineering",
        institution: "BITS Pilani",
        photo: profDasgupta,
      },
      {
        name: "Prof. Armin Hafner",
        designation: "Professor, Energy and Process Engineering",
        institution: "NTNU, Norway",
        photo: profHafner,
        description: "Prominent researcher in refrigeration technology and thermal energy systems",
      },
    ],
  },
  {
    title: "Technical Committee",
    members: [
      {
        name: "Dr. Advaith",
        designation: "Assistant Professor, Mechanical Engineering",
        institution: "IIT Madras",
        photo: drAdvaith,
      },
      {
        name: "Dr. B. Satya Sekhar",
        designation: "Associate Professor & HoD, Mechanical Engineering",
        institution: "IIT Jammu",
        photo: drSekhar,
        description: "Leads the Clean Energy Research & Affordable Technologies (CREATE) laboratory",
      },
      {
        name: "Dr. Gurubalan A",
        designation: "Assistant Professor, Energy Science & Engineering",
        institution: "IIT Bombay",
        photo: drGurubalan,
        description: "Focuses on design and development of sustainable HVAC and refrigeration systems",
      },
      {
        name: "Dr. B. Kiran Naik",
        designation: "Assistant Professor, Mechanical Engineering",
        institution: "NIT Rourkela",
        photo: drKiranNaik,
        description: "Directs the Sustainable Thermal Energy Systems Laboratory (STESL), focusing on clean energy and environmental sustainability",
      },
      {
        name: "Prof. Jahar Sarkar",
        designation: "Professor, Mechanical Engineering",
        institution: "IIT (BHU)",
        photo: profSarkar,
        description: "Top 2% global scientist (Stanford/Elsevier 2021–2025); 1st rank within the institute for 2024 and 2025",
      },
      {
        name: "Dr. Aakash C. Rai",
        designation: "Associate Professor, Sustainable Energy Engineering",
        institution: "IIT Kanpur",
        photo: drRai,
        description: "Ph.D., Mechanical Engineering, Purdue University; Research focuses on energy-efficient buildings and impact of climate change on building cooling/heating",
      },
      {
        name: "Dr. S. Sahoo",
        designation: "Associate Professor, Mechanical Engineering",
        institution: "IIT (ISM) Dhanbad",
        photo: drSahoo,
        description: "Research focuses on storage systems, heat and mass transfer studies, and carbon capture",
      },
      {
        name: "Dr. Vinod Kumar Sharma",
        designation: "Assistant Professor, Mechanical Engineering",
        institution: "NIT Calicut",
        photo: drSharma,
        description: "Associate Dean, Planning & Development; Research focuses on sustainable energy and thermal systems",
      },
      {
        name: "Dr. G. Praveen Kumar",
        designation: "Assistant Professor, SMEC",
        institution: "VIT Vellore",
        photo: drPraveen,
        description: "Specializes in Thermal and Energy Engineering; Research focuses on energy systems, sustainability, and thermal management",
      },
      {
        name: "Dr. Harikrishnan S",
        designation: "Assistant Professor, Mechanical Engineering",
        institution: "CUSAT, Kochi",
        photo: drHarikrishnan,
        description: "Specializes in Thermal Engineering with focus on heat transfer and fluid dynamics",
      },
    ],
  },
];
