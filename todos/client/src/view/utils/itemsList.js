import AddTaskIcon from "@mui/icons-material/AddTask";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import React from "react";

const listItems = [
    {
        title: 'Create a new Todo',
        icon: <AddTaskIcon/>,
        path: '/create-new-todo'
    },
    {
        title: 'Todos',
        icon: <FormatListNumberedIcon/>,
        path: '/'
    },
]

export default listItems