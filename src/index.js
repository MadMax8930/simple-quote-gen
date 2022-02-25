import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// install latest version so it works
//npm install react@rc react-dom@rc
 
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

if(import.meta.hot){
  import.meta.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
