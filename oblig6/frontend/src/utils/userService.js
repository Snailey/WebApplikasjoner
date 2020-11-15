import http from './http';

export const signin = async (data) => {
  try {
    return await http.post(`/users/login`, data);
  } catch (err) {
    return err.response.data;
  }
};

export const register = async (data) => {
  try {
    return await http.post(`/users/create`, data);
  } catch (err) {
    return err.response.data;
  }
};

export const update = async (id, data) => {
  try {
    return await http.post(`/users/create/${id}`, data);
  } catch (err) {
    return err.response.data;
  }
};
