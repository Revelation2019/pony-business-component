import React, { useCallback, useEffect, useState } from 'react';
import { getTodoList } from './api';

interface TodoListProps {
  id: string;
}


const TodoList = (props: TodoListProps) => {
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