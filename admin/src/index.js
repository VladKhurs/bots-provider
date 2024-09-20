import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const Context = createContext(null)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
