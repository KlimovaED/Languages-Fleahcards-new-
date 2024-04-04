import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WordStore from './stores/WordsStore';
import { Provider } from 'mobx-react';

const stores = { 
  WordStore: new WordStore()};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider { ...stores }>
    <App />
</Provider>
);

reportWebVitals();
