import React, { Component } from 'react'
// import { navigate } from '@reach/router';
// import { getUsers } from '../../utils/api';

export default class Login extends Component {
	state = {
		userId: ""
	}

	componentDidMount() {
		console.log(this.props)
		// this.props.onUserSelect({});


	}

	handleChange = (event) => {
		// console.log(this.props)
		this.setState({ userId: event.target.value });
	}

	handleLogin = (e) => {
		e.preventDefault();
		let { userId } = this.state;
		if (userId) {
			this.props.onUserSelect(this.props.users[userId]);
			this.props.navigate(`/dashboard`);
		}
	}

	render() {
		const { userId } = this.state;
		const { users, userIds } = this.props;
		const selectedUser = users[userId] || {};
		return (
			<div>
				<form className="pure-form pure-form-stacked" onSubmit={this.handleLogin}>
					<fieldset>
						<legend>Select user</legend>
						<div>
							<div>{userId ? (<img alt="selected user" src={selectedUser.avatarURL} />) : ('')}</div>
							<select className="" value={userId} onChange={this.handleChange}>
								<option key='selectUser' value=''>Select user</option>
								{userIds.map(userId => <option key={userId} value={userId}>{users[userId].name}</option>)}
							</select>
						</div>
						<div>
							<button className="" type="submit" disabled={!userId}>Login</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}

