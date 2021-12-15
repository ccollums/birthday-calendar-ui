describe('Birthdays Page', () => {

	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('should display a title, form, and birthday cards with peoples birthdays', () => {
		cy.get('h1')
			.contains("Birthday's")
			.get('form')
			.contains('Name')
			.get('form')
			.contains('Month')
			.get('form')
			.contains('Day')
	})

	it('should be able to select name, month, and day inputs and fill them with values', () =>{
		cy.get('input[name="name"]')
			.type('Carly')
			.should('have.value', 'Carly')
			.get('input[name="month"]')
			.type('4')
			.should('have.value', '4')
			.get('input[name="day"]')
			.type('4')
			.should('have.value', '4')
	})

	it('when a user adds a new birthday it should be added to the page', () =>{

	})
})