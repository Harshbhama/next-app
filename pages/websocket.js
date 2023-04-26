import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://127.0.0.1:8000');

const Websocket = () => {
  const [firstName, setFirstName] = useState("");
  const sendMsg = () => {
    client.send(JSON.stringify({
      type: "message",
      msg: "Hello msg",
      name: firstName
    }))
  }

  useEffect(() => {
    const getUsername = JSON.parse(localStorage.getItem("username"));
    setFirstName(getUsername.firstName);
    client.onopen = () => {
      console.log("Websocket Client Connected");
    }
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data)
      console.log("Got reply", dataFromServer);
    }

  })
  return(
    <div>
      <p>Websocket</p>
      <button onClick={sendMsg}>Click me</button>
    </div>
  )
}
export default Websocket;