import { useEffect, useState } from "react";
import axios from "axios";

const Pharmacy = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newAvailable, setNewAvailable] = useState(true);

  const API_URL = "http://localhost:3500/medicines";

  // Fetch medicines on load
  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const res = await axios.get(API_URL);
      setMedicines(res.data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  // Add new medicine
  const addMedicine = async (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    try {
      await axios.post(API_URL, {
        name: newName,
        available: newAvailable,
      });
      setNewName("");
      setNewAvailable(true);
      fetchMedicines(); // refresh list
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  // Filtered medicines
  const filteredMedicines = medicines.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2>Medicine Management</h2>

      {/* Wrapper to place list + form side by side */}
      <div style={{ display: "flex", gap: "40px" }}>
        
        {/* Medicines List */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#fafafa",
          }}
        >
          <h3>Medicine List</h3>
          <input
            type="text"
            placeholder="Search medicine..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredMedicines.map((medicine) => (
              <li
                key={medicine.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <span>{medicine.name}</span>
                <span
                  style={{
                    padding: "3px 8px",
                    borderRadius: "12px",
                    color: "white",
                    backgroundColor: medicine.available ? "green" : "red",
                  }}
                >
                  {medicine.available ? "Available" : "Out of Stock"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Medicine Form */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#fafafa",
          }}
        >
          <h3>Add Medicine</h3>
          <form onSubmit={addMedicine}>
            <input
              type="text"
              placeholder="Medicine name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <div style={{ marginBottom: "10px", display: "flex", alignItems: 'center'}}>
              <label>
                
                Available
              </label>
              <input
                  type="checkbox"
                  checked={newAvailable}
                  onChange={(e) => setNewAvailable(e.target.checked)}
                />{" "}
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add Medicine
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
