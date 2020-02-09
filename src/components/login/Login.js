import React, { Component } from 'react'
// import { navigate } from '@reach/router';

export default class Login extends Component {

	state = {
		value: "naresh"
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let userId = this.state.value;
		console.log('UserId:', userId);
		if (userId) {
			this.props.navigate(`/dashboard/${userId}`);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<img alt="logo"></img>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="">Select user</option>
					<option value="naresh">Naresh</option>
					<option value="harsha">Harsha</option>
				</select>
				<input type="submit" value="Login" disabled={!this.state.value} />
			</form>
		)
	}
}
