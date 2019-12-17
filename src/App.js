import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { stat } from 'fs';
import person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'asdft', name: 'Sudhir Belagali', age: 29 },
      { id: 'asdfr', name: 'Mallappa G', age: 34 },
      { id: 'asdfe', name: 'Mahadev I', age: 33 },
      { id: 'asdfw', name: 'Amit', age: 21 },
      { id: 'asdfq', name: 'Chandrakant U', age: 21 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }
  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 29 },
  //       { name: 'Mallappa G', age: 34 },
  //       { name: 'Mahadev I', age: 33 },
  //       { name: 'Amit', age: 21 },
  //       { name: 'Chandrakant U', age: 21 }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';

    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (

      <div className="App">
        <h1>Hi I am React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        <button
          onClick={() => this.togglePersonsHandler()}
          style={style}>Toggle Persons</button>
        {persons}
      </div>


    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work now? '));
  }
}

export default App;