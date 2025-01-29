import { useState } from "react";
import { Tabs, Tab, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom"; 
import "./Header.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const navigate = useNavigate(); 

  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  const handleNavigation = (path) => {
    navigate(path); 
    handleClose(); 
  };

  return (
    <div className="tabbar-container">
      <Tabs>
        <Tab label="DEMO" disabled />
        <Tab
          label="MASTER DATA"
          onClick={(e) => handleClick(e, "master")}
          icon={<KeyboardArrowDownIcon />}
          iconPosition="end"
        />
        <Tab
          label="REPORT"
          onClick={(e) => handleClick(e, "report")}
          icon={<KeyboardArrowDownIcon />}
          iconPosition="end"
        />
      </Tabs>

      {/* Dropdown Menus */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuType === "master"}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleNavigation("/")}>
          EMPLOYEE
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/master/supplier")}>
          SUPPLIER
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/master/items")}>
          ITEMS
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuType === "report"}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleNavigation("/report/report")}>
          REPORT
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/report/dashboard")}>
          DASHBOARD
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
