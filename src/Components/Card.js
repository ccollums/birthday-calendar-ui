import React from 'react';
import './Card.css'

const Card = ({month, id, birthday}) => {
	return (
		<div className='card'>
			<h2 className='month'>{month}</h2>
			{birthday.length === 0 && <h3 className='no-birthday'>No Birthdays this Month</h3>}
			{{birthday} && <section className='each-birthday'>
				{birthday.map(person => (<h3 key={person.id}>{person.name}: {person.month}/{person.day}</h3>))}
			</section>}
		</div>
	)
}



export default Card; 