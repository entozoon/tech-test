import './People.css';
import React, { Component } from 'react';
import Person from './Person';

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  /**
   * personChanged
   * When a child <Person> is changed, update the state of all items and notify the parent (App)
   */
  personChanged(i, key, value) {
    // Update the specific entry in the people state array
    let people = this.state.people;
    people[i][key] = value;

    this.setState({
      people: people
    });

    // Tell the parent component about the change
    this.props.peopleChanged();
  }

  addPerson() {
    let people = this.state.people;

    // Add an empty item to the array
    people.push({});

    this.setState({
      people: people
    });

    // No need to notify parent, as it will update anyway when a value is given
  }

  removePerson() {
    let people = this.state.people;

    // Remove the final item
    people.pop();

    this.setState({
      people: people
    });

    // Tell the parent of the change
    this.props.peopleChanged();
  }

  /**
   * Render
   * Use the people data to generate dynamic markup similar to that in the provided example.
   * When a <Person> is changed, the values are received and handled
   */
  render() {
    return (
      <div>
        <h2>People</h2>
        <p>
          These people are stored on the server. When you edit the values, they get saved
          instantaneously.
        </p>

        <table className="people">
          <thead>
            <tr>
              <th>First name</th>
              <th>Surname</th>
            </tr>
          </thead>

          <tbody>
            {this.state.people.map((person, i) =>
              <Person
                key={i}
                person={person}
                changeOccurred={this.personChanged.bind(this)}
                change={(key, value) => {
                  this.personChanged(i, key, value);
                }}
              />
            )}
          </tbody>
        </table>

        <a onClick={this.addPerson.bind(this)} className="btn btn--add">
          Add Person
        </a>

        <a onClick={this.removePerson.bind(this)} className="btn btn--remove">
          Remove Person
        </a>
      </div>
    );
  }
}
