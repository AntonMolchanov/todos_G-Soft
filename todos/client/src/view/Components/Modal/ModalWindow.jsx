import React, {useState} from 'react';
import {Box, Button, Modal, TextField, Tooltip, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useDispatch} from "react-redux";
import {todosOperations} from "../../../redux/features/todos";
import PropTypes from 'prop-types'
import {makeStyles} from "@mui/styles";
import {generateStyles} from "./generateStyles";

ModalWindow.propTypes ={
    title: PropTypes.string,
    id: PropTypes.string
}

function ModalWindow({title,id}) {
    const useStyles = makeStyles(generateStyles);
    const classes = useStyles()

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [updatedTodo,setUpdatedTodo] = useState()
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const handleUpdate = () => {
        dispatch(todosOperations.editedTodoItem(id,updatedTodo))
    }
    const handleEnter = (event) => {
        event.target.value.length >= 5 ? setButtonDisabled(false) : setButtonDisabled(true)
        setUpdatedTodo(event.target.value)
    }

    return (
        <Box>
            <Tooltip title="Click to edit">
                <EditIcon className={classes.icon} onClick={handleOpen}/>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Box className={classes.container}>
                        <TextField
                            type="input"
                            className={classes.textField}
                            defaultValue={title}
                            multiline={true}
                            variant="outlined"
                            onChange={handleEnter}
                        />
                        <Button
                            className={classes.button}
                            variant="outlined"
                            disabled={isButtonDisabled}
                            onClick={handleUpdate}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default ModalWindow;