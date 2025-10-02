import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AppRoutes } from "./router";
import personalInfoData from "./data/sections/personalInfo.json";

function App() {
  // 🔧 Fix auto-scroll on page refresh
  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top immediately on app load
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    scrollToTop();
    
    // Also ensure scroll position after a short delay to override any other scroll attempts
    const timeoutId = setTimeout(scrollToTop, 100);
    
    return () => {
      clearTimeout(timeoutId);
      // Restore scroll restoration behavior when component unmounts
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);
  return (
    <Router basename="/portfolio">
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header personalInfo={personalInfoData} />
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
        <Footer personalInfo={personalInfoData} />
      </motion.div>
    </Router>
  );
}

export default App;
