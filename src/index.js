import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div>
    <h1>My ToDo List</h1>
    <input type="search" placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Create Awesome App</li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
