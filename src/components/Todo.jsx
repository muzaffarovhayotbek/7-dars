import React from 'react';
import './Todo.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function handleAddTodo() {
  return axios.post('https://jsonplaceholder.typicode.com/todos');
}

function Todo() {
  function getTodos() {
    return axios.get(' https://jsonplaceholder.typicode.com/todos');
  }
  const { data, isError, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  console.log(19, data?.data);

  return (
    <div>
      <div className="container">
        <form className="form">
          <input type="text" placeholder="Enter todo" />
          <button onClick={handleAddTodo}>todo add</button>
        </form>
        {/* {isLoading && <p>Yuklanmoqda</p>}
        {isError && <p>Hatolik yuz berdi!</p>}
        {data.data && (
          <ul>
            {data.data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )} */}
        {
          data && data.map((todo, index) => {
            <li key={index}>{todo}</li>
          })
        }
      </div>
    </div>
  );
}

export default Todo;
