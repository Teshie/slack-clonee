import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { InfoOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "./ChatInput";

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
const Chat = () => {
  const roomId = useSelector(selectRoomId);
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
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
        <ChatMessege>{/* List outthe messeges */}</ChatMessege>
        <ChatInput
          //channelName
          //channelId
          channelId={roomId}
        />
      </>
    </ChatContainer>
  );
};

export default Chat;
