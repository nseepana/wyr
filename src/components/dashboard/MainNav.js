import { Link, navigate, useMatch } from "@reach/router";
import i18n from '../i18n';
import React from 'react';
import { connect } from "react-redux";

const NavLink = props => (
	<Link {...props} getProps={({ isCurrent }) => {
		return {
			className: (isCurrent) ? 'active-link' : ''
		}
	}}></Link>
)

const MainNav = (props) => {
	const match = useMatch('/');
	if (!props.hasUserId) {
		let pathstate = "";
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
					<NavLink to='home' >{i18n.t('home')}</NavLink>
				</li>
				<li>
					{/* relative url */}
					<NavLink to='add'>{i18n.t('newquestion')}</NavLink>
				</li>
				<li>
					{/* absolute url */}
					{/* <NavLink  to='/leadboard'>{i18n.t('leaderboard')}</NavLink> */}
					{/* relative url */}
					<NavLink to='leadboard'>{i18n.t('leaderboard')}</NavLink>
				</li>

				<li><div className="navprofile">Hi, {props.name}!</div></li>
				<li><NavLink to="/login">Logout</NavLink></li>
			</ul>
		)
	}
}

export default connect((state) => {
	const { auth: { selectedUser: { name } = {}, hasUserId } } = state;
	return { name, hasUserId }
}, null)(MainNav);






