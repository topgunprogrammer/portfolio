import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "./Resume.css";

// Configure PDF.js worker - using jsdelivr CDN which is more reliable
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const resumePath = `${process.env.PUBLIC_URL}/resume/Resume.pdf`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 20px rgba(0, 123, 255, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="resume-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants}>My Resume</motion.h2>

      <motion.div className="resume-actions" variants={itemVariants}>
        <motion.a
          href={resumePath}
          download="Mohan_Ram_Shanmugam_Resume.pdf"
          className="download-btn"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="download-icon">📥</span> Download Resume
        </motion.a>

        <div className="zoom-controls">
          <motion.button
            onClick={() => setScale(scale - 0.2)}
            disabled={scale <= 0.6}
            className="zoom-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            🔍− Zoom Out
          </motion.button>
          <span className="zoom-level">{Math.round(scale * 100)}%</span>
          <motion.button
            onClick={() => setScale(scale + 0.2)}
            disabled={scale >= 2.0}
            className="zoom-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            🔍+ Zoom In
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="pdf-viewer-container" variants={itemVariants}>
        <Document
          file={resumePath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="pdf-loading">
              <div className="spinner"></div>
              <p>Loading Resume...</p>
            </div>
          }
          error={
            <div className="pdf-error">
              <p>⚠️ Failed to load PDF. Please try downloading instead.</p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>

        {numPages && (
          <motion.div
            className="page-controls"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="page-btn"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              ← Previous
            </motion.button>

            <span className="page-info">
              Page {pageNumber} of {numPages}
            </span>

            <motion.button
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber >= numPages}
              className="page-btn"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Next →
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="resume-note"
        variants={itemVariants}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p>
          💡 <strong>Tip:</strong> Use zoom controls to adjust view, or download
          for offline viewing
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Resume;
