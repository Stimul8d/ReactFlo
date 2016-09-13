import React from 'react'
import Column from './column.js'

class Board extends React.Component {
    render() {
        return <div className="row">
            <Column title="Backlog"/>
            <Column title="Development"/>
            <Column title="Code Review"/>
            <Column title="Testing"/>
            <Column title="Deployment"/>
            <Column title="Complete"/>
        </div>
    }
}

export default Board
