import React from 'react'
import Column from './column.js'
import Header from './header.js'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.store = props.store
        
        this.store.subscribe(()=>{
            this.items = this.store.getState().items;
        });
    }

    render() {
        return <div className="container">
            <Header store={this.store} title="WIP-Sim" />
            <div className="row">
                <Column title="Backlog" items={this.items} store={this.store} />
                <Column title="Development" items={this.items} store={this.store} />
                <Column title="Code Review" items={this.items} store={this.store} />
                <Column title="Testing" items={this.items} store={this.store} />
                <Column title="Deployment" items={this.items} store={this.store} />
                <Column title="Complete" store={this.store} />
            </div>
        </div>;
    }
}

export default Board
