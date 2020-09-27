import axios from 'axios';
const instance = axios.create();
instance.defaults.timeout = 1000*10;

export default instance;
