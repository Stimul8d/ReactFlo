import React from 'react'

class Header extends React.Component {
    render() {
        return <span id="header">
            <h1 className="title">
                Flow Simulator
            </h1>
            <span className="u-pull-right topMarginPad">
                <label for="demand" className="inlineLabel">Demand</label>
                <input type="range" name="demand" id="weight" min="10" value="10" max="50" step="10" className="rightMarginPad"></input>
                <label for="cycles" className="inlineLabel">Cycles</label>
                <input type="range" name="cycles" id="weight" min="10" value="10" max="50" step="10" className="rightMarginPad"></input>
                <button>Clear</button>
                <button>Step</button>
                <button>Run</button>
            </span>
        </span>
    }
}

export default Header
