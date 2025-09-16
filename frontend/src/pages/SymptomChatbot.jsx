import { useState, useEffect } from "react";
import axios from "axios";

const SymptomChatbot = () => {
  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi! Please select your symptoms from the list below." }
  ]);
  const [symptomOptions, setSymptomOptions] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:3500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/symptomOptions`);
        const diseasesRes = await axios.get(`${API_URL}/diseases`);
        setSymptomOptions(res.data);
        setDiseases(diseasesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSymptomSelect = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setChat((prev) => [
        ...prev,
        { sender: "user", text: symptom }
      ]);
    }
  };

  const handleSubmit = () => {
    if (selectedSymptoms.length === 0) return;

    setLoading(true);

    // Simple disease matching
    let bestMatch = null;
    let maxMatches = 0;

    diseases.forEach((disease) => {
      const matches = disease.symptoms.filter((s) =>
        selectedSymptoms.includes(s)
      ).length;

      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = disease;
      }
    });

    if (bestMatch) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: `Based on your symptoms, you may have ${bestMatch.name}.` },
        { sender: "bot", text: `💊 Suggested Medicines: ${bestMatch.medicines.join(", ")}` },
        { sender: "bot", text: `🌿 Natural Treatments: ${bestMatch.natural.join(", ")}` }
      ]);
    } else {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, we could not identify the disease based on selected symptoms." }
      ]);
    }

    setSelectedSymptoms([]);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Symptom Chatbot</h2>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          minHeight: "300px",
          marginBottom: "10px",
          overflowY: "auto"
        }}
      >
        {chat.map((c, idx) => (
          <div
            key={idx}
            style={{
              textAlign: c.sender === "bot" ? "left" : "right",
              margin: "5px 0"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "15px",
                backgroundColor: c.sender === "bot" ? "#eee" : "#4caf50",
                color: c.sender === "bot" ? "#000" : "#fff"
              }}
            >
              {c.text}
            </span>
          </div>
        ))}
      </div>

      <div>
        <h4>Select your symptoms:</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {symptomOptions.map((sym, idx) => (
            <button
              key={idx}
              onClick={() => handleSymptomSelect(sym)}
              disabled={selectedSymptoms.includes(sym)}
              style={{
                padding: "8px 12px",
                borderRadius: "20px",
                border: "1px solid #4caf50",
                backgroundColor: selectedSymptoms.includes(sym) ? "#ccc" : "#fff",
                cursor: "pointer"
              }}
            >
              {sym}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          disabled={loading || selectedSymptoms.length === 0}
        >
          {loading ? "Checking..." : "Submit Symptoms"}
        </button>
      </div>
    </div>
  );
};

export default SymptomChatbot;
