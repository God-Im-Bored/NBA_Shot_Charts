import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "white",
      boxShadow: "none",
      "&:scroll": {
        backgroundColor: "white",
      },
    },
    text: {
      color: "black",
      fontSize: "14px",
      padding: "15px",
      flexDirection: "row",
      fontWeight: "bold",
      fontFamily: "Lato, sans-serif",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  }));

const NavBar = () => {
    classes = useStyles()
    return (
        <AppBar className={classes.root} position='fixed' top={60} id='appbar' >
            <Toolbar>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar