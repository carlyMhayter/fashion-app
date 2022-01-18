import React from "react";
import Image from "next";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { ACTIONS, reducer } from "../utils/reducer";

export default function OutfitBoardCard(props) {
  const { item, section, data, dispatch } = props;
  let shortBoolean = false;
  console.log(item.tags);

  function changeBoolean() {
    if (
      item.tags.includes("shorts") ||
      item.tags.includes("hat") ||
      item.tags.includes("mini skirt") ||
      item.tags.includes("shorts")
    ) {
      console.log("this item is short");
      return true;
    }
  }
  shortBoolean = changeBoolean();
  console.log(shortBoolean);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePress = () => {
    dispatch({ type: ACTIONS.CONSOLE_LOG });
  };

  const handleDeleteButtonClick = (sectionName) => {
    dispatch({
      type: ACTIONS.DELETE_FROM_SECTION,
      payload: { item, section: sectionName },
    });
  };
  return (
    <div
      className={`outfit-board-card-inner-container${
        shortBoolean ? "-short" : ""
      }`}
      style={{ backgroundImage: `url(${item.src})` }}
    >
      <IconButton
        style={{ fontSize: 30 }}
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        className="closet-item-card-menu"
        onClick={handleMenu}
        color="inherit"
      >
        <Tooltip title="More options">
          <MoreHorizIcon
            className="outfit-board-card-options"
            fontSize="medium"
          />
        </Tooltip>
      </IconButton>
      <Menu
        id="menu-dot"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit item</MenuItem>
        <MenuItem
          onClick={() => {
            handleDeleteButtonClick(section);
          }}
        >
          Delete from board
        </MenuItem>
      </Menu>
    </div>
  );
}

// shortBoolean && "outfit-board-card-inner-container-short" : "outfit-board-card-inner-container"
