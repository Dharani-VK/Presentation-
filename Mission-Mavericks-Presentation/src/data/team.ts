// Mission Mavericks Team Data
// Order is mandatory — follows the exact approved team table structure.

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string[];
  image: string;
  /** Coach and Mentor receive slightly more premium card styling */
  isPremium?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'chandra-sekhar-siddabattula',
    name: 'Chandra Sekhar Siddabattula',
    role: 'Coach',
    focus: ['Program Strategy', 'Executive Guidance'],
    image: '/images/Chandra Sekhar Siddabattula.jpg',
    isPremium: true,
  },
  {
    id: 'thiyagarajan-mani',
    name: 'Thiyagarajan Mani',
    role: 'Mentor',
    focus: ['Domain Expertise', 'Solution Architecture'],
    image: '/images/Thiyagarajan Mani.jpg',
    isPremium: true,
  },
  {
    id: 'jijendra-manoharan',
    name: 'Jijendra Manoharan',
    role: 'Business Analyst',
    focus: ['Project Discovery', 'Innovation', 'Solution Design'],
    image: '/images/Jijendra Manoharan.jpg',
  },
  {
    id: 'isha-subash',
    name: 'Isha Subash',
    role: 'Business Analyst',
    focus: ['Project Discovery', 'Innovation', 'Solution Design'],
    image: '/images/Isha Subash.jpg',
  },
  {
    id: 'dharani-veerapathiran',
    name: 'Dharani Veerapathiran',
    role: 'Business Analyst',
    focus: ['Project Discovery', 'Innovation', 'Solution Design'],
    image: '/images/Dharani Veerapathiran.jpg',
  },
  {
    id: 'gowdham-gokul',
    name: 'Gowdham Gokul',
    role: 'Front End Developer',
    focus: ['QA', 'Solution Design'],
    image: '/images/Gowdham Gokul.jpg',
  },
  {
    id: 'dharun-krishna-manoharan',
    name: 'Dharun Krishna Manoharan',
    role: 'Front End & Back End Developer',
    focus: ['QA', 'Solution Design'],
    image: '/images/Dharun Krishna Manoharan.jpg',
  },
  {
    id: 'monisha-murugavel',
    name: 'Monisha Murugavel',
    role: 'Front End Developer',
    focus: ['QA', 'Solution Design'],
    image: '/images/Monisha Murugavel.jpg',
  },
  {
    id: 'desingh-kannan',
    name: 'Desingh Kannan',
    role: 'QA',
    focus: ['Website Front End Developer'],
    image: '/images/Desingh Kannan.jpg',
  },
  {
    id: 'varun-sai-addepalli',
    name: 'Varun Sai Addepalli',
    role: 'QA',
    focus: ['Website Front End Developer'],
    image: '/images/Varun Sai Addepalli.jpg',
  },
  {
    id: 'pavithra-aruchamy',
    name: 'Pavithra Aruchamy',
    role: 'Scrum Master',
    focus: ['QA', 'Innovation', 'PMO'],
    image: '/images/Pavithra Aruchamy.jpg',
  },
];

import missionMavericksLogoImg from '../assets/mission-mavericks-logo.png';

export const MISSION_MAVERICKS_LOGO = missionMavericksLogoImg;

