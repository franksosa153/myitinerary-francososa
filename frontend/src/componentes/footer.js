import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      
        
          <Link to="/" className="link-f">
            Home
          </Link>
          <Link to="/cities" className="link-f">
            Cities
          </Link>
          <a className="link-f">sing in</a>
          <a className="link-f">sing up</a>
      
        
      
    </footer>
  );
}
