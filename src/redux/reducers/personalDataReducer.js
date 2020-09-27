import {
	GET_PERSONAL_DATA_SUCCESS,
    GET_PERSONAL_DATA_ERROR,
    MESSAGE_RESET
} from '../actions/personalDataAction';

const initialState = {
    personalData: {},
    message: null,
};

const personalDataReducer = (state = initialState, action) => {
	switch (action.type) {
	  	case GET_PERSONAL_DATA_SUCCESS: {
		  	const { data } = action.payload;
		  	return {
			  	...state,
                personalData: data,
                message: 'Success'
		  	}
	  	}
	  	case GET_PERSONAL_DATA_ERROR: {
			return {
				...state,
                personalData: {},
                message: 'Error'
			}
        }  
        case MESSAGE_RESET: {
			return {
				...state,
				message: null,
			}
		}         
	  default: {
		return state;
	  }
	}
  };
  
  export default personalDataReducer;

 