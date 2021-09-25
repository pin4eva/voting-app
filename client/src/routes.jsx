import React from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import FrontLayout from "./layouts/FrontLayout";
import HomePage from "./pages";
import AdminPage from "./pages/dashboard/admin";
import LogIn from "./pages/LogIn";

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuth,
	locked,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (locked) {
					if (isAuth) {
						return (
							<Layout>
								<Component {...props} />
							</Layout>
						);
					} else {
						return <Redirect to="/" exact />;
					}
				} else {
					return (
						<Layout>
							<Component {...props} />
						</Layout>
					);
				}
			}}
		/>
	);
};

const Routes = ({ isAuth }) => {
	return (
		<Router>
			<Switch>
				<AppRoute
					layout={FrontLayout}
					locked={false}
					component={HomePage}
					path="/"
					exact
				/>
				<AppRoute
					layout={FrontLayout}
					locked={false}
					component={LogIn}
					path="/login"
				/>
				<AppRoute
					layout={DashboardLayout}
					locked={true}
					isAuth={isAuth}
					component={AdminPage}
					path="/admin"
				/>
			</Switch>
		</Router>
	);
};

export default Routes;
