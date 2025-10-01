// Icon mapping for technologies and platforms
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaMicrosoft,
  FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGitAlt, FaGithub,
  FaGitlab, FaDatabase, FaLinkedin, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaFileDownload, FaExchangeAlt
} from 'react-icons/fa';
import { 
  SiJavascript, SiRedux, SiExpress, SiMongodb, SiMysql,
  SiRedis
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

// Technology icon mapping
export const getTechIcon = (techName) => {
  const iconMap = {
    // Frontend
    'ReactJS': FaReact,
    'React': FaReact,
    'Redux': SiRedux,
    'HTML5': FaHtml5,
    'HTML': FaHtml5,
    'CSS': FaCss3Alt,
    'CSS3': FaCss3Alt,
    'SASS': FaSass,
    'Bootstrap': FaBootstrap,
    'JavaScript': SiJavascript,
    'JS': IoLogoJavascript,
    
    // Backend
    'NodeJS': FaNodeJs,
    'Node.js': FaNodeJs,
    'Node': FaNodeJs,
    'ExpressJS': SiExpress,
    'Express': SiExpress,
    'Python': FaPython,
    
    // Database
    'MongoDB': SiMongodb,
    'MySQL': SiMysql,
    'Database': FaDatabase,
    'Redis': SiRedis,
    
    // Cloud
    'AWS': FaAws,
    'Azure': FaMicrosoft,
    
    // DevOps & Tools
    'Docker': FaDocker,
    'Git': FaGitAlt,
    'Git/GitHub': FaGithub,
    'GitHub': FaGithub,
    'GitLab': FaGitlab,
    'WebSockets': FaExchangeAlt, // ✅ replaced SiWebsocket
    
    // Default
    'default': FaDatabase
  };

  const IconComponent = iconMap[techName] || iconMap['default'];
  return IconComponent;
};

// Social media icon mapping
export const getSocialIcon = (platform) => {
  const socialMap = {
    'linkedin': FaLinkedin,
    'github': FaGithub,
    'email': FaEnvelope,
    'phone': FaPhone,
    'location': FaMapMarkerAlt,
    'download': FaFileDownload
  };

  return socialMap[platform.toLowerCase()] || FaEnvelope;
};

// Get icon color based on technology
export const getTechColor = (techName) => {
  const colorMap = {
    'ReactJS': '#61DAFB',
    'React': '#61DAFB',
    'Redux': '#764ABC',
    'NodeJS': '#339933',
    'Node.js': '#339933',
    'Node': '#339933',
    'JavaScript': '#F7DF1E',
    'JS': '#F7DF1E',
    'Python': '#3776AB',
    'HTML5': '#E34F26',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'CSS3': '#1572B6',
    'SASS': '#CC6699',
    'Bootstrap': '#7952B3',
    'MongoDB': '#47A248',
    'MySQL': '#4479A1',
    'AWS': '#FF9900',
    'Azure': '#0078D4',
    'Docker': '#2496ED',
    'Git': '#F05032',
    'GitHub': '#181717',
    'GitLab': '#FC6D26',
    'ExpressJS': '#000000',
    'Express': '#000000',
    'Redis': '#DC382D',
    'WebSockets': '#010101', // keep a dark neutral for websockets
    'default': '#007bff'
  };

  return colorMap[techName] || colorMap['default'];
};
