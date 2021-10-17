import React from 'react';
import {Box, List, ListItem, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {generateStyles} from "./generateStyles";
import itemsList from "../../utils/itemsList";
import {NavLink} from "react-router-dom";
import nextId from "react-id-generator";
import PropTypes from 'prop-types'

BurgerMenu.propTypes ={
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
}

function BurgerMenu({isOpen, toggle}) {
    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()

    return (
        <>
            {isOpen
                ?
                <Box className={classes.burgerMenu}>
                    <List className={classes.list}>
                        {itemsList.map(item => {
                            return (
                                <ListItem key={nextId()} className={classes.listItem} onClick={toggle}>
                                    <Box className={classes.itemContent}>
                                        <NavLink to={item.path}>
                                            <Typography variant="h5" gutterBottom component="div" color="#006bb3" className={classes.textItem}>
                                                {item.title}
                                            </Typography>
                                        </NavLink>
                                        {item.icon}
                                    </Box>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                : null
            }
        </>
    );
}

export default BurgerMenu;