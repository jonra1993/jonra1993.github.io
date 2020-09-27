import {  combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import personalDataReducer from './personalDataReducer';

const appReducer = combineReducers({
  personalDataState: personalDataReducer,
  form: formReducer
});

export default appReducer;