import React from 'react'

class Kanban extends React.Component {

    constructor(props) {
        super(props);
        this.store = props.store;
    }

    render() {
        return <li>
            <code>#{this.props.id}| Cycle {this.props.cycle} </code>
        </li>
    }
}

export default Kanban
