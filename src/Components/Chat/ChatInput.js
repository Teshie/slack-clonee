import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../SideBar/database";
import firebase from "firebase";
const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > Button {
    display: none;
  }
`;
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault(); // prevents refresh
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Teshie Yalew",
      userImage:
        "https://i1.rgstatic.net/ii/profile.image/916106868973571-1595428306676_Q512/Teshome-Ayechiluhem.jpg",
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Messege #ROOM`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SENDS
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
