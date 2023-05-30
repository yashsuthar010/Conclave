import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import ModernDrawer from "react-modern-drawer";
import "./client.css";
import "react-modern-drawer/dist/index.css";

const Drawer = ({ isOpen, toggleDrawer, clients }) => {
  return (
    <ModernDrawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      // overlayColor="transparent"
      style={{
        // background: "#f8f7f9",
        background: "#242634",
        width: "210px",
      }}
      className="drawer"
    >
      <h2 id="h2">Connected Users</h2>
      <hr />

      <div className="clientsList">
        <ConnectedClients clients={clients} />
      </div>
    </ModernDrawer>
  );
};

const ConnectedClients = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(props.clients);
  }, [props.clients]);

  return (
    <>
      {clients.map((client) => (
        <div key={client.socketId} username={client.username}>
          <div className="client">
            <Avatar
              name={client.username.toUpperCase()}
              size={40}
              round="5px"
            />
            <span className="userName">{client.username}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Drawer;
