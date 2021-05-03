import axios from 'axios';

export const getTodoList = (id: string) => {
  return axios.get(`/mock/16430/todolist/${id}`).then(res => res.data)
}