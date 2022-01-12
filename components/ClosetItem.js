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

export default function ClosetItem(props) {
  const { dispatch, src, tags, id } = props;

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
        <div className="hover-add-clothes head-adder">
          <IconButton
            className="hover-add-clothes-icon"
            aria-label="Add to head section"
            onClick={handlePress}
          >
            <LightTooltip title="Add to head section">
              <AddCircleIcon fontSize="medium" />
            </LightTooltip>
          </IconButton>
        </div>
        <div className="hover-add-clothes torso-adder">
          <IconButton
            className="hover-add-clothes-icon"
            aria-label="Add to head section"
          >
            <LightTooltip title="Add to torso section">
              <AddCircleIcon fontSize="medium" />
            </LightTooltip>
          </IconButton>
        </div>
        <div className="hover-add-clothes leg-adder">
          <IconButton
            className="hover-add-clothes-icon"
            aria-label="Add to head section"
          >
            <LightTooltip title="Add to leg section">
              <AddCircleIcon fontSize="medium" />
            </LightTooltip>
          </IconButton>
        </div>
        <div className="hover-add-clothes feet-adder">
          <IconButton
            className="hover-add-clothes-icon"
            aria-label="Add to head section"
          >
            <LightTooltip title="Add to feet section">
              <AddCircleIcon fontSize="medium" />
            </LightTooltip>
          </IconButton>
        </div>
      </div>

      <CardContent className="drag-me-text"></CardContent>
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
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Add to Outfit</MenuItem>
        <MenuItem onClick={handleClose}>Friend</MenuItem>
      </Menu>
    </Card>
  );
}
