import React from 'react';
import {Card, CardActions, CardContent, Tooltip, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {generateStyles} from "./generateStyles";
import cx from 'classnames';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import {todosOperations} from "../../../../redux/features/todos";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ModalWindow from "../../../Components/Modal/ModalWindow";

import PropTypes from 'prop-types'

TodoItem.propTypes ={
    card: PropTypes.object.isRequired,
}

function TodoItem({card}) {
    const {title, completed, id} = card;
    const useStyles = makeStyles(generateStyles);
    const classes = useStyles()
    const dispatch = useDispatch()
    let listItemCx = cx(classes.card, {[classes.completedCard]: completed === true});

    const removeTodo = () => {
        dispatch(todosOperations.removeTodoItem(id))
    }
    const completeTodo = () => {
        dispatch(todosOperations.completeTodo(id))
    }
    const uncompleteTodo = () => {
        dispatch(todosOperations.uncompleteTodo(id))
    }

    let isCompleted;
    completed
        ?
        isCompleted = <Tooltip title="Mark as uncompleted">
            <CheckCircleRoundedIcon
                onClick={uncompleteTodo}
                style={{color: "green"}}
                className={classes.icon}
            />
        </Tooltip>
        :
        isCompleted = <Tooltip title="Mark as completed">
            <CancelRoundedIcon
                onClick={completeTodo}
                style={{color: "red"}}
                className={classes.icon}
            />
        </Tooltip>

    return (
        <Card className={classes.card}
              style={completed ? {background: "#ebfaeb"} : {background: "#ffebe6"}}>
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    color="#006bb3"
                    className={listItemCx}
                >
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                {isCompleted}
                <Tooltip title="Double click to delete">
                    <DeleteIcon
                        style={{color: "#800033"}}
                        className={classes.icon}
                        onDoubleClick={removeTodo}
                    />
                </Tooltip>
                <ModalWindow title={title} id={id}/>
            </CardActions>
        </Card>
    );
}

export default TodoItem;