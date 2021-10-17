import React from 'react';
import {Box} from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";
import {makeStyles} from "@mui/styles";
import {generateStyles} from "./generateStyles";
import nextId from "react-id-generator";
import {useSelector} from "react-redux";
import {todosSelectors} from "../../../../redux/features/todos";

function Todos() {
    const useStyles = makeStyles(generateStyles);
    const classes = useStyles();
    const todos = useSelector(todosSelectors.todos)

    return (
        <>
            <Box className={classes.todos}>
                {todos.map(todo => {
                    return(
                        <TodoItem
                            key={nextId()}
                            card={todo}/>
                    )
                })}
            </Box>
        </>
    );
}

export default Todos;