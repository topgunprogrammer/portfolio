// Icon mapping for technologies and platforms
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaMicrosoft,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileDownload,
  FaExchangeAlt,
  FaAndroid,
  FaApple,
  FaBrain,
  FaRobot,
  FaChartBar,
  FaServer,
  FaCog,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiTypescript,
  SiWebpack,
  SiBabel,
  SiNginx,
  SiPostgresql,
  SiAmazondynamodb,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiD3Dotjs,
  SiSpring,
  SiSpringboot,
  SiGraphql,
  SiKubernetes,
  SiApachekafka,
  SiSplunk,
  SiSwagger,
  SiOpenai,
  SiGitlab,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

// Technology icon mapping
export const getTechIcon = (techName) => {
  const iconMap = {
    // AI & ML Technologies
    Python: FaPython,
    TensorFlow: SiTensorflow,
    PyTorch: SiPytorch,
    Pandas: SiPandas,
    NumPy: SiNumpy,
    Tableau: SiTableau,
    "D3.js": SiD3Dotjs,
    ChatGPT: SiOpenai,
    AI: FaBrain,
    ML: FaRobot,
    NLP: FaBrain,
    DeepLearning: FaRobot,
    DataAnalysis: FaChartBar,
    DataEngineering: FaServer,

    // Frontend
    ReactJS: FaReact,
    React: FaReact,
    Redux: SiRedux,
    HTML5: FaHtml5,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    CSS3: FaCss3Alt,
    SASS: FaSass,
    Bootstrap: FaBootstrap,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    JS: IoLogoJavascript,
    Webpack: SiWebpack,
    Babel: SiBabel,

    // Backend
    NodeJS: FaNodeJs,
    "Node.js": FaNodeJs,
    Node: FaNodeJs,
    ExpressJS: SiExpress,
    Express: SiExpress,
    Spring: SiSpring,
    SpringBoot: SiSpringboot,
    GraphQL: SiGraphql,

    // Database
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    Database: FaDatabase,
    Redis: SiRedis,
    DynamoDB: SiAmazondynamodb,

    // Cloud & DevOps
    AWS: FaAws,
    Azure: FaMicrosoft,
    Docker: FaDocker,
    Kubernetes: SiKubernetes,
    Nginx: SiNginx,
    Kong: FaCog,
    Splunk: SiSplunk,
    Kafka: SiApachekafka,
    Swagger: SiSwagger,

    // Tools
    Git: FaGitAlt,
    "Git/GitHub": FaGithub,
    GitHub: FaGithub,
    GitLab: SiGitlab,
    WebSockets: FaExchangeAlt,

    // Mobile
    iOS: FaApple,
    Android: FaAndroid,

    // Default
    default: FaDatabase,
  };

  const IconComponent = iconMap[techName] || iconMap["default"];
  return IconComponent;
};

// Social media icon mapping
export const getSocialIcon = (platform) => {
  const socialMap = {
    linkedin: FaLinkedin,
    github: FaGithub,
    email: FaEnvelope,
    phone: FaPhone,
    location: FaMapMarkerAlt,
    download: FaFileDownload,
  };

  return socialMap[platform.toLowerCase()] || FaEnvelope;
};

// Get icon color based on technology
export const getTechColor = (techName) => {
  const colorMap = {
    // AI & ML Technologies
    Python: "#3776AB",
    TensorFlow: "#FF6F00",
    PyTorch: "#EE4C2C",
    Pandas: "#150458",
    NumPy: "#013243",
    Tableau: "#E97627",
    "D3.js": "#F68E56",
    ChatGPT: "#10A37F",
    AI: "#FF6B6B",
    ML: "#4ECDC4",
    NLP: "#45B7D1",
    DeepLearning: "#9B59B6",
    DataAnalysis: "#3498DB",
    DataEngineering: "#E74C3C",

    // Frontend
    ReactJS: "#61DAFB",
    React: "#61DAFB",
    Redux: "#764ABC",
    HTML5: "#E34F26",
    HTML: "#E34F26",
    CSS: "#1572B6",
    CSS3: "#1572B6",
    SASS: "#CC6699",
    Bootstrap: "#7952B3",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    JS: "#F7DF1E",
    Webpack: "#8DD6F9",
    Babel: "#F9DC3E",

    // Backend
    NodeJS: "#339933",
    "Node.js": "#339933",
    Node: "#339933",
    ExpressJS: "#000000",
    Express: "#000000",
    Spring: "#6DB33F",
    SpringBoot: "#6DB33F",
    GraphQL: "#E10098",

    // Database
    MongoDB: "#47A248",
    MySQL: "#4479A1",
    PostgreSQL: "#336791",
    Redis: "#DC382D",
    DynamoDB: "#FF9900",
    Database: "#007bff",

    // Cloud & DevOps
    AWS: "#FF9900",
    Azure: "#0078D4",
    Docker: "#2496ED",
    Kubernetes: "#326CE5",
    Nginx: "#009639",
    Kong: "#003459",
    Splunk: "#000000",
    Kafka: "#231F20",
    Swagger: "#85EA2D",

    // Tools
    Git: "#F05032",
    GitHub: "#181717",
    GitLab: "#FC6D26",
    WebSockets: "#010101",

    // Mobile
    iOS: "#007AFF",
    Android: "#3DDC84",

    // Default
    default: "#007bff",
  };

  return colorMap[techName] || colorMap["default"];
};
