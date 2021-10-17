import React, {useState} from 'react';
import {Box, Button, IconButton, Snackbar, TextField, Typography} from "@mui/material";
import nextId from "react-id-generator";
import {useDispatch} from "react-redux";
import {todosOperations} from "../../../redux/features/todos";
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from "@mui/styles";
import {generateStyles} from "./generateStyles";

function CreateNew() {

    const useStyles = makeStyles(generateStyles);
    const classes = useStyles();
    const [todo,setTodo] = useState();
    const [open, setOpen] = React.useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const handleClick = () => {
        setOpen(true);
        setTimeout(() => {setOpen(false)},1500)
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const dispatch = useDispatch();

    const enterTodo = (event) => {
        setTodo(event.target.value)
        event.target.value.length >= 5 ? setButtonDisabled(false) : setButtonDisabled(true)
    }
    const addTodo = () => {
        const newTodo = {
            id: nextId(),
            title: todo,
            completed: false
        }
        dispatch(todosOperations.addTodo(newTodo))
        setTodo('')
        handleClick()
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.container}>
                <Typography variant="h4" gutterBottom component="div">
                    Create New Todo
                </Typography>
                <Box>
                    <TextField type="input"
                               className={classes.textField}
                               value={todo} multiline={true}
                               onChange={enterTodo}
                               label="New todo"
                               variant="outlined" />
                </Box>
                <Button style={{marginTop: "20px"}}
                        disabled={isButtonDisabled}
                        variant="outlined"
                        onClick={addTodo}
                >
                    Submit
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Todo added"
                    action={action}
                />
            </Box>
        </Box>
    );
}

export default CreateNew;