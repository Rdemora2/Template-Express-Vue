import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/tasks';

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(BASE_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const getTasks = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`, {
      params: {
        userId: userId,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar tarefas');
  }
};

export const getTaskById = async (taskId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching task by ID:', error);
    throw error;
  }
};

export const getTasksByStatus = async (status) => {
  try {
    const response = await axios.get(`${BASE_URL}/status/${status}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks by status:', error);
    throw error;
  }
};

export const editTask = async (taskId, taskData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error editing task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId, token) => {
  try {
    await axios.delete(`${BASE_URL}/${taskId}`, { data: { token } });
    // Assuming the server returns a status 201 on successful deletion
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
