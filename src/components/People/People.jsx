import React, { Component } from 'react';
import Person from './Person';

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  personChanged(i, key, value) {
    console.log('(' + i + ') ' + key + ': ' + value);
    let people = this.state.people;
    people[i][key] = value;

    this.setState({
      people: people
    });

    // Tell the parent component that there's been a change
    this.props.peopleChanged();
  }

  /**
   * Render
   * Use the people data to generate dynamic markup similar to that in the provided example
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
