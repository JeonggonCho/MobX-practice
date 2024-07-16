import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import CounterStore from "./counterStore";

const store = new CounterStore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App counter={store}/>
  </React.StrictMode>
);
