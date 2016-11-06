import React from 'react'
import { render } from 'react-dom'
import Board from './board.js'
import Store from './store.js'

var store = new Store().getStore();

store.subscribe(() => {
    render(<Board store={store}/>, document.querySelector('.root'))
});

render(<Board store={store}/>, document.querySelector('.root'))
