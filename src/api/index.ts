import axios from "axios";
import { FetchPostsParams, Post } from "../utils/types";

const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8000/api",
  withCredentials: true,
});

const handleError = (err: unknown, msg: string) => {
  if (axios.isAxiosError(err)) {
    throw err;
  } else {
    throw new Error(msg);
  }
};

export const fetchPosts = async (params: FetchPostsParams): Promise<Post[]> => {
  try {
    const { data } = await api.get("/posts", {
      params,
    });

    return data.data;
  } catch (err: unknown) {
    return handleError(err, "Error fetching posts");
  }
};

export const fetchPost = async (id: number): Promise<Post> => {
  try {
    const response = await api.get(`/posts/${id}`);

    return response.data.data;
  } catch (err) {
    return handleError(err, "Error fetching post");
  }
};

export const createPost = async (postData: {
  title: string;
  description: string;
  status: string;
}) => {
  try {
    const response = await api.post("/posts", postData);
    return response.data;
  } catch (err) {
    return handleError(err, "Error creating post");
  }
};

export const updatePost = async (
  id: number,
  postData: { title: string; description: string; status: string }
) => {
  try {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  } catch (err) {
    return handleError(err, "Error updating post");
  }
};

export const deletePost = async (id: number) => {
  try {
    await api.delete(`/posts/${id}`);
  } catch (err) {
    return handleError(err, "Error deleting post");
  }
};
