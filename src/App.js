import React from 'react';
import './App.css';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';

const App = () => (
    <div className="App">
        <ListPage />
        <CreatePage />
    </div>
);

export default App;
