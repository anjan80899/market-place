import Login from "../../../src/components/login/login";
import "./searchbar.css";
import { useState } from "react";
import SearchDropdown from "../../../src/components/dropdown/searchdropdown";

export default function Searchbar() {
  const [showDropdown, isDropdownshown] = useState(false);
  function handleInputFocus() {
    showDropdown ? isDropdownshown(false) : isDropdownshown(true);
  }
  return (
    <div className="searchbar">
      <div></div>
      <form className="search">
        <input
          className="search-input"
          placeholder="Search for people,pages"
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
        />
        {showDropdown && <SearchDropdown results={["Hi", "Hello"]} />}
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <Login />
    </div>
  );
}
