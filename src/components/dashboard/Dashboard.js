import React, { Component } from 'react';
// import DashHome from './DashHome';
// import { Router } from "@reach/router";

// import Home from "./Home";
// import User from "./User";
// import LeadBoard from "./LeadBoard";
// import NewQuestions from "./NewQuestions";

class Dashboard extends Component {
	render() {
		const { children } = this.props;
		return (
			<React.Fragment>
				{children}
			</React.Fragment>
		)
	}
}
export default Dashboard;