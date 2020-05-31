import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function ErrorAlert(props) {
    return (
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {props.children}
    </Alert>
    );
}
