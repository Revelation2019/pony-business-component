import React, { SFC, useCallback, useEffect, useState } from 'react';
// import { Playground, Props, useComponentProps } from "docz";
import { getTodoList } from './api';

interface TodoListProps {
  id: string;
}


const TodoList: SFC<TodoListProps> = (props: TodoListProps) => {
  // console.log(useComponentProps({componentName: 'TodoList', fileName: '/packages/business-todo-list/src/TodoList.tsx'}))

  const [source, setSource] = useState<string[]>([]);

  const init = useCallback(async () => {
    const { id } = props;
    if (id) {
      const { code , data} = await getTodoList(id);
      if (code === 200 && !!data) {
        setSource(data);
      }
    }
  }, [])

  useEffect(() => {
    init();
  }, []);

  return (
    <ul>
      {
        source.map((s: string, index: number) => <li key={index}>{s}</li>)
      }
    </ul>
  )
}

export { TodoList };