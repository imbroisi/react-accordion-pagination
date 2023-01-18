import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log('--_>>> process.env.REACT_APP_MSW', process.env.REACT_APP_MSW);

if (process.env.REACT_APP_MSW === 'YES') {
  console.log('>>>>> inicializando MSW');
  const { worker } = require('./api/mock/browser');
  worker.start();
}

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
