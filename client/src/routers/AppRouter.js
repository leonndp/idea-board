import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import IdeaBoard from '../components/IdeaBoard'
import LandingPage from '../components/LandingPage'

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path='/' component={LandingPage} exact={true} />
				<Route path='/dashboard' component={IdeaBoard} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;