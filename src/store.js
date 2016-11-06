import { createStore } from 'redux';
import Reducer from './reducer.js';

class Store{
    
    constructor(){
        this.store = createStore(Reducer);
    }

    getStore = () => this.store;
}

export default Store;