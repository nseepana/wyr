import { Link } from "@reach/router";
// import DataLink from "./DataLink";

import React, { Component } from 'react'

export default class DashHome extends Component {
	componentDidMount() {
		console.log(this.props.location.state);
	}
	render() {
		const { userId } = this.props;
		console.log(userId);
		return (
			<ul className="navbar-nav">
				<li className="nav-item">
					{/* relative url */}
					<Link className="nav-link active" to='home' >Home</Link>
				</li>
				<li className="nav-item">
					{/* relative url */}
					<Link className="nav-link" to='newquestion'>New Question</Link>
				</li>
				<li className="nav-item">
					{/* absolute url */}
					<Link className="nav-link" to='/leadboard'>Leader Board</Link>
				</li>
				<li>
					Hello {userId}
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-pill" to="/">Logout</Link>
				</li>
			</ul>
		);
	}
}


// const DashHome = ({ location, userId }) => {
// 	console.log(userId, location.state);

// }

// export default DashHome;




