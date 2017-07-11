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

  /**
   * Render
   * Use the people data to generate dynamic markup similar to that in the provided example.
   * When a <Person> is changed, the values are received and handled
   */
  render() {
    return (
      <div>
        <h2>People</h2>
        <table className="People">
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
      </div>
    );
  }
}
