import React, { Component } from 'react'


class QuestionCard extends Component {

	state = {
		answer: ""
	}
	handleChange = (event) => {
		this.setState({ answer: event.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let { question, selectedUserId } = this.props;
		if (selectedUserId) {
			this.props.updateQuestion({
				answer: this.state.answer,
				authedUser: selectedUserId,
				qid: question.id
			}).then((response) => {
				this.props.notify(response);
			})
		}
	}

	render() {
		const { question: { optionOne = {}, optionTwo = {} } = {}, user = {} } = this.props;
		return (
			<div className="card">
				<div className="card-header">{user.name}</div>
				<div className="card-profile">
					<img src={user.avatarURL} alt="prof"></img>
				</div>
				<div className="card-details">
					<form onSubmit={this.handleSubmit}>
						<fieldset>
							<legend><span>Would You Rather</span></legend>
							<div className="field-radiobutton">
								<input type="radio" onChange={this.handleChange} value="optionOne" name="option" id="optionOne" />
								<label htmlFor="optionOne">{optionOne.text}</label>
							</div>
							<div className="field-radiobutton">
								<input type="radio" onChange={this.handleChange} value="optionTwo" name="option" id="optionTwo" />
								<label htmlFor="optionTwo">{optionTwo.text}</label>
							</div>
						</fieldset>
						<div className="card-details-footer">
							<button type="submit" className="active">Submit</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default QuestionCard;