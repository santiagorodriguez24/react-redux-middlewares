import React, { useState, useEffect } from 'react';
import Api from "../api/api";
import UsersTable from '../components/UsersTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorAlert from '../components/ErrorAlert';

function UsersWithHooks() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await Api.getUsers();
                const json = await response.json();

                setData(json);
            } catch (e) {
                setError(e.message || 'Unexpected error');
            }

            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) {
        return <CircularProgress color="secondary" />
    }

    if (error) {
        return <ErrorAlert>{error}</ErrorAlert>;
    }

    return (
        <UsersTable rows={data} />
    );
}

export default UsersWithHooks;
