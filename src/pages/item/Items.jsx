import { useState, useEffect } from "react";
import "./Items.css";
import SearchBar from "../../components/searchBar/SearchBar";
import AddItem from "./AddItem";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Items = () => {
  const [items, setItems] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Unauthorized! Please log in.");
        return;
      }

      try {
        const response = await fetch("http://localhost:3001/api/items", {
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
  }, []); 

  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="topic">
          <h1>Items Management</h1>
          <AddItem />
        </div>

        <div className="searchb-wrapper">
          <SearchBar />
        </div>
      </div>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <TableContainer
          component={Paper}
          style={{ maxWidth: "90%", margin: "50px auto" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="items table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Item Code</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Item Name
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Category Code
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Unit
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Is Active
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.item_code}
                  </TableCell>
                  <TableCell align="center">{item.item_name}</TableCell>
                  <TableCell align="center">{item.category_code}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="center">{item.unit}</TableCell>
                  <TableCell align="center">
                    {item.is_active ? "Active" : "Inactive"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Items;
