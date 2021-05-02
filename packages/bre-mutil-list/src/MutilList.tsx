import React from 'react';
import { TodoList } from 'bre-todo-list';

const MutilList = () => {
  return <div>
    <TodoList id="123456"></TodoList>
    <TodoList id="123456"></TodoList>
  </div>
}

export { MutilList };