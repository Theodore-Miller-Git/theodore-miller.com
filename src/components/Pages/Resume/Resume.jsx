// src/components/Pages/Resume/Resume.jsx
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './Resume.module.css';
import { getImageUrl } from "../../../utils";

// Use a CDN URL for pdf.worker.min.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  const pdfUrl = getImageUrl("resume/TheodoreMiller_SE_Resume.pdf"); // Path relative to public

  return (
    <div className={styles.resumecontainer}>
      <h1 className={styles.title}>My Resume</h1>
      <a href={getImageUrl("resume/TheodoreMiller_SE_Resume.pdf")} download className={styles.downloadButton}>Download Resume</a><br /><br />
      <center>
      <div className={styles.pdfContainer}>
      <Document  file={pdfUrl} onLoadError={(error) => {
          console.error('Error loading PDF:', error);
          alert('Error loading PDF. Check the console for more details.');
        }}>
        <Page pageNumber={1} />
          </Document>
          </div>
      </center>
    </div>
  );
};

export default Resume;


//../../../assets/resume/TheodoreMiller_SE_Resume.pdf