import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
  Box
} from "@mui/material";
import React, { useState } from "react";


import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from '@mui/icons-material/LocalMall';
const Navbar = () => {
  const [anchorEl,setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClick = e=>{
    setAnchorEl(e.currentTarget);
  }
  const handleClose = ()=>{
    setAnchorEl(null);
  }
  return (
    <Box elevation={0} sx={{ backgroundColor: "white"}}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          component="div"
        >
          <Box>
            <IconButton>
              <LocalMallIcon fontSize="medium"/>
            </IconButton>
          </Box>
          {/*Links*/}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              
            >
              Home
            </Typography>
            
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls='basic-menu'
              aria-haspopup='true'
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>
            {/*Drop down items*/}
            <Menu id="basic-menu"
              anchorEl={anchorEl}
              open= {openMenu}
              onClose={handleClose}
            >
              <MenuItem onClose={handleClose}>Men</MenuItem>
              <MenuItem onClose={handleClose}>Women</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Men
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Woman
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              FAQ
            </Typography>
          </Box>
          {/*Button*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ background: "#ff4081" }}
              disableElevation
              variant="contained"
            >
              Account
            </Button>
            <IconButton>
            <Badge badgeContent={4} color="primary">
              <ShoppingBasketIcon color="action" />
            </Badge>
            </IconButton>
            
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
