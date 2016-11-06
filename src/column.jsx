import React from 'react'
import Kanban from './kanban.js'

class Column extends React.Component {
    
    constructor(props){
        super(props);
        this.store = props.store;
    }

    getItems() {
        let data = this.store.getState();
        return data.items.map((x) => <Kanban key={x.id} id={x.id} cycle={x.cycle}/>)
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