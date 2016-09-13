import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Board from './board.js'

ReactDOM.render(
    <div className="container">
    <Header/><hr/><Board/>
    </div>, document.querySelector('.root'));
