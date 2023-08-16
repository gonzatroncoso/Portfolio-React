import React from "react";
// import Button from "@material-ui/core/Button"
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css'

export const Header = () => {
  return (
    <>
    <Box className= "pp">
      <AppBar position="static" className= "aa">
        <Toolbar>
          <IconButton className="gg tt"
            // size="large"
            // edge="start"
            // color="inherit"
            // aria-label="menu"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
          <div className="tt">
            <p className="rr">
                Sobre Mi
            </p>
            <p className="rr">
                Habilidades
            </p>
            <p className="rr">
                Proyectos
            </p>

          </div>

        <Button color="inherit" className="tt">Descargar CV</Button>
      </AppBar>
    </Box>
    </>
  );
};
