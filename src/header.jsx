import React from 'react'

class Header extends React.Component {

    state = {
        demand: 20,
        cycles: 30
    }

    updateDemand = (event) => {
        this.setState({demand: event.target.value});
    }
    updateCycles = (event) => {
        this.setState({cycles: event.target.value});
    }
    render() {
        return <span id="header">
            <h1 className="title">
                Flow Simulator
            </h1>
            <span className="u-pull-right topMarginPad">
                <label htmlFor="demand" className="inlineLabel">Demand ({this.state.demand})</label>
                <input type="range" name="demand" id="weight" min="10" onChange={this.updateDemand} value={this.state.demand} max="50" step="10" className="rightMarginPad"></input>
                <label htmlFor="cycles" className="inlineLabel">Cycles ({this.state.cycles})</label>
                <input type="range" name="cycles" id="weight" min="10" onChange={this.updateCycles} value={this.state.cycles} max="50" step="10" className="rightMarginPad"></input>
                <button>Clear</button>
                <button>Step</button>
                <button>Run</button>
            </span>
            <hr/>
        </span>
    }
}

export default Header
