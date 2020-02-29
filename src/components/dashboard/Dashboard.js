import React, { Component } from 'react';


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