import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, useHistory, useLocation } from "react-router-dom";

export default function NavBar(props) {
    let history = useHistory();
    let location = useLocation();
    const { links } = props;

    const handleChangeTab = (event, newValue) => {
        history.push(newValue);
    };

    useEffect(() => {
        console.log(location);
    }, [location])


    return (
        <AppBar position="static">
            <Tabs
                variant="fullWidth"
                value={history.location.pathname}
                onChange={handleChangeTab}
                aria-label="nav tabs example"
                style={{ flexGrow: '1' }}
            >
                {
                    links.map((link, index) => {
                        return (
                            <Tab
                                id={`nav-tab-${link.label.toLowerCase()}`}
                                key= {`nav-tab-${link.label.toLowerCase()}`}
                                label={link.label}
                                value={link.path}
                                component={Link}
                                to={link.path}
                            />
                        )
                    })
                }
            </Tabs>
        </AppBar>
    );
}
