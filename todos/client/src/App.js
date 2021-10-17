import './App.css';
import Navigation from "./view/Components/Nav/Navigation";
import React, {useEffect, useState} from "react";
import Header from "./view/Components/Header/Header";
import useWindowSize from "./view/hooks/useWindowSize";
import breakpoints from "./view/utils/breakpoints";
import Todos from "./view/Pages/TodosPage/Todos/Todos";
import {Route, Switch} from "react-router-dom";
import CreateNew from "./view/Pages/CreateNew/CreateNew";
import {todosOperations} from "./redux/features/todos";
import {useDispatch} from "react-redux";

function App() {
    const sizes = useWindowSize();
    const {width} = sizes;
    const {desktop} = breakpoints;
    const dispatch = useDispatch();
    const [isDesktop, setIsDesktop] = useState(width >= desktop);

    useEffect(() => {
        width >= desktop ? setIsDesktop(true) : setIsDesktop(false)
    }, [width])

    useEffect(() => {
        dispatch(todosOperations.getData())
    },[])

    return (
        <div className="App">

            {isDesktop
                ?
                <Navigation/>
                :
                <Header/>
            }
            <Switch>
                <Route exact path="/" render={() => <Todos/>}/>
                <Route path="/create-new-todo" render={() => <CreateNew/>}/>
            </Switch>
        </div>
    );
}

export default App;
