import React from 'react'

class Kanban extends React.Component {
    render() {
        return <li>
            <code>#{this.props.id} | Cycle {this.props.cycle} </code>
        </li>
    }
}

export default Kanban
