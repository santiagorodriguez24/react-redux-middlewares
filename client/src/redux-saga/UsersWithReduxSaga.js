import * as React from 'react';
import { connect } from 'react-redux';
import { loadUsers } from "./actions";
import UsersTable from '../components/UsersTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorAlert from '../components/ErrorAlert';

class UsersWithReduxSaga extends React.Component {
    componentDidMount() {
        this.props.loadUsers();
    };

    render() {
        if (this.props.loading) {
            return <CircularProgress color="secondary" />
        }


        if (this.props.error) {
            return <ErrorAlert>{this.props.error}</ErrorAlert>
        }

        return (
            <UsersTable rows={this.props.data} />
        );
    }
}

const mapStateToProps = state => ({
    data: state.reduxSaga.data,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
});

const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersWithReduxSaga);
