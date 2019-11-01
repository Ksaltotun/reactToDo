import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';



const SearchPanel = () => {
  return (
    <input type="search" placeholder="search" />
  )
}

const App = () => {
  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      <AppHeader/>
      <ToDoList/>
      <SearchPanel/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
