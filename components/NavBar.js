import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const Links = [
  {
    linkName: "My Closet",
    linkLoc: "/",
  },
  {
    linkName: "My Outifts",
    linkLoc: "/",
  },
  {
    linkName: "ACCOUNT",
    linkLoc: "/",
  },
  {
    linkName: "LOG OUT",
    linkLoc: "/",
  },
];

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar-main" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className="nav-bar-logo-text navbar-items"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Wardrobe Wrangler
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              className="navbar-items"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {Links.map((link) => (
                <MenuItem key={link.linkName} onClick={handleClose}>
                  <Link href={link.linkLoc}>
                    <a> {link.linkName} </a>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
