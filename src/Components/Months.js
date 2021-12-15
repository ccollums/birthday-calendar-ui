import React from 'react';
import './Months.css'
import Card from './Card.js'

const Months = ({months, birthdays}) => {
	const monthCards = months.months.map(month => {

		const birthday = birthdays.filter(birthday => {
			return birthday.month === month.id
		})

		return (
		<Card 
			month = {month.name}
			key = {month.id}
			id = {month.id}
			birthday = {birthday}
			/>
		)
	})

	return (
		<div className='months-container'>
			{monthCards}
		</div>
	)
}

export default Months;