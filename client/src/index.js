import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import SettingsStore from "./store/SettingsStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        settings: new SettingsStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

