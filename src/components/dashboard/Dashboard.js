import React, { Component } from 'react';
// import DashHome from './DashHome';
// import { Router } from "@reach/router";

// import Home from "./Home";
// import User from "./User";
// import LeadBoard from "./LeadBoard";
// import NewQuestions from "./NewQuestions";

export default class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		)
	}
}
