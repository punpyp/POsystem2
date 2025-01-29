import { useEffect, useState } from "react";
import "./SupplierPage.css";
import SearchBar from "../../components/searchBar/SearchBar";
import IsActiveSup from "../../pages/supplierPage/IsActiveSup";
import Page from "../../components/dataTable/Page";
import AddSupplier from "../../components/newSupplier/AddSupButt";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const SupplierPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchSuppliers = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Unauthorized! Please log in.");
        return;
      }

      try {
        const response = await fetch(`${apiUrl}/api/suppliers`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch supplier data");
        }

        const data = await response.json();
        setSuppliers(data); 
      } catch (err) {
        console.error("Error fetching suppliers:", err);
        setError("Error fetching supplier data");
      }
    };

    fetchSuppliers();
  }, [apiUrl]);

  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="topic">
          <h1>Supplier Management</h1>
          <AddSupplier />
        </div>
        <div className="search-wrapper">
          <SearchBar />
          <IsActiveSup />
        </div>
      </div>

      {error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : (
        <TableContainer
          component={Paper}
          style={{
            maxWidth: "90%",
            margin: "50px auto",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="supplier table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  #
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Supplier Code
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Supplier Name
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Is Active
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliers.map((supplier, index) => (
                <TableRow
                  key={supplier.id}
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                    "&:hover": { backgroundColor: "#e0f7fa" },
                  }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{supplier.supplier_code}</TableCell>
                  <TableCell align="center">{supplier.supplier_name}</TableCell>
                  <TableCell align="center">
                    {supplier.is_active ? "Active" : "Inactive"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Page />
    </div>
  );
};

export default SupplierPage;
