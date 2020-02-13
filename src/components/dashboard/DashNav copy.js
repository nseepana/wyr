import { Link } from "@reach/router";
import i18n from '../i18n';
import React from 'react';

const DashNav = ({ userId }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					{/* relative url */}
					<Link className="nav-link active" to='home' >{i18n.t('home')}</Link>
				</li>
				<li className="nav-item">
					{/* relative url */}
					<Link className="nav-link" to='newquestion'>{i18n.t('newquestion')}</Link>
				</li>
				<li className="nav-item">
					{/* absolute url */}
					{/* <Link className="nav-link" to='/leadboard'>{i18n.t('leaderboard')}</Link> */}
					{/* relative url */}
					<Link className="nav-link" to='leadboard'>{i18n.t('leaderboard')}</Link>
				</li>
			</ul>
			<span className="navbar-text">Hello {userId}</span>
			<Link className="nav-link nav-pill nav-right" to="/">Logout</Link>
		</nav>
	);
}

export default DashNav;






