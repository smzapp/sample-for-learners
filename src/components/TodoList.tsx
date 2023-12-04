import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from '../slices/todoSlice';
import { RootState } from '../store';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state: RootState) => state.todo.data);

  useEffect(() => {
    function initialize(){
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        dispatch(setTodo(json));
      })
    }
    initialize();
  }, []);
  
  return (
    <div>
      <table>
        <tbody>
          {
            todoData?.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{ todo.id } </td>
                  <td>{ todo.title } </td>
                  <td>{ todo.completed } </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
