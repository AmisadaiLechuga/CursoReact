import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
//import { FirstApp } from './FirstApp';
//import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';

 //< FirstApp title="Hola, soy Goku" />

ReactDOM.createRoot( document.getElementById('root') ).render(
        <React.StrictMode>
           
            < CounterApp value={ 20 } />
        </React.StrictMode>
    );
