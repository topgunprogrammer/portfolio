import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import TechStackPage from "../pages/TechStackPage";
import TechStackQuestionPage from "../pages/TechStackQuestionPage";
import MLTechStackPage from "../pages/MLTechStackPage";
import MLTechStackQuestionPage from "../pages/MLTechStackQuestionPage";
import InterviewPage from "../pages/InterviewPage";

// ✅ Centralized routes that adapt dynamically
const BASE_PATH = process.env.PUBLIC_URL || "";

export const routes = {
  home: `${BASE_PATH}/`,
  about: `${BASE_PATH}/about`,
  projects: `${BASE_PATH}/projects`,
  experience: `${BASE_PATH}/experience`,
  dsa: `${BASE_PATH}/dsa`,
  systemDesign: `${BASE_PATH}/system-design`,
  behavioural: `${BASE_PATH}/behavioural`,
  techstack: `${BASE_PATH}/techstack`,
  mltechstack: `${BASE_PATH}/mltechstack`,
  contact: `${BASE_PATH}/contact`,
  resume: `${BASE_PATH}/resume`,
  interview: `${BASE_PATH}/interview`,
};

// ✅ Navigation items for the header
export const navigationItems = [
  { path: routes.home, label: "Home" },
  { path: routes.about, label: "About" },
  { path: routes.projects, label: "Projects" },
  { path: routes.experience, label: "Experience" },
  { path: routes.interview, label: "Interview" },
  { path: routes.contact, label: "Contact" },
  { path: routes.resume, label: "Resume" },
];

function AppRoutes() {
  return (
    <Routes>
      <Route path={`${BASE_PATH}/`} element={<HomePage />} />
      <Route path={`${BASE_PATH}/about`} element={<AboutPage />} />
      <Route path={`${BASE_PATH}/projects`} element={<ProjectsPage />} />
      <Route path={`${BASE_PATH}/experience`} element={<ExperiencePage />} />
      <Route path={`${BASE_PATH}/dsa`} element={<DSAPage />} />
      <Route
        path={`${BASE_PATH}/dsa/:questionName`}
        element={<DSAQuestionView />}
      />
      <Route
        path={`${BASE_PATH}/system-design`}
        element={<SystemDesignPage />}
      />
      <Route
        path={`${BASE_PATH}/system-design/:questionName`}
        element={<SystemDesignQuestionPage />}
      />
      <Route path={`${BASE_PATH}/behavioural`} element={<BehaviouralPage />} />
      <Route
        path={`${BASE_PATH}/behavioural/:questionName`}
        element={<BehaviouralQuestionPage />}
      />
      <Route path={`${BASE_PATH}/techstack`} element={<TechStackPage />} />
      <Route
        path={`${BASE_PATH}/techstack/:questionName`}
        element={<TechStackQuestionPage />}
      />
      <Route path={`${BASE_PATH}/mltechstack`} element={<MLTechStackPage />} />
      <Route
        path={`${BASE_PATH}/mltechstack/:routeName`}
        element={<MLTechStackQuestionPage />}
      />
      <Route path={`${BASE_PATH}/interview`} element={<InterviewPage />} />
      <Route path={`${BASE_PATH}/contact`} element={<ContactPage />} />
      <Route path={`${BASE_PATH}/resume`} element={<ResumeOnlyPage />} />

      {/* ✅ Optional redirect from old /portfolio path */}
      <Route
        path="/portfolio/*"
        element={<Navigate to={BASE_PATH + "/"} replace />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
