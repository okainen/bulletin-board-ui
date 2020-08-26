import axios from 'axios';
import Endpoints from '../constants/Endpoints';
import https from 'https';


const axiosInstance = axios.create({
    baseURL: process.env.AUTH_HOST,
    withCredentials: true,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

const AuthApi = {
    signUp: userDTO => axiosInstance.post(Endpoints.SIGN_UP, userDTO),
    signIn: credentialsDTO => axiosInstance.post(Endpoints.SIGN_IN, credentialsDTO),
    verifyEmail: _ => axiosInstance.get(Endpoints.VERIFY),
    signOut: _ => axiosInstance.get(Endpoints.SIGN_OUT)
};

export default AuthApi;
