import React from 'react';

function PDFPrintPreview({ pdfUrl }) {
  const handleDownloadClick = (e) => {
    e.preventDefault();

    // Open a new window or tab to open the PDF
    const pdfWindow = window.open('', '_blank');
    
    // Set the PDF URL as the window's location
    pdfWindow.location.href = pdfUrl;

    // Add a load event listener to the new window/tab
    pdfWindow.addEventListener('load', () => {
      // Trigger the print dialog
      pdfWindow.print();
    });
  };

  return (
    <div>
      <a href={pdfUrl} onClick={handleDownloadClick}>
        Download and Print PDF
      </a>
    </div>
  );
}

export default PDFPrintPreview;
