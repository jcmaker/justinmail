import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="./image/Justinmail_logo.png" alt="logo" />
        <span>JustinMail</span>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
      </div>
      <div className="header__right">
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
