import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage";
import DSAPage from "../pages/DSAPage";
import DSAQuestionView from "../components/DSAQuestionView/DSAQuestionView";
import SystemDesignPage from "../pages/SystemDesignPage";
import SystemDesignQuestionPage from "../pages/SystemDesignQuestionPage";
import BehaviouralPage from "../pages/BehaviouralPage";
import BehaviouralQuestionPage from "../pages/BehaviouralQuestionPage";
import ContactPage from "../pages/ContactPage";
import ResumeOnlyPage from "../pages/ResumeOnlyPage";
import NotFound from "../components/NotFound/NotFound";

// Route configuration
export const routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
  experience: "/experience",
  dsa: "/dsa",
  systemDesign: "/system-design",
  behavioural: "/behavioural",
  contact: "/contact",
  resume: "/resume",
};

// Navigation items for header
export const navigationItems = [
  { path: routes.home, label: "Home" },
  { path: routes.about, label: "About" },
  { path: routes.projects, label: "Projects" },
  { path: routes.experience, label: "Experience" },
  { path: routes.dsa, label: "DSA" },
  { path: routes.systemDesign, label: "System Design" },
  { path: routes.behavioural, label: "Behavioural" },
  { path: routes.contact, label: "Contact" },
  { path: routes.resume, label: "Resume" },
];

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/dsa" element={<DSAPage />} />
      <Route path="/dsa/:questionName" element={<DSAQuestionView />} />
      <Route path="/system-design" element={<SystemDesignPage />} />
      <Route
        path="/system-design/:questionName"
        element={<SystemDesignQuestionPage />}
      />
      <Route path="/behavioural" element={<BehaviouralPage />} />
      <Route
        path="/behavioural/:questionName"
        element={<BehaviouralQuestionPage />}
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/resume" element={<ResumeOnlyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
