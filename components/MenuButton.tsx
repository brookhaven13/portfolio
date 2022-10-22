import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

type Props = {};

export default function MenuBotton({}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="menu-button"
        aria-controls={open ? "menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        id="menu"
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem className="text-gray-500" onClick={handleClose}>
          About
        </MenuItem>
        <MenuItem className="text-gray-500" onClick={handleClose}>
          Projects
        </MenuItem>
        <MenuItem className="text-gray-500" onClick={handleClose}>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
