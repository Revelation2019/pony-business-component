import React, { useState, useEffect, useCallback } from 'react';

import { getTodoList } from './api';

interface ITodoListProps {
  /** 获取任务清单id */
  id: string;
}

const TodoList = (props: ITodoListProps) => {

  const { id } = props;

  const [source, setSource] = useState<string[]>([]);

  const getSource = useCallback(async () => {
    if (id) {
      const { code , data} = await getTodoList(id);
      if (code === 200 && !!data) {
        setSource(data);
      }
    }
  }, [])

  useEffect(() => {
    getSource();
  }, [getSource]);

  return (
    <ul>
      {
        source.map((s: string) => <li>{s}</li>)
      }
    </ul>
  )
}


export { TodoList };