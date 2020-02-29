import React, { Component } from 'react'

class NewQuestions extends Component {

	handleNewQuestion = (e) => {
		e.preventDefault();
		const { optionOne, optionTwo } = e.target;
		this.props.addQuestion({
			optionOneText: optionOne.value,
			optionTwoText: optionTwo.value,
			author: this.props.userId
		});

	}

	render() {
		return (
			<div>
				<form className="form border" onSubmit={this.handleNewQuestion}>
					<fieldset>
						<legend>Would you rather...</legend>

						<label htmlFor="quetion">Option one:</label>
						<input type="text" name="optionOne" />
						<div className="center">OR</div>
						<label htmlFor="quetion">Option two:</label>
						<input type="text" name="optionTwo" />
						<div className="form-footer">
							<button type="submit" className="active">Submit</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}

export default NewQuestions;
