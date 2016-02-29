import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Login from './routes/Login/App.js';
import Landing from './routes/Landing/App.js';
import Destinations from './routes/Destinations/App.js';
import Trains from './routes/Trains/App.js';

<<<<<<< 4dd3ab92845a49b8fa3d3836fd6531db06082741
class Root extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="bossMode">
        {this.props.children || <Landing />}
      </div>
    )
  }
}

const routes = ReactDOM.render((

  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Landing} />
      <Route path="/login" component={Login}></Route>
      <Route path="/destinations" component={Destinations}></Route>
      <Route path="/trains" component={Trains}></Route>
    </Route>
  </Router>
=======
import $ from 'jquery';

let routes;

/*
  Browserify causes a bug with onEnter, so we haven't been able
  to get it to work for authentication. This is totally hacked together,
  and should be replaced with a more optimal solution as soon as possible
*/
$.get('/api/loggedin').then((loggedIn) => {
  if (loggedIn) {
    routes = ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={Landing}></Route>
        <Route path="/login" component={Login} ></Route>
        <Route path="/destinations" component={Destinations}></Route>
        <Route path="/trains" component={Trains}></Route>
      </Router>

    ), document.getElementById('app'));
  } else {
    routes = ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={Login}></Route>
        <Route path="/login" component={Login} ></Route>
        <Route path="/destinations" component={Login}></Route>
        <Route path="/trains" component={Login}></Route>
      </Router>

    ), document.getElementById('app'));    
  }
})
>>>>>>> Fix routing and authentication


export default routes;