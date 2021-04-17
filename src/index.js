import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Lesson12, Lesson3 } from './containers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Router>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <div className="btn">Bài 1 - 2 </div>
          </Link>
          <Link to="/3">
            <div className="btn">Bài 3 </div>
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={Lesson12} />
          <Route path="/3" component={Lesson3} />
        </Switch>
      </Router>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
