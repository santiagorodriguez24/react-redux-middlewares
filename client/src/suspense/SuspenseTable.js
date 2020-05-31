import * as React from 'react';
import { createResource } from "simple-cache-provider"; // simple-cache-provider is part of React
import { cache } from "./cache";
import Api from "../api/api";
import UsersTable from '../components/UsersTable';


let UsersResource = createResource(async () => {
    const response = await Api.getUsers();
    const json = await response.json();

    return json;
});

class SuspenseTable extends React.Component {
    render() {
        let users = UsersResource.read(cache);

        return (
            <UsersTable rows={users} />
        );
    }
}

export default SuspenseTable;
