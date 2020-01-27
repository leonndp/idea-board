import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import IdeaBoard from '../components/IdeaBoard'
import LandingPage from '../components/LandingPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<PublicRoute path='/' component={LandingPage} exact={true} />
			<PrivateRoute path='/dashboard' component={IdeaBoard} />
		</Switch>
	</Router>
);

export default AppRouter;