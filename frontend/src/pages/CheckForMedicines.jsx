import React, { useState } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?worker"; // ✅ Vite worker import

// Tell PDF.js to use the worker
pdfjsLib.GlobalWorkerOptions.workerPort = new pdfWorker();

const CheckForMedicines = () => {
  const [availableMeds, setAvailableMeds] = useState([]);
  const [notAvailableMeds, setNotAvailableMeds] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:3500/medicines";

  // Handle PDF upload (existing)
  const handlePdfUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const typedarray = new Uint8Array(fileReader.result);

        // Load PDF
        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
        let extractedText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map((item) => item.str);
          extractedText += strings.join(" ") + " ";
        }

        // Normalize text from PDF
        const pdfMedicines = extractedText
          .split(/\s|,|;|\n/)
          .map((t) => t.trim())
          .filter((t) => t.length > 0);

        // Fetch medicines from db.json
        const res = await axios.get(API_URL);
        const dbMedicines = res.data;

        // Compare only medicines from PDF
        const available = [];
        const notAvailable = [];
        const pdfMedsLower = pdfMedicines.map((m) => m.toLowerCase());

        dbMedicines.forEach((med) => {
          if (pdfMedsLower.includes(med.name.toLowerCase())) {
            if (med.available) {
              available.push(med.name);
            } else {
              notAvailable.push(med.name);
            }
          }
        });

        // Remove duplicates
        setAvailableMeds([...new Set(available)]);
        setNotAvailableMeds([...new Set(notAvailable)]);
        setLoading(false);
      };

      fileReader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error reading PDF:", error);
      setLoading(false);
    }
  };

  // Generate report for all medicines (without PDF)
  const generateReport = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      const dbMedicines = res.data;

      const available = dbMedicines
        .filter((m) => m.available)
        .map((m) => m.name);
      const notAvailable = dbMedicines
        .filter((m) => !m.available)
        .map((m) => m.name);

      // Remove duplicates just in case
      setAvailableMeds([...new Set(available)]);
      setNotAvailableMeds([...new Set(notAvailable)]);
      setLoading(false);
    } catch (error) {
      console.error("Error generating report:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Upload PDF to Generate Medicine Report</h2>

      {/* PDF upload input */}
      <input type="file" accept="application/pdf" onChange={handlePdfUpload} />

      {/* Button to generate report without PDF */}
      <div style={{ margin: "20px 0" }}>
        <button
          onClick={generateReport}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Report"}
        </button>
      </div>

      {loading && <p>Processing...</p>}

      {!loading && (availableMeds.length > 0 || notAvailableMeds.length > 0) && (
        <div style={{ marginTop: "20px" }}>
          <h3>Report</h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "green" }}>✅ Available Medicines</h4>
            <ul>
              {availableMeds.map((med, idx) => (
                <li key={idx}>{med}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "red" }}>❌ Not Available Medicines</h4>
            <ul>
              {notAvailableMeds.map((med, idx) => (
                <li key={idx}>{med}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckForMedicines;
