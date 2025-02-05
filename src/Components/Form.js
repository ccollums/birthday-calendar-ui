import './Form.css'
import React, {Component} from 'react';

class Form extends Component {
	constructor() {
		super();
			this.state = {
				name: '',
				month: '',
				day: '',
			}
	}

	handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

	submitBirthday = event => {
		event.preventDefault()
		const newBirthday = {
			id: Date.now(),
			name: this.state.name,
			month: Number(this.state.month),
			day: Number(this.state.day),
		}
		this.props.addBirthday(newBirthday)
		this.clearInputs()
	}

	clearInputs = () => {
		this.setState({ name: '', month: '', day: ''})
	}

	render() {
		return (
			<form>
				<section className='form-name'>
					<label>Name:</label>
					<input
						type='text'
						name='name'
						value={this.state.name}
						onChange={event => this.handleChange(event)}
					/>
				</section>
				<section className='form-month'>
					<label>Month:</label>
					<input
						type='text'
						name='month'
						value={this.state.month}
						onChange={event => this.handleChange(event)}
					/>
				</section>
				<section className='form-day'>
					<label>Day:</label>
					<input
						type='text'
						name='day'
						value={this.state.day}
						onChange={event => this.handleChange(event)}
					/>
				</section>
				<button onClick={event => this.submitBirthday(event)}>Add this Birthday!</button>
			</form>
		)
	}
}

export default Form;