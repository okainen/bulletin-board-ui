import axios from 'axios';
import Endpoints from '../constants/Endpoints';

const axiosInstance = axios.create({
  baseURL: process.env.POSTS_HOST,
  withCredentials: true
});

const PostsApi = {
  create: postDto => axiosInstance.post(Endpoints.POSTS, postDto),
  get: id => axiosInstance.get(`${Endpoints.POSTS}/${id}`),
  getAll: _ => axiosInstance.get(Endpoints.POSTS),
  update: ({id, post}) => axiosInstance.patch(`${Endpoints.POSTS}/${id}`, post),
  delete: id => axiosInstance.delete(`${Endpoints.POSTS}/${id}`)
};

export default PostsApi;
