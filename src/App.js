import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AppRoutes } from "./router";
import personalInfoData from "./data/sections/personalInfo.json";

function App() {
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
