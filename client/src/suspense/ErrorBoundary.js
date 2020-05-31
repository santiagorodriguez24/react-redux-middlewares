import React from 'react';
import ErrorAlert from '../components/ErrorAlert';

/*
This is an Error Boundary to catch errors thrown by Suspense.
*/

export class ErrorBoundary extends React.Component {
  state = {};

  componentDidCatch(error) {
    this.setState({ error: error.message || "Unexpected error" });
  }

  render() {
    if (this.state.error) {
      return <ErrorAlert>{this.props.error || 'Unexpected Error'}</ErrorAlert>;
    }
    return this.props.children;
  }
}


export default ErrorBoundary;
