import React from 'react'
import Column from './column.js'
import Header from './header.js'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.items = [{ id: 1, cycle: 1 }, { id: 2, cycle: 2 }];
    }

    render() { 
        return <div className="container">
            <Header/>
            <div className="row">
                <Column title="Backlog" items={this.items}/>
                <Column title="Development" items={this.items}/>
                <Column title="Code Review" items={this.items}/>
                <Column title="Testing" items={this.items}/>
                <Column title="Deployment" items={this.items}/>
                <Column title="Complete"/>
            </div>
        </div>;
    }
}

export default Board
