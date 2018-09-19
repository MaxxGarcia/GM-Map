import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "riddl-js";
import { BrowserRouter } from 'react-router-dom';

const globalState = {
    
}

ReactDOM.render(
<Provider globalState={globalState}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
