
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store = {store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree()
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
