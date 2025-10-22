import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";

// Use unpkg CDN with exact version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;

function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Calculate responsive width based on viewport
  useEffect(() => {
    const updateWidth = () => {
      const containerWidth = Math.min(window.innerWidth - 40, 900); // Max 900px, with 40px padding

      if (window.innerWidth <= 480) {
        // Mobile phones
        setPageWidth(containerWidth * 0.95);
      } else if (window.innerWidth <= 768) {
        // Tablets portrait
        setPageWidth(containerWidth * 0.9);
      } else if (window.innerWidth <= 1024) {
        // Tablets landscape / small laptops
        setPageWidth(Math.min(containerWidth, 700));
      } else if (window.innerWidth <= 1280) {
        // Small desktops
        setPageWidth(Math.min(containerWidth, 750));
      } else {
        // Large desktops
        setPageWidth(Math.min(containerWidth, 800));
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="pdfviewer-root">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="pdf-loading">Loading PDF...</div>}
      >
        {numPages &&
          Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
      </Document>
    </div>
  );
}

export default PdfViewer;
