import axios from '../utils/axios';
//import { baseURL } from '../constants';
//const API = './resumeData.json';

export const getUserData = () => new Promise((resolve, reject) => {
    axios.get('./resumeData.json')
        .then((response) => {
            if (response.status === 200) {
                //console.log(response.data)
                resolve(response.data);
            } else {
                //console.log(response.data)
                reject(response.data.error);
            }
        })
        .catch((error) => {
            console.log(error.response.data)
            reject(error);
        });
});
