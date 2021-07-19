import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/redux/store';
import { getUserData } from 'src/services/personalDataService'

interface PersonalDataState {
  personalData: any;
  message: string;
}

const initialState: PersonalDataState = {
  personalData: null,
  message: null,
};

const slice = createSlice({
  name: 'personalData',
  initialState,
  reducers: {    
    getPersonalDataSuccess(state: PersonalDataState, action: PayloadAction<any>) {
      const data = action.payload;
      state.personalData = data;
      state.message = 'Success';
    },
    getPersonalDataError(state: PersonalDataState) {
      state.personalData = {};
      state.message = 'Error';
    },
    messageReset(state: PersonalDataState) {
      state.message = null;
    },
  }
});

export const { reducer } = slice;

export const getPersonalDataAction = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    const data = await getUserData();
    dispatch(slice.actions.getPersonalDataSuccess(data));
  } catch (error) {
    dispatch(slice.actions.getPersonalDataError());
  }
};

export const messageReset = (): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.messageReset());
};

export default slice;
