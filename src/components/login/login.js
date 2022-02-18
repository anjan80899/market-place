import Searchdropdown from "../../../src/components/dropdown/searchdropdown";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [onhover, isonhover] = useState(false);
  function handleMouseOver() {
    onhover ? isonhover(false) : isonhover(true);
  }
  return (
    <div className="login-container">
      <button
        onMouseOverCapture={handleMouseOver}
        onMouseOutCapture={handleMouseOver}
      >
        Login
      </button>
      {onhover && <Searchdropdown results={["SignIn", "Profile"]} />}
    </div>
  );
}
