import React from 'react'
import ActionTypes from './actionTypes.js'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.store = props.store;
        this.store.subscribe(() => {
            let state = this.store.getState();
        })
    }

    state = {
        currentStep: 0,
        demand: 20,
        cycles: 30
    }

    updateDemand = (event) => {
        this.setState({ demand: event.target.value });
    }

    updateCycles = (event) => {
        this.setState({ cycles: event.target.value });
    }

    doStep = () => {
        //this.setState({ currentStep: ++this.state.currentStep });
        this.store.dispatch({ type: ActionTypes.Step });
    }

    clear = () => {
        //this.setState({ currentStep: 0 });
        this.store.dispatch({ type: ActionTypes.Clear });
    }

    render() {
        return <span id="header">
            <h1 className="title">
                {this.props.title}
            </h1>
            <span className="u-pull-right topMarginPad">
                <label htmlFor="demand" className="inlineLabel">Demand ({this.state.demand})</label>
                <input type="range" name="demand" id="weight" min="10" onChange={this.updateDemand} value={this.state.demand} max="50" step="10" className="rightMarginPad"></input>
                <label htmlFor="cycles" className="inlineLabel">Cycles ({this.state.cycles})</label>
                <input type="range" name="cycles" id="weight" min="10" onChange={this.updateCycles} value={this.state.cycles} max="50" step="10" className="rightMarginPad"></input>
                <button onClick={this.clear}>Clear</button>
                <button onClick={this.doStep}>Step: {this.state.currentStep}</button>
                <button>Run</button>
            </span>
            <hr />
        </span>
    }
}

export default Header
