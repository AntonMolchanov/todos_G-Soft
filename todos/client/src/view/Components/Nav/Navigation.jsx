import React from 'react';
import Drawer from '@mui/material/Drawer';
import {Box, Divider, List, ListItem, Toolbar, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles'
import TaskIcon from '@mui/icons-material/Task';
import {generateStyles} from "./generateStyles";
import itemsList from "../../utils/itemsList";
import {NavLink} from "react-router-dom";
import nextId from "react-id-generator";

function Navigation() {

    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()

    return (
        <Box>
            <Drawer
                anchor="left"
                variant="permanent">
                <Box className={classes.drawerLogo}>
                    <Typography variant="h4" gutterBottom component="div">
                        G-Soft Todos
                    </Typography>
                    <TaskIcon fontSize="large"/>
                </Box>
                <Divider />
                <Box className={classes.burgerMenu}>
                    <List className={classes.list}>
                        {itemsList.map(item => {
                            return (
                                <ListItem key={nextId()} className={classes.listItem}>
                                    <Box className={classes.itemContent}>
                                        <NavLink to={item.path}>
                                            <Typography variant="h5" gutterBottom component="div" color="#006bb3" className={classes.textField}>
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
            </Drawer>
        </Box>
    );
}

export default Navigation;