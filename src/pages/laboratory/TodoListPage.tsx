import { useTodoList } from "@/hooks/services/queries/useTodoQueries";
import { useState } from "react"
import { css } from "@emotion/react";

interface ITodo {
  id: number;
  content: string;
}

export default function TodoListPage() {
  const [todo, setTodo] = useState();
  const [editable, setEditable] = useState<number>();
  const [editTodo, setEditTodo] = useState();
  const { data, isLoading } = useTodoList();
  
  const handleEditTodo = () => {

  }

  const updateTodo = (id: number) => {

  }

  const clickTodo = (todoId: number) => {
    setEditable(todoId);
    setEditTodo(data?.find(id => id===todoId)?.content)
  }

  const deleteTodo = () => {

  }

  const handleTodo = () => {

  }

  const createTodo = () => {

  }

  return(
    <div>
      {isLoading? 
      (<></>)
      :(<>
        {data.map((todo: ITodo) => (
          <div key={todo.id} >
            {editable === todo.id? 
            (<>
              <input type="text" value={editTodo} onChange={handleEditTodo} />
              <button onClick={() => updateTodo(todo.id)}>확인</button>
            </>)
            :(
              <span onClick={() => clickTodo(todo.id)}>
                {todo.content}
              </span>
            )}
            <button onClick={() => deleteTodo(todo.id)}>x</button>
          </div>
        ))}
      </>)}
      <input onChange={handleTodo} />
      <button onClick={createTodo}>생성</button>
    </div>
  )
}