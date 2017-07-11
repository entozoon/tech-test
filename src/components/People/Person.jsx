import React, { Component } from 'react';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = props.person;
  }

  // /**
  //  * Change a specific state by given key value pair
  //  * @param  {string} key   Any key such as 'firstname'
  //  * @param  {any}    value
  //  * @return null
  //  */
  // changeValue(key, value) {
  //   this.setState({ [key]: value });
  //
  //   // Tell the parent component about this update
  //   this.props.changeOccurred(this);
  // }

  render() {
    return (
      <tr className="Person">
        <td>
          <input
            type="text"
            value={this.state.firstname}
            onChange={event => this.props.change('firstname', event.target.value)}
          />
        </td>

        <td>
          <input
            type="text"
            value={this.state.surname}
            onChange={event => this.props.change('surname', event.target.value)}
          />
        </td>
      </tr>
    );
  }
}
