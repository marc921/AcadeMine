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
import PHP from './components/views/web/php';
import SQL from './components/views/web/sql';
import WebAnnexes from './components/views/web/annexes';
import Java from './components/views/java';
import Unity from './components/views/unity';
import HackingHome from './components/views/hacking/home';
import Others from './components/views/others';
import Contact from './components/views/contact';
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
						<Route exact path='/web/php' component={PHP} />
						<Route exact path='/web/sql' component={SQL} />
						<Route exact path='/web/annexes' component={WebAnnexes} />
					<Route exact path='/java' component={Java} />
					<Route exact path='/unity' component={Unity} />
					<Route exact path='/hacking' component={HackingHome} />
					<Route exact path='/others' component={Others} />
					<Route exact path='/contact' component={Contact} />
			</Switch>
		</BrowserRouter>
		<Footer />
  	</div>,
  document.getElementById('root')
);

