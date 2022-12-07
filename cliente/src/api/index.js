import axios from "axios";

const url = "http://localhost:5000/posts";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPosts = () => axios.get(url);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
