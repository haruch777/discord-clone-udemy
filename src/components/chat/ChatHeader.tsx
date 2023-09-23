import React from "react";
import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PushPinIcon from "@mui/icons-material/PushPin";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeaderleft">
        <h3>
          <span className="chatHeaderhash">#</span>
          Udemy
        </h3>
      </div>
      <div className="chatHeaderRight">
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="検索" name="" id="" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
