import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import GifBoxIcon from "@mui/icons-material/GifBox";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="#Udemyへメッセージを送信"
          />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifBoxIcon />
          <SentimentSatisfiedAltIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
