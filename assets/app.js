import React from 'react';
import ReactDOM from 'react-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CustomersPage from './components/CustomersPage';

const App = () => {
    return (
    <HashRouter>
        <Navbar />
        <main className="contrainer pt5">
            <Switch>
            <Route path="/customers" component={CustomersPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </main>
    </HashRouter>
    );
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
