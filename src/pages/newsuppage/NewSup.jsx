import { useState, useEffect } from "react";
import "./NewSup.css";
import { useNavigate } from "react-router-dom";

const AddSupplier = () => {
  const [supplierCode, setSupplierCode] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [items, setItems] = useState([]); 
  const [selectedItems, setSelectedItems] = useState([]); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Unauthorized! Please log in.");
        return;
      }

      try {
        const response = await fetch(`${apiUrl}/api/items`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error || "Failed to fetch items");
          return;
        }

        const data = await response.json();
        setItems(data); 
      } catch (err) {
        console.error("Error fetching items:", err);
        setError("An unexpected error occurred.");
      }
    };

    fetchItems();
  }, [apiUrl]);

  const handleRowClick = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      setError("Unauthorized! Please log in.");
      return;
    }
  
    const supplierData = {
      supplierCode,
      supplierName,
      isActive,
      itemIds: selectedItems,
    };
  
    try {
      const response = await fetch(`${apiUrl}/api/suppliers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(supplierData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to save supplier");
        return;
      }
  
      alert("Supplier added successfully!"); 
      navigate("/master/supplier"); 
    } catch (err) {
      console.error("Error saving supplier:", err);
      setError("An unexpected error occurred.");
    }
  };
  
  
  

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Add New Supplier</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="group-wrapper">
        <div className="group1">
          <div className="form-group">
            <label>Supplier Code</label>
            <input
              type="text"
              value={supplierCode}
              onChange={(e) => setSupplierCode(e.target.value)}
              />
          </div>

          <div className="form-group">
            <label>Supplier Name</label>
            <input
              type="text"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              />
          </div>
        </div>
        <div className="group2">

        <div className="is-active-group">
          <label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
              />
            Is Active
          </label>
        </div>

        <div className="form-group">
          <label>Select Items:</label>
          <div className="scrollable-table">
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                  key={item.id}
                  className={selectedItems.includes(item.id) ? "selected" : ""}
                  onClick={() => handleRowClick(item.id)}
                  >
                    <td>{item.item_name}</td>
                    <td>{item.category_code}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
        </div>

        <div className="button-group">
          <button className="cancel-button" onClick={() => navigate("/master/supplier") }>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSupplier;
