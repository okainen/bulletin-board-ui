import axios from 'axios';
import Endpoints from '../constants/Endpoints';
import https from 'https';


const axiosInstance = axios.create({
    baseURL: process.env.POSTS_HOST,
    withCredentials: true,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

const PostsApi = {
    create: postDTO => axiosInstance.post(Endpoints.POSTS, postDTO),
    get: id => axiosInstance.get(`${Endpoints.POSTS}/${id}`),
    getAll: _ => axiosInstance.get(Endpoints.POSTS),
    update: ({id, post}) => axiosInstance.patch(`${Endpoints.POSTS}/${id}`, post),
    delete: id => axiosInstance.delete(`${Endpoints.POSTS}/${id}`)
};

export default PostsApi;
