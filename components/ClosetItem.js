import React from "react";
import Image from "next";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import Draggable, {DraggableCore} from 'react-draggable'; 

export default function ClosetItem(props) {
  let { name, src } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//   eventLogger = (e: MouseEvent, data: Object) => {
//     console.log('Event: ', e);
//     console.log('Data: ', data);
//   };

  return (
    //   <Draggable
    //     axis="x"
    //     handle=".handle"
    //     defaultPosition={{x: 0, y: 0}}
    //     position={null}
    //     grid={[25, 25]}
    //     scale={1}
    //     onStart={this.handleStart}
    //     onDrag={this.handleDrag}
    //     onStop={this.handleStop}>>

    <Card >
      <CardMedia  component="img" image={src} />
      <CardContent className="drag-me-text">Drag Me</CardContent>
      <IconButton
        style ={{fontSize: 30}}
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        className="closet-item-card-menu"
        onClick={handleMenu}
        color="inherit"
      >
        <MoreHorizIcon fontSize="medium" />
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
    // </Draggable>
  );
}
