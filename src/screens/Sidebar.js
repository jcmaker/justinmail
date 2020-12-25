import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "../components/SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={10} />
      <SidebarOption Icon={SendIcon} title="Sent" number={24} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <a
            href="https://www.facebook.com/justin.cho.98622"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/jcmaker0627/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-cho-39850a1b0"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <span
            title="jcmaker0627@gmail.com"
            className="email-span"
            onClick={() => {
              const textArea = document.createElement("textarea");
              textArea.value = "jcmaker0627@gmail.com";
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("Copy");
              textArea.remove();
              alert("My Email is Copied to Clipboard! Crtl + V 💌");
            }}
          >
            <EmailIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
