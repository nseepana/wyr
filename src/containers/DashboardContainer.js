// import React from 'react';
import { connect } from 'react-redux'
import Dashboard from '../components/dashboard';
import { onLogout } from '../redux/actionCreators/userActionThunk';



const mapStateToProps = ({ auth: { user = {}, hasUser = null } }) => (
	(hasUser) ? ({ user, hasUser }) : ({})
);

export default connect(mapStateToProps, { onLogout })(Dashboard)
