import chandraSekharImg from '../Assets/team/chandra-sekhar-siddabattula.jpg';
import thiyagarajanImg from '../Assets/team/thiyagarajan-mani.jpg';
import jijendraImg from '../Assets/team/jijendra-manoharan.jpg';
import ishaImg from '../Assets/team/isha-subash.jpg';
import dharaniImg from '../Assets/team/dharani-veerapathiran.jpg';
import gowdhamImg from '../Assets/team/gowdham-gokul.jpg';
import dharunKrishnaImg from '../Assets/team/dharun-krishna-manoharan.jpg';
import monishaImg from '../Assets/team/monisha-murugavel.jpg';
import desinghImg from '../Assets/team/desingh-kannan.jpg';
import varunSaiImg from '../Assets/team/varun-sai-addepalli.jpg';
import pavithraImg from '../Assets/team/pavithra-aruchamy.jpg';
import missionMavericksLogoImg from '../Assets/mission-mavericks-logo.png';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  responsibilities?: string;
  focus?: string[];
  image: string;
  /** Coach and Mentor receive slightly more premium card styling */
  isPremium?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'chandra-sekhar-siddabattula',
    name: 'Chandra Sekhar Siddabattula',
    role: 'Coach',
    responsibilities: '',
    focus: [],
    image: chandraSekharImg,
    isPremium: true,
  },
  {
    id: 'thiyagarajan-mani',
    name: 'Thiyagarajan Mani',
    role: 'Mentor',
    responsibilities: 'Domain Expertise',
    focus: ['Domain Expertise'],
    image: thiyagarajanImg,
    isPremium: true,
  },
  {
    id: 'jijendra-manoharan',
    name: 'Jijendra Manoharan',
    role: 'Business Analyst',
    responsibilities: 'Project Discovery, Innovation, Solution Design, Website Front End Developer',
    focus: ['Project Discovery', 'Innovation', 'Solution Design', 'Website Front End Developer'],
    image: jijendraImg,
  },
  {
    id: 'isha-subash',
    name: 'Isha Subash',
    role: 'Business Analyst',
    responsibilities: 'Project Discovery, Innovation, Solution Design, Website Front End Developer',
    focus: ['Project Discovery', 'Innovation', 'Solution Design', 'Website Front End Developer'],
    image: ishaImg,
  },
  {
    id: 'dharani-veerapathiran',
    name: 'Dharani Veerapathiran',
    role: 'Business Analyst',
    responsibilities: 'Project Discovery, Innovation, Solution Design, Website Front End Developer',
    focus: ['Project Discovery', 'Innovation', 'Solution Design', 'Website Front End Developer'],
    image: dharaniImg,
  },
  {
    id: 'gowdham-gokul',
    name: 'Gowdham Gokul',
    role: 'Front End Developer',
    responsibilities: 'QA, Solution Design',
    focus: ['QA', 'Solution Design'],
    image: gowdhamImg,
  },
  {
    id: 'dharun-krishna-manoharan',
    name: 'Dharun Krishna Manoharan',
    role: 'Front End & Back End Developer',
    responsibilities: 'QA, Solution Design',
    focus: ['QA', 'Solution Design'],
    image: dharunKrishnaImg,
  },
  {
    id: 'monisha-murugavel',
    name: 'Monisha Murugavel',
    role: 'Front End Developer',
    responsibilities: 'QA, Solution Design',
    focus: ['QA', 'Solution Design'],
    image: monishaImg,
  },
  {
    id: 'desingh-kannan',
    name: 'Desingh Kannan',
    role: 'QA',
    responsibilities: 'Website Front End Developer',
    focus: ['Website Front End Developer'],
    image: desinghImg,
  },
  {
    id: 'varun-sai-addepalli',
    name: 'Varun Sai Addepalli',
    role: 'QA',
    responsibilities: 'Website Front End Developer',
    focus: ['Website Front End Developer'],
    image: varunSaiImg,
  },
  {
    id: 'pavithra-aruchamy',
    name: 'Pavithra Aruchamy',
    role: 'Scrum Master',
    responsibilities: 'QA, Innovation, PMO, Website Front End Developer',
    focus: ['QA', 'Innovation', 'PMO', 'Website Front End Developer'],
    image: pavithraImg,
  },
];

export const MISSION_MAVERICKS_LOGO = missionMavericksLogoImg;


