import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  async function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await fetch(`${apiUrl}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Store the token in localStorage
          localStorage.setItem("token", data.token);
          console.log("Login successful:", data);
          const decoded = jwtDecode(data.token);
          console.log("Username:", decoded.username);
          console.log("Role:", decoded.role);
          navigate("/");
        } else {
          // Handle errors (e.g., invalid credentials)
          setError(data.error || "An error occurred during login.");
        }
      } catch (err) {
        console.error("Error during login:", err);
        setError("An unexpected error occurred.");
      }
    } else {
      alert("Please fill in both fields.");
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
