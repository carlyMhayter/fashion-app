import React, { useState } from "react";
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
import { sections } from "../utils/data";

export default function ClosetItem(props) {
  const { data, dispatch, item } = props;
  const { src, tags, id } = item;

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleAddButtonClick = (sectionName) => {
    dispatch({
      type: ACTIONS.ADD_TO_SECTION,
      payload: { item, section: sectionName },
    });
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <Card className="card-parent">
      <CardMedia component="img" image={src} />

      <div className="hover-container">
        <div className="hover-add-clothes">
          <IconButton
            className="hover-add-clothes-icon"
            aria-label="Add to outfit board"
            onClick={handleMenu2}
          >
            <LightTooltip title="Add to outfit board">
              <AddCircleIcon fontSize="medium" />
            </LightTooltip>
          </IconButton>
        </div>
      </div>
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
          <MoreHorizIcon fontSize="medium" />
        </Tooltip>
      </IconButton>
      <Menu
        id="menu-dot"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit Item</MenuItem>
        <MenuItem onClick={handleClose}>Add to board</MenuItem>
      </Menu>
      <Menu
        id="menu-add"
        anchorEl={anchorEl2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
      >
        {sections.map((sectionName) => (
          <MenuItem
            key={sectionName}
            onClick={() => {
              handleAddButtonClick(sectionName);
              handleClose();
            }}
          >
            Add to {sectionName} section
          </MenuItem>
        ))}
      </Menu>
    </Card>
  );
}
