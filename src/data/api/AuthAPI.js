import axios from 'axios';
import Endpoints from '../constants/Endpoints';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    withCredentials: true
});

const AuthAPI = {
    signUp: userDTO => axiosInstance.post(Endpoints.SIGN_UP, userDTO),
    signIn: credentialsDTO => axiosInstance.post(Endpoints.SIGN_IN, credentialsDTO),
    verifyEmail: _ => axiosInstance.get(Endpoints.VERIFY),
    signOut: _ => axiosInstance.get(Endpoints.SIGN_OUT)
};

export default AuthAPI;
