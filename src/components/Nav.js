import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <div>
          <h2>
            <span style={{ color: "gray" }} className="real-time">
              Con
            </span>
            <span
              style={{ color: "white", fontWeight: "500" }}
              className="real-time"
            >
              clave
            </span>
          </h2>
        </div>
        <div>
          <button onClick={() => navigate("/tutorial")}>How to use ?</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
