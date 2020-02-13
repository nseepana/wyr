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
			<div>
				<form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
					<fieldset>
						<legend>Select user</legend>
						<div>
							<select className="" value={this.state.value} onChange={this.handleChange}>
								<option value="naresh">Naresh</option>
								<option value="harsha">Harsha</option>
							</select>
						</div>
						<div>
							<button className="" type="submit" disabled={!this.state.value}>Login</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}
