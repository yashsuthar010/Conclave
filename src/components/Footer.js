import React from "react";
import { FaGithubSquare } from "react-icons/fa";

import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <hr style={{ width: "1240px", height: "1px" }} /> */}
        <h2>
          {" "}
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
        <ul className="iconsList">
          <li>
            <a
              href="https://github.com/yashsuthar010"
              target="_blank"
              className="social-icon"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yash-suthar005/"
              target="_blank"
              className="social-icon"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/YashSut95822902"
              target="_blank"
              className="social-icon"
            >
              <AiFillTwitterSquare />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
