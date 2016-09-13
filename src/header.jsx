import React from 'react'

class Header extends React.Component {
    render() {
        return <h1> hey {this.props.phrase} </h1>
    }
}

export default Header;
