import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tutorial.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step3_1 from "../assets/step3_1.png";
import final from "../assets/final.gif";
import { FaGithubSquare } from "react-icons/fa";

import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Tutorial = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container1">
        <div className="tutorialNav">
          <div>
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
          </div>
          <div>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
        <div className="content-container">
          <h1>How to use Collaborative Editor ?</h1>
          <br />
          <p id="p">
            In today's interconnected world, collaboration is a key ingredient
            for success in various domains. Whether it's a team project,
            brainstorming session, or remote work arrangement, the ability to
            collaborate seamlessly in real time is becoming increasingly
            essential.
          </p>
          <br />
          <p>
            It enables the ability to effortlessly create personalized private
            rooms by entering unique user IDs and usernames. Furthermore, users
            can readily join and participate in other rooms by conveniently
            inputting the corresponding private key, which consists of their
            individual user ID. This seamless integration of user identification
            ensures a secure and tailored collaborative environment for enhanced
            teamwork and efficient information sharing.
          </p>
          <br />
          <p>This article describes how to use collaborative Editor.</p>
          <br />
          <h2>
            <span id="hash">#</span> Click on Get Started button to create a
            ROOM
          </h2>
          <br />
          <img src={step1}></img>

          <h2>
            <span id="hash">#</span> Enter room ID and username
          </h2>
          <br />
          <img src={step2}></img>

          <p id="note">
            If you want to join another room then you have copy and paste their
            <br />
            private room id, otherwise click on New Room link to genrate room
            ID.
          </p>
          <h2>
            {" "}
            <span id="hash">#</span> Click on the icon located in the lower
            right corner to <br />
            see all the connected users
          </h2>
          <br />
          <img src={step3}></img>
          <br />
          <br />
          <img src={step3_1}></img>
          <h2>
            <span id="hash">#</span> Click on the icons located in the upper
            right corner <br />
            to either copy the room ID or leave the room
          </h2>
          <br />
          <img src={step3}></img>
          <h2>
            <span id="hash">#</span> Final
          </h2>
          <br />
          <img src={final}></img>
        </div>
        <div className="footer1">
          <h2>
            {" "}
            <span style={{ color: "gray" }} className="real-time">
              Con
            </span>
            <span
              style={{ color: "black", fontWeight: "500" }}
              className="real-time"
            >
              clave
            </span>
          </h2>
          <ul className="iconsList1">
            <li>
              <a
                href="https://github.com/yashsuthar010"
                target="_blank"
                className="social-icon-tutorial"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yash-suthar005/"
                target="_blank"
                className="social-icon-tutorial"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/YashSut95822902"
                target="_blank"
                className="social-icon-tutorial"
              >
                <AiFillTwitterSquare />
              </a>
            </li>
          </ul>

          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <BsFillArrowUpSquareFill id="arrow" />
        </div>
      )}
    </div>
  );
}

export default Tutorial;
