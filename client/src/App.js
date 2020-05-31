import React, { Component, Fragment } from 'react';
import UsersWithReduxThunk from "./redux-thunk/UsersWithReduxThunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import UsersWithReduxSaga from "./redux-saga/UsersWithReduxSaga";
import UsersWithSuspense from "./suspense/UsersWithSuspense";
import UsersWithHooks from "./hooks/UsersWithHooks";
import CssBaseline from '@material-ui/core/CssBaseline';
import links from './constants/links';
import NavBar from './components/NavBar';


class App extends Component {

    render() {
        return (
            <Fragment>
                <CssBaseline />
                <div className='app'>
                    <BrowserRouter>
                        <div style={{ height: '100%' }}>
                            <NavBar links={links} />
                            <div style={{height:'100%'}}>
                                <Switch>
                                    <Route
                                        path="/redux-thunk"
                                        component={UsersWithReduxThunk}
                                    />
                                    <Route
                                        path="/redux-saga"
                                        component={UsersWithReduxSaga}
                                    />
                                    <Route
                                        path="/suspense"
                                        component={UsersWithSuspense}
                                    />
                                    <Route
                                        path="/hooks"
                                        component={UsersWithHooks}
                                    />
                                    <Route
                                        path="/"
                                        component={Home}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </BrowserRouter>
                </div>
            </Fragment>
        );
    }
}

export default App;
