// import React from 'react';
import { connect } from 'react-redux'
import Login from '../components/login';
import { selectedUser } from '../redux/actionCreators/userActionThunk'
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ auth }) => {
	let users = auth.users || [];
	if (users) {
		users = Object.keys(users);

	}
	return { users: users };
}

const mapDispatchToProps = dispatch => {
	return {
		selectedUser: bindActionCreators(selectedUser, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
