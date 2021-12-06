import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="barra-inf">
        <div className="barra-inf-links">
          <Link to="/" className="link-f">
            Home
          </Link>
          <Link to="/cities" className="link-f">
            Cities
          </Link>
          <a className="link-f">sing in</a>
          <a className="link-f">sing up</a>
        </div>
        <div className="barra-inf" >
          <img src="../assets/redes/Twitter.png" />
          <img src="../assets/redes/Instagram.png" />
          <img src="../assets/redes/Facebook.png" />
        </div>
      </div>
    </footer>
  );
}
