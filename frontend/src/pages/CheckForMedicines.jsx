import React, { useState } from "react";

const CheckForMedicines = () => {
  const [availableMeds, setAvailableMeds] = useState([]);
  const [notAvailableMeds, setNotAvailableMeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState(null); // just store uploaded file

  // Just store PDF temporarily, no functionality
  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setPdfFile(file);
    // Clear previous report
    setAvailableMeds([]);
    setNotAvailableMeds([]);
  };

  // Generate dummy report
  const generateReport = () => {
    if (!pdfFile) return alert("Please upload a PDF first.");

    setLoading(true);
    setTimeout(() => {
      // Hardcoded dummy report
      setAvailableMeds(["Paracetamol", "Aspirin", "Amoxicillin", "Ibuprofen"]);
      setNotAvailableMeds(["Metformin", "Atorvastatin", "Omeprazole", "Cefixime"]);
      setLoading(false);
    }, 500); // simulate loading
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Upload PDF to Generate Medicine Report</h2>

      {/* PDF upload input */}
      <input type="file" accept="application/pdf" onChange={handlePdfUpload} />

      {/* Button to generate dummy report */}
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

      {loading && <p>Processing PDF...</p>}

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
