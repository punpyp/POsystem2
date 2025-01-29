//import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import "./RequestList";

const RequestHeader = () => {
  return (
    <div className="tabbar-container">
      <Tabs>
        <Tab label="DEMO" disabled />
        <Tab label="PO Request" />
      </Tabs>
    </div>
  );
};

export default RequestHeader;
