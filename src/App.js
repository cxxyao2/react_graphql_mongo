// react-dom (what we'll use here)
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import graphqlImg from './assets/graphql.png';
import mongoImg from './assets/mongo.png';
import reactImg from './assets/react.png';

import BookList from './components/BookList';
import OneBook from './components/OneBook';
import AddOneBook from './components/AddOneBook';

export default function App() {
  return (
    <Router>
      <div>
        <div className="nav_wrapper">
          <div className="nav_image_wrapper">
            <img src={graphqlImg} alt="graphQL" />
            <img src={mongoImg} alt="mongo" />
            <img src={reactImg} alt="react" />
          </div>
          <ul className="navbar">
            <li className="navbar_item">
              <Link to="/">Home</Link>
            </li>

            <li className="navbar_item">
              <Link to="/book-list">BookList</Link>
            </li>

            <li className="navbar_item">
              <Link to="/one-book">Query One Book</Link>
            </li>

            <li className="navbar_item">
              <Link to="/add-book">Add One Book</Link>
            </li>
          </ul>
        </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/one-book">
            <OneBook id={'60fb61b6d5b7b184eb38204a'} />
          </Route>
          <Route path="/book-list">
            <BookList />
          </Route>

          <Route path="/add-book">
            <AddOneBook />
          </Route>
          <Route path="/garden">
            <div>Garden is beautiful</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>ALL Readers' Home</h2>
    </div>
  );
}
