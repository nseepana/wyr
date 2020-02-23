import { Link } from "@reach/router";
import i18n from '../i18n';
import React from 'react';
import { connect } from "react-redux";

const MainNav = (props) => {
	return (
		<React.Fragment >
			<ul className="navigation">
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

				<li><div>Hi, {props.name}!</div></li>
				<li><Link to="/login">Logout</Link></li>
			</ul>
		</React.Fragment>
	);
}

export default connect((state) => {
	const { auth: { selectedUser: { name }, hasUserId } } = state;
	return { name, hasUserId }
}, null)(MainNav);






