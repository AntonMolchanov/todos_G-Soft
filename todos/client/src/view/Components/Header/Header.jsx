import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import {makeStyles} from "@mui/styles";
import {generateStyles} from "./generateStyles";
import Hamburger from 'hamburger-react'
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {

    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()

    const [isOpen, setOpen] = useState(false)
    const toggleBurger = () => {
        setOpen(!isOpen)
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.burger}>
                <Hamburger
                    toggled={isOpen}
                    toggle={toggleBurger}
                    size={25}
                    direction="right"
                />
            </Box>
            <Box className={classes.header}>
                <Typography variant="h5" gutterBottom component="div">
                    G-Soft Todos
                </Typography>
                <TaskIcon fontSize="large"/>
            </Box>
            <BurgerMenu isOpen={isOpen} toggle={() => toggleBurger()}/>
        </Box>
    );
}

export default Header;