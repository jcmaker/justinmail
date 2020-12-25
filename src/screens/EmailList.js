import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import RefreshIcon from "@material-ui/icons/Refresh";
import { IconButton } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings-left">
          <CheckBoxOutlineBlankIcon />
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </div>
        <div className="emailList__settings-right">
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections"></div>
    </div>
  );
};

export default EmailList;
