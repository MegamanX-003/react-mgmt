import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Brian1',
  'birthday': '1999-01-01',
  'gender': 'Man',
  'job': 'Customer',
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Brian2',
  'birthday': '1999-01-01',
  'gender': 'Man',
  'job': 'Customer',
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'Brian3',
    'birthday': '1999-01-01',
    'gender': 'Man',
    'job': 'Customer',
    },
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
              />
            );
          })
        }
    </div>
    );
  }
}

export default App;
