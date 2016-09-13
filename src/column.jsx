import React from 'react'

class Column extends React.Component {
    render() {
        return <div className="two columns columnStyle">
            <h6>{this.props.title} 50/&infin;</h6>
            <ul>
                <li>
                    <code>#43 | Cycle 1</code>
                </li>
            </ul>
        </div>

    }
}

export default Column
