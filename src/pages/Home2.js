import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./home2.css";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import video from "../assets/video.mp4";

const Home2 = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & USERNAME are required");
      return;
    }

    // Redireact
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code == "Enter") {
      joinRoom();
    }
  };

  return (
    <>
      <div className="container">
        <Nav />
        <div className="hero">
          <h1>
            <span style={{ color: "#654E92", fontWeight: "450" }}>
              {" "}
              Conclave{" "}
            </span>
            is an online text
            <span style={{ color: "#654E92", fontWeight: "450" }}>
              {" "}
              &lt; Editor &gt;
            </span>{" "}
            providing
          </h1>
          <h1 style={{ marginLeft: "4px" }}>
            collaborative editing in{" "}
            <span
              style={{ color: "#EBD8B2", fontWeight: "450" }}
              className="real-time"
            >
              Real-Time
            </span>
          </h1>
          <br />
          <p>
            Whether you're in the same room or across the world, our
            collabritive editor keeps
          </p>
          <p>
            you connected and on the same page. Join the future of collaboration
            today.
          </p>
          <div>
            {/* <button className="button">
                <span>GetStarted</span>
              </button> */}
            <Popup
              trigger={
                <button className="button">
                  <span>GetStarted</span>
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <div className="content">
                    <div className="formWrapper">
                      <h1 className="mainLable">Create Room</h1>
                      <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a
                          onClick={createNewRoom}
                          href=""
                          className="createNewBtn"
                        >
                          New Room
                        </a>
                      </span>
                      <div className="inputGroup">
                        <h3>Room ID</h3>

                        <input
                          type="text"
                          className="inputBox"
                          placeholder="Enter Your roomId"
                          onChange={(e) => setRoomId(e.target.value)}
                          value={roomId}
                          onKeyUp={handleInputEnter}
                        ></input>
                        <br />
                        <h3>UserName</h3>
                        <input
                          type="text"
                          className="inputBox"
                          placeholder="Enter Your username"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                          onKeyUp={handleInputEnter}
                        ></input>
                        <br />
                        <div className="btngp">
                          <button className=" btn joinBtn" onClick={joinRoom}>
                            Join
                          </button>
                          <button
                            className=" btn closeBtn"
                            onClick={() => close()}
                          >
                            Close
                          </button>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            {/* <h3>
                <MdOutlineSlowMotionVideo className="icon" /> Watch Tutorial
              </h3> */}
          </div>
        </div>
        <video
          className="img-container"
          width="1240"
          height="572"
          loop
          muted
          autoPlay
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <Footer />
    </>
  );
};

export default Home2;
