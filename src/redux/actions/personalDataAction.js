import { getUserData } from '../../services/personalDataService'
export const GET_PERSONAL_DATA_SUCCESS = 'GET_PERSONAL_DATA_SUCCESS';
export const GET_PERSONAL_DATA_ERROR = 'GET_PERSONAL_DATA_ERROR';
export const MESSAGE_RESET = 'MESSAGE_RESET';

export function getPersonalDataAction(url) {
    return async (dispatch) => {
        try {
            const data = await getUserData();
            dispatch({
                type: GET_PERSONAL_DATA_SUCCESS,
                payload: {
                    data
                }
            });
        } catch (error) {
            console.log('error getPersonalDataAction', error);
            dispatch({
                type: GET_PERSONAL_DATA_ERROR
            });
        }
    };
}

export function messageReset() {
    return (dispatch) => {
        dispatch({
            type: MESSAGE_RESET,
        });
    } 
}