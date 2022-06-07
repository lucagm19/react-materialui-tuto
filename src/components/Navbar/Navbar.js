import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar elevation={0} color="secondary">
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
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          {/*Links*/}
          <Box>
            <Typography>Home</Typography>
          </Box>
          {/*Button*/}
          <Box>
            <Typography>Button</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
