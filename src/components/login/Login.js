import React, { Component } from 'react'

export default class Login extends Component {
	state = {
		userId: "",
		redirectTo: "/dashboard"
	}

	componentDidMount() {
		if (this.props) {
			if (this.props.location.state.redirectedFrom) {
				this.setState({ 'redirectTo': this.props.location.state.redirectedFrom });
			}
		}

	}

	handleChange = (event) => {
		this.setState({ userId: event.target.value });
	}

	handleLogin = (e) => {
		e.preventDefault();
		let { userId } = this.state;
		if (userId) {
			this.props.onUserSelect(this.props.users[userId]);
			this.props.navigate(this.state.redirectTo);
		}
	}

	render() {
		const { userId } = this.state;
		const { users, userIds } = this.props;
		const selectedUser = users[userId] || {};
		return (
			<div className="login-container">
				<form className="pure-form pure-form-stacked" onSubmit={this.handleLogin}>
					<fieldset>
						<legend>
							<div><h1>Would You Rather</h1>
								<div className="center">Welcome, Signin to continue.</div></div>
						</legend>
						<div className="login-group">
							<div>{userId ? (<img alt="selected user" src={selectedUser.avatarURL} />) : ('')}</div>
							<select className="" value={userId} onChange={this.handleChange}>
								<option key='selectUser' value=''>Select user</option>
								{userIds.map(userId => <option key={userId} value={userId}>{users[userId].name}</option>)}
							</select>
						</div>
						<div className="login-footer">
							<button className="active" type="submit" disabled={!userId}>Signin</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}

