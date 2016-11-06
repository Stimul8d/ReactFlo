import Defaults from './defaults.js';
import ActionTypes from './actionTypes.js'

const Reducer = (state, action) => {
    switch (action.type) {

        case ActionTypes.Clear:
            return Object.assign(state, { items: [{ id: 4, cycle: 1 }, { id: 9, cycle: 2 }, { id: 3, cycle: 3 }], step: 0 });

        case ActionTypes.Step:
            return Object.assign(state, {step: state.step + 1 });

        default: return { items: [{ id: 4, cycle: 1 }, { id: 9, cycle: 2 }, { id: 3, cycle: 3 }], step: 0 };
    }
}

export default Reducer;