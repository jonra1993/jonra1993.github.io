import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from '../../services/personalDataService'

/*
  STATE
*/
const initialState = {
    personalData: {},
    message: null,
};

const slice = createSlice({
    name: 'personalData',
    initialState,
    reducers: {
        getPersonalDataSuccess(state, action) {
            const  data  = action.payload;
            state.personalData = data;
            state.message = 'Success';
        },
        getPersonalDataError(state) {
            state.personalData = {};
            state.message = 'Error';
        },
        messageReset(state){            
            state.message = null;
        },

    }
});

export const reducer = slice.reducer;



/*
  ACTIONS
*/
export const getPersonalDataAction = () => async (dispatch) => {
    try {
        const data = await getUserData();
        dispatch(slice.actions.getPersonalDataSuccess(data));        
    } catch (error) {
        dispatch(slice.actions.getPersonalDataError());
    }
};

export const messageReset = () => (dispatch) => {
    dispatch(messageReset());
};

