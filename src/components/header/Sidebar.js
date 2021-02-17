import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { openSendMessage } from "../../features/mailSlice";

function Sidebar() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar__button"
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <div onClick={() => history.push("./")}>
        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number={54}
          selected={true}
        />
      </div>

      <div onClick={() => history.push("./starred")}>
        <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      </div>
      <div onClick={() => history.push("./snoozed")}>
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      </div>
      <div onClick={() => history.push("./important")}>
        <SidebarOption
          Icon={LabelImportantIcon}
          title="Important"
          number={54}
        />
      </div>
      <div onClick={() => history.push("./sent")}>
        <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      </div>
      <div onClick={() => history.push("./drafts")}>
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      </div>
      <div onClick={() => history.push("./more")}>
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
