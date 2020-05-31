import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const homeStyle = {
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flex: '1',
        backgroundImage: 'url("/images/bg4.jpg")',
        backgroundPosition: '100 % 50 %',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
    },
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto"
    },
    griditem: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto"
    },
    brand: {
        color: "#FFFFFF",
        textAlign: "left"
    },
    title: {
        fontSize: "4.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px 0 0"
    }
};

const useStyles = makeStyles(homeStyle);

export default function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container className={classes.grid}>
                <Grid item className={classes.griditem}>
                    <div className={classes.brand}>
                        <h1 className={classes.title}>Load data in React</h1>
                        <h3 className={classes.subtitle}>
                            {'4 ways to Query and Show some data loaded from the API using redux-thunk, redux-saga, suspense & hooks.'}
                        </h3>
                    </div>
                </Grid>
            </Grid>
        </div>
    );

}
