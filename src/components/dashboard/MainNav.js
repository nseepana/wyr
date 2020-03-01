import { Link, navigate, useMatch } from "@reach/router";
import i18n from '../i18n';
import React from 'react';
import { connect } from "react-redux";

// import { createHistory, LocationProvider } from "@reach/router";

// let history = createHistory(window);


const MainNav = (props) => {
	const match = useMatch('/');
	if (!props.hasUserId) {
		let pathstate = ""

		if (!match) {
			pathstate = { state: { redirectedFrom: props.location.pathname } };
			navigate('/login', pathstate);
		} else {
			navigate('/login');
		}

		return null;
	} else {
		// navigate(-1);
		return (
			<ul className="navigation">
				<li className="brand">Would You Rather</li>
				<li>
					{/* relative url */}
					<Link to='home' >{i18n.t('home')}</Link>
				</li>
				<li>
					{/* relative url */}
					<Link to='newquestion'>{i18n.t('newquestion')}</Link>
				</li>
				<li>
					{/* absolute url */}
					{/* <Link  to='/leadboard'>{i18n.t('leaderboard')}</Link> */}
					{/* relative url */}
					<Link to='leadboard'>{i18n.t('leaderboard')}</Link>
				</li>

				<li><div className="navprofile">Hi, {props.name}!</div></li>
				<li><Link to="/login">Logout</Link></li>
			</ul>
		)
	}


}

export default connect((state) => {
	const { auth: { selectedUser: { name } = {}, hasUserId } } = state;
	return { name, hasUserId }
}, null)(MainNav);






