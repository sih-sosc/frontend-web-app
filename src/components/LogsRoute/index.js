import React, { Component } from 'react';

class LogsRoute extends Component {
    constructor(props, {match}) {
        super(props)

        console.log(this.props.id)
    }

    render() {
        return(
            <h1>{ this.props.match.params.id }</h1>
        )
    }
}

export default LogsRoute;