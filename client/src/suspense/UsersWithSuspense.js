/*
Suspense is a new feature in React 16.6.0. It allows us to defer rendering 
part of the component until some condition is met (for example data from the API loaded).
*/
import * as React from 'react';
import SuspenseTable from "./SuspenseTable";
import ErrorBoundary from "./ErrorBoundary";
import CircularProgress from '@material-ui/core/CircularProgress';

class UsersWithSuspense extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <React.Suspense fallback={<CircularProgress color="secondary" />}>
                    <SuspenseTable />
                </React.Suspense>
            </ErrorBoundary>
        );
    }
}

export default UsersWithSuspense;
