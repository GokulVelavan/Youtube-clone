import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_YouTube_%282005-2011%29.svg/1920px-Logo_of_YouTube_%282005-2011%29.svg.png"
            alt="yotube logo"
          />
        </Link>
      </div>

      <div className="header_center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search"
          type="text"
        />
        <Link to={`/search/${input}`}>
          <SearchSharpIcon className="input_button" />
        </Link>
      </div>

      <div className="header_right">
        <VideoCallSharpIcon className="header_right_icon" />
        <AppsSharpIcon className="header_right_icon" />
        <NotificationsSharpIcon className="header_right_icon" />
        <Avatar
          src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
          alt="avatar_img"
        />
      </div>
    </div>
  );
}

export default Header;
