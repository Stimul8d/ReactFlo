import React from 'react'
import Kanban from './kanban.js'

class Column extends React.Component {

    getItems() {
        if (!this.props.items) return
        return this.props.items.map((x) => <Kanban key={x.id} id={x.id} cycle={x.cycle}/>)
    }

    render() {
        return <div className="two columns columnStyle">
            <h6>{this.props.title}
                50/&infin; </h6>
            <ul>
                {this.getItems() }
            </ul>
        </div>
    }
}

export default Column