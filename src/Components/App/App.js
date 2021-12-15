import './App.css';
import { months } from '../../months_data';
import React, { Component } from 'react'; 
import Form from '../Form.js'
import Months from '../Months.js'

class App extends Component {
  constructor() {
    super();
      this.state = {
        monthsData: {months},
        birthdays: []
      }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/birthdays')
      .then(response => response.json())
      .then(data => this.setState({ birthdays: data }))
      .catch(err => console.log(err))
  }

  addBirthday = (birthday) => {
    this.setState({ birthdays: [ ...this.state.birthdays, birthday ]})
  }

  render() { 
    return(
    <div className="App">
      <h1>Birthday's</h1>
      <div className='bday-form'>
       <Form addBirthday={this.addBirthday}/>
      </div>
      {this.state.birthdays && <div className='bday-container'>
        <Months months={this.state.monthsData} birthdays={this.state.birthdays}/>
      </div>}
    </div>
    )
  }
}

export default App;
