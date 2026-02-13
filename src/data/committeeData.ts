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
import mrHariprasad from "@/assets/committee/mr_i_hariprasad.jpg";
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
        description: "Ph.D., Clemson University, South Carolina, USA",
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
        description: "PhD in Mechanical Engineering from IIT Madras",
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
        description: "Ph.D., IIT Madras, Chennai",
      },
      {
        name: "Prof. R. Saravanan",
        designation: "President Elect, ISHRAE",
        institution: "Anna University, Chennai",
        photo: profSaravanan,
        description: "PhD, IIT Madras",
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
        description: "Ph.D., IIT Madras (Inverse Heat Transfer)",
      },
      {
        name: "Dr. Vignesh T.G.",
        designation: "Faculty, Mechanical Engineering",
        institution: "IIT Tirupati",
        photo: drVignesh,
      },
      {
        name: "Dr. Mohd Furquan",
        designation: "Faculty, Mechanical Engineering",
        institution: "IIT Tirupati",
        photo: drFurquan,
        description: "Ph.D., TU Darmstadt, Germany",
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
      },
      {
        name: "Prof. D. Yogi Goswami",
        designation: "Distinguished University Professor",
        institution: "University of South Florida, USA",
        photo: profGoswami,
      },
      {
        name: "Prof. Alberto Coronas",
        designation: "Full Professor, Mechanical Engineering",
        institution: "University Rovira i Virgili, Spain",
        photo: profCoronas,
      },
      {
        name: "Prof. Pradip Dutta",
        designation: "Professor, Mechanical Engineering",
        institution: "IISc Bangalore",
        photo: profDutta,
        description: "PhD, Columbia University, New York",
      },
      {
        name: "Prof. Pramod Kumar",
        designation: "Chairperson, ISER",
        institution: "IISc Bangalore",
        photo: profPramod,
      },
      {
        name: "Prof. Jyotirmay Mathur",
        designation: "Professor-HAG, Mechanical Engineering",
        institution: "MNIT Jaipur",
        photo: profMathur,
      },
      {
        name: "Dr. Yashkumar Shukla",
        designation: "Principal Researcher & Head, CARBSE",
        institution: "CEPT University, Ahmedabad",
        photo: drShukla,
      },
      {
        name: "Mr. I. Hariprasad",
        designation: "President Elect",
        institution: "ASHRAE Chennai Chapter",
        photo: mrHariprasad,
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
      },
      {
        name: "Dr. Gurubalan A",
        designation: "Assistant Professor, Energy Science & Engineering",
        institution: "IIT Bombay",
        photo: drGurubalan,
      },
      {
        name: "Dr. B. Kiran Naik",
        designation: "Assistant Professor, Mechanical Engineering",
        institution: "NIT Rourkela",
        photo: drKiranNaik,
      },
      {
        name: "Prof. Jahar Sarkar",
        designation: "Professor, Mechanical Engineering",
        institution: "IIT (BHU)",
        photo: profSarkar,
        description: "Top 2% global scientist (Stanford/Elsevier 2021–2025)",
      },
      {
        name: "Dr. Aakash C. Rai",
        designation: "Associate Professor, Sustainable Energy Engineering",
        institution: "IIT Kanpur",
        photo: drRai,
      },
      {
        name: "Dr. S. Sahoo",
        designation: "Associate Professor, Mechanical Engineering",
        institution: "IIT (ISM) Dhanbad",
        photo: drSahoo,
      },
      {
        name: "Dr. Vinod Kumar Sharma",
        designation: "Assistant Professor, Mechanical Engineering",
        institution: "NIT Calicut",
        photo: drSharma,
      },
      {
        name: "Dr. G. Praveen Kumar",
        designation: "Assistant Professor, SMEC",
        institution: "VIT Vellore",
        photo: drPraveen,
      },
      {
        name: "Dr. Harikrishnan S",
        designation: "Assistant Professor, Mechanical Engineering",
        institution: "CUSAT, Kochi",
        photo: drHarikrishnan,
      },
    ],
  },
];
