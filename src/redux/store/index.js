import {createStore, applyMiddleware} from 'redux';
import { RootReducer } from '../reducers';

export const store = createStore(RootReducer, applyMiddleware());