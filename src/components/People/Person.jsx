import React, { Component } from 'react';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = props.person;
  }

  /**
   * Create <input> elements which, when changed, pass their keys and values to parent (People)
   */
  render() {
    return (
      <tr className="Person">
        <td>
          <div className="form-group">
            <input
              type="text"
              value={this.state.firstname}
              onChange={event => this.props.change('firstname', event.target.value)}
            />
            <i />
          </div>
        </td>

        <td>
          <div className="form-group">
            <input
              type="text"
              value={this.state.surname}
              onChange={event => this.props.change('surname', event.target.value)}
            />
            <i />
          </div>
        </td>
      </tr>
    );
  }
}
