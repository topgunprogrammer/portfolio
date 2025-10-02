import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "./Resume.css";

// Configure PDF.js worker with multiple fallback options
const setupPdfWorker = () => {
  try {
    // Primary: Use exact version match with unpkg CDN (more reliable)
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  } catch (error) {
    console.warn("Primary PDF worker failed, trying fallback...", error);
    try {
      // Fallback 1: Use cdnjs
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    } catch (fallbackError) {
      console.warn(
        "Fallback PDF worker failed, using jsdelivr...",
        fallbackError
      );
      // Fallback 2: Use jsdelivr with fixed version
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.149/build/pdf.worker.min.js`;
    }
  }
};

// Initialize PDF worker
setupPdfWorker();

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const resumePath = `${process.env.PUBLIC_URL}/resume/Resume.pdf`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error("PDF loading error:", error);
    setError("Failed to load PDF. Please try downloading it directly.");
    setLoading(false);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
          onLoadError={onDocumentLoadError}
          loading={
            <div className="pdf-loading">
              <div className="spinner"></div>
              <p>Loading Resume...</p>
            </div>
          }
          error={
            <div className="pdf-error">
              <p>
                ⚠️{" "}
                {error || "Failed to load PDF. Please try downloading instead."}
              </p>
              <motion.a
                href={resumePath}
                download="Resume.pdf"
                className="download-fallback-btn"
                variants={buttonVariants}
                whileTap="tap"
              >
                📥 Download Resume
              </motion.a>
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
