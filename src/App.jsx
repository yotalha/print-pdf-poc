import React from "react";
import PDFPrintPreview from "./PDFPrintPreview";
import PDFPrintButton from "./PDFPrintButton";

function App() {
  const pdfUrl = "https://www.africau.edu/images/default/sample.pdf";

  return (
    <div>
      <h1>PDF Print Preview Example</h1>
      <PDFPrintPreview pdfUrl={pdfUrl} />
      <PDFPrintButton />
    </div>
  );
}

export default App;
