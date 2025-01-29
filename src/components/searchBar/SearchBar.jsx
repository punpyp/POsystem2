//import { Button, ButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
//import "./IsActive.css";
import "./SearchBar.css";

const SearchAndFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    return;
  };

  return (
    <div className="search-filter-container">
      <div className="searchbar-container">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "500px" }}
        />
        <IconButton onClick={handleSearch} color="primary">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchAndFilter;
