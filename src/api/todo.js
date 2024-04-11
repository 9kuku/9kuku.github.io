import { apiClient } from "./client";

export const getTodoApi = async () => {
  return apiClient.get("/api/v1/todos");
};

export const createTodoApi = async (todo) => {
  return apiClient.post("/api/v1/todos", { todo });
};

export const updateTodoApi = async (id, todo, isCompleted) => {
  return apiClient.put(`/api/v1/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async (id) => {
  return apiClient.delete(`/api/v1/todos/${id}`);
};
