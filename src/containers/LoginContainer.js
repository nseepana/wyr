// import React from 'react';
import { connect } from 'react-redux'
import Login from '../components/login';
import { onUserSelect } from '../redux/actionCreators/userActionThunk'
import { bindActionCreators } from 'redux';

// const mapStateToProps = ({ auth: users = {} }) => ({ users, userIds: Object.keys(users) });
const mapStateToProps = ({ auth }) => {
	const { users = {} } = auth;
	return { users, userIds: Object.keys(users) }
};
const mapDispatchToProps = dispatch => ({ onUserSelect: bindActionCreators(onUserSelect, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
