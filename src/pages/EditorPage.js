import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import "./editor.css";
import Drawer from "../components/Drawer";
import Editor from "../components/Editor";
import { FaUsers } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa";
import { initSocket } from "../socket";
import ACTIONS from "../Action";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import { toast } from "react-hot-toast";

const EditorPage = () => {
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const location = useLocation();
  const reactNavigator = useNavigate();
  const { roomId } = useParams();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      // handling error
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later. ");
        reactNavigator("/");
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });

      // listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          if (username != location.state?.username) {
            // toast.success(`${username} joined the room`);
            toast(`${username} joined the room`, {
              icon: "👏",
            });
          }

          // pushing all the clients
          setClients(clients);
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
        }
      );

      // listening for disconneted
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the room`);
        setClients((prev) => {
          return prev.filter((client) => client.socketId != socketId);
        });
      });
    };
    init();

    // clearing memory
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  // copying room id's using browser api
  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success(`Copied`);
    } catch (err) {
      toast.error(`Could not copy the room ID`);
    }
  }

  // leave room
  function leaveRoom() {
    reactNavigator("/");
  }

  if (!location.state) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} clients={clients} />

      <div className="mainWrap">
        <div className="header-edit">
          <div>
            <a href="/" style={{ textDecoration: "none" }}>
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
            </a>
          </div>
          <div className="edit-btn">
            <button className="copyBtn" onClick={copyRoomId}>
              <FaRegCopy />
            </button>
            <button className="leaveBtn" onClick={leaveRoom}>
              <RxExit />
            </button>
          </div>
        </div>

        <div className="container2">
          <div className="editorWrap">
            <Editor
              socketRef={socketRef}
              roomId={roomId}
              onCodeChange={(code) => {
                codeRef.current = code;
              }}
            />
            <button onClick={toggleDrawer} className="clientsBtn">
              <FaUsers />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
