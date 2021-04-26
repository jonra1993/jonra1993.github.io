import { combineReducers } from '@reduxjs/toolkit';
import { reducer as personalDataReducer } from 'src/redux/slices/personalData';


const appReducer = combineReducers({
  personalDataState: personalDataReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action);
}

export const resetAppAction = () => (dispatch) => {
  dispatch({ type: 'RESET_APP' });
};


export default rootReducer;