import axios from 'axios';
import Endpoints from '../constants/Endpoints';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    withCredentials: true
});

const PostsAPI = {
    create: postDTO => axiosInstance.post(Endpoints.POSTS, postDTO),
    get: id => axiosInstance.get(`${Endpoints.POSTS}/${id}`),
    getAll: _ => axiosInstance.get(Endpoints.POSTS),
    update: ({id, post}) => axiosInstance.patch(`${Endpoints.POSTS}/${id}`, post),
    delete: id => axiosInstance.delete(`${Endpoints.POSTS}/${id}`)
};

export default PostsAPI;
