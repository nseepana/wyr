import { Link } from "@reach/router";
import i18n from '../i18n';
import React from 'react';

const MainNav = ({ userId }) => {
	return (
		<React.Fragment >
			<ul className="left">
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
			</ul>
			<ul className="right">
				<li>Hi, {userId}!</li>
				<li><Link to="/login">Logout</Link></li>
			</ul>
		</React.Fragment>
	);
}

export default MainNav;






