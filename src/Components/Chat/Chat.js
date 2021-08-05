import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { InfoOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "./ChatInput";
import { db } from "../SideBar/database";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Messages from "./Messages";
const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 20px;
    margin-top: 3.5px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  > p .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 18px;
    margin-top: 3.5px;
  }
`;
const ChatMessege = styled.div``;
const ChatBottom = styled.div``;
const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);
  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined />
                Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessege>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Messages
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
          </ChatMessege>
          <ChatBottom ref={chatRef}></ChatBottom>
          <ChatInput
            //channelName
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            //channelId
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
