import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./employeePage.css";
import SearchBar from "../../components/searchBar/SearchBar";
import BasicTable from "../../components/dataTable/DataTable";
import AddUser from "../../components/newuser/addUser";
import IsActive from "../../pages/employeePage/IsActive";
import Page from "../../components/dataTable/Page";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const EmployeePage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetch(`${apiUrl}/api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          return response.json();
        })
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => {
          console.error(err);
          setError("Error fetching user data");
        });
    }
  }, [navigate]);

  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="topic">
          <h1>Employee Management</h1>
          <AddUser />
        </div>
        <div className="search-wrapper">
          <SearchBar />
          <IsActive />
        </div>
      </div>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
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
          <Table sx={{ minWidth: 650 }} aria-label="employee table">
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#f5f5f5",
                  "& th": {
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#333",
                  },
                }}
              >
                <TableCell align="center">Number</TableCell>
                <TableCell align="center">Employee Code</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.id}
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor: "#f9f9f9",
                    },
                    "&:hover": {
                      backgroundColor: "#e0f7fa",
                    },
                  }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{user.id}</TableCell>
                  <TableCell align="center">{user.username}</TableCell>
                  <TableCell align="center">{user.role}</TableCell>
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

export default EmployeePage;
