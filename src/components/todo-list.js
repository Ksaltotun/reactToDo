import React from 'react';
import ToDoListItem from './todo-list-item'

const ToDoList = () => {
    const items = ['Learn React', 'Awesom React'];
    return (
      <ul>
      <li><ToDoListItem/></li>
      <li>{ items[[1]] }</li>
      </ul>
    )
  }

export default ToDoList;