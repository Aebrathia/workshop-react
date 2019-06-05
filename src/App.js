import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';

const App = () => (
    <div className="App">
        <ul>
            <li>
                <Link to="/view">View rooms</Link>
            </li>
            <li>
                <Link to="/create">Create room</Link>
            </li>
        </ul>
        <Route path="/view" component={ListPage} />
        <Route path="/create" component={CreatePage} />
    </div>
);

export default App;
