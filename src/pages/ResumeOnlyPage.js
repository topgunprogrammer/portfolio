import React from "react";
import { motion } from "framer-motion";
import PdfViewer from "../components/PdfViewer/PdfViewer";

function ResumeOnlyPage() {
  const resumePath = "/resume/Resume.pdf";

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <main style={{ padding: 0 }}>
        {/* Simple PDF viewer - just shows the PDF */}
        <PdfViewer file={resumePath} />
      </main>
    </motion.div>
  );
}

export default ResumeOnlyPage;
