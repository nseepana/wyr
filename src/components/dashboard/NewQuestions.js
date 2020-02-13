import React, { Component } from 'react'

export default class NewQuestions extends Component {
	render() {
		return (
			<div>
				<p>Complete the question</p>
				<form className="form">
					<fieldset>
						<legend>Create new question:</legend>
						<p>Would you rather ...</p>
						<label htmlFor="quetion">Option one:</label>
						<input type="text" />
						<p>OR</p>
						<label htmlFor="quetion">Option two:</label>
						<input type="text" />
						<div className="form-footer">
							<button type="submit">Submit</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}
