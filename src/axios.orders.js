import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-e2017.firebaseio.com/"
});

export default instance;