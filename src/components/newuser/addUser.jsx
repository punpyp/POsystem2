import { useState } from "react";
import "./NewUser.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setRole("");
    setError(null);
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized! Please log in.");
        return;
      }

      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({
          username,
          password,
          role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to add user");
        return;
      }

      const data = await response.json();
      alert("User added successfully!");
      console.log("API Response:", data);

      handleClose();
    } catch (err) {
      console.error("Error adding user:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="new-user-button">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New User
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Role"
            type="text"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g., admin or employee"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default AddUser;
