import React, { Component } from 'react'
// import { navigate } from '@reach/router';
// import { getUsers } from '../../utils/api';

export default class Login extends Component {

	state = {
		userId: ""
	}

	handleChange = (event) => {
		console.log(event.target.value)
		this.setState({ userId: event.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let { userId } = this.state;
		this.props.selectedUser(userId);
		if (userId) {
			this.props.navigate(`/dashboard`);
		}
	}

	render() {
		const { userId } = this.state;
		const alink = `/assets/images/${userId}.jpg`;
		return (
			<div>
				<form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
					<fieldset>
						<legend>Select user</legend>
						<div>
							<div>{userId ? (<img alt="selected user" src={alink} />) : ('')}</div>
							<select className="" value={userId} onChange={this.handleChange}>
								<option key='selectUser' value=''>Select user</option>
								{this.props.users.map(user => <option key={user} value={user}>{user}</option>)}
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

