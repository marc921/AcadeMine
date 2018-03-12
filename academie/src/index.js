import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/views/nav';
import Home from './components/views/home';
	import WebHome from './components/views/web/home';
	import HTML from './components/views/web/html';
	import CSS from './components/views/web/css';
	import JS from './components/views/web/js/home';
		import ReactPage from './components/views/web/js/react';
import Footer from './components/views/footer';
import './index.css';

// ========================================

ReactDOM.render(
	<div className="container">
		<Nav />
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/web' component={WebHome} />
				<Route exact path='/web/html' component={HTML} />
				<Route exact path='/web/css' component={CSS} />
				<Route exact path='/web/js' component={JS} />
				<Route exact path='/web/js/react' component={ReactPage} />
			</Switch>
		</BrowserRouter>
		<Footer />
  	</div>,
  document.getElementById('root')
);

