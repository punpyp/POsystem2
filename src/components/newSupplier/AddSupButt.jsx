import Button from "@mui/material/Button";
import "./AddSupplier.css";
import { useNavigate } from "react-router-dom";

export default function AddSupplier() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/master/supplier/newsup");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleNavigation}>
      ADD SUPPLIER
    </Button>
  );
}
