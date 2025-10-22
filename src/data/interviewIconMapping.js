import {
  FaCode,
  FaProjectDiagram,
  FaUserTie,
  FaCogs,
  FaRobot,
} from "react-icons/fa";

export const getInterviewIcon = (label) => {
  switch (label) {
    case "DSA":
      return FaCode;
    case "Design":
      return FaProjectDiagram;
    case "Behavioural":
      return FaUserTie;
    case "SDE":
      return FaCogs;
    case "ML/AI":
      return FaRobot;
    default:
      return FaCode;
  }
};
