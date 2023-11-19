// import ReactDOM from 'react-dom';
// import App from './app';
// import './index.css';

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )

import { createRoot } from 'react-dom/client';
import App from './app';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
