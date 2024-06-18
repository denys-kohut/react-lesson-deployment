import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App/App';
import { App2 } from './components/App2';
import { Theme } from './constants';
import { UserList } from './components/UserList';

import './index.css';

const disclaimerText = [
  {text: "Attention, we have a discount", id:123,},
  {text: "Stay with us and receive even more", id:124,},
  {text: "Lorem", id:125,},
  {text: "Lorem5", id:126,},
  {text: "Lorem4", id:127,}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App2 />
  // <React.StrictMode>
    <App
      disclaimerText={disclaimerText}
      title="title"
      theme={Theme.light} 
      goods={[
        {name: "name1", price: 10},
        {name: "name2", price: 11}
      ]}
    />
  // </React.StrictMode>
  // <UserList url="https://jsonplaceholder.typicode.com/users"/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
