import React, { Component } from 'react';
import api from './../../api.js';

export default class MemberItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'view',

      firstname: props.member.firstName,
      insertion: props.member.insertion,
      surname: props.member.surname,
      group: props.member.group,
      birthdate: props.member.birthdate
    };
  }

  onEdit() {
    this.setState({ state: 'edit' });
  }

  save() {
    api
      .put(`/members/${this.props.member.id}`, {
        firstname: this.state.firstname,
        insertion: this.state.insertion,
        surname: this.state.surname,
        group: this.state.group,
        birthdate: this.state.birthdate
      })
      .then(response => {
        window.location.reload();
      });
  }

  onSaved() {
    this.setState({ state: 'view' });
    window.reload();
  }

  onChange(item) {
    return event => this.setState({ [item]: event.target.value });
  }

  changeFirstname(event) {
    this.setState({ firstname: event.target.value });
  }

  changeInsertion(event) {
    this.setState({ insertion: event.target.value });
  }

  changeSurname(event) {
    this.setState({ surname: event.target.value });
  }

  changeGroup(event) {
    this.setState({ group: event.target.value });
  }

  changeBirthdate(event) {
    this.setState({ birthdate: event.target.value });
  }

  render() {
    const { member } = this.props;

    if (this.state.state === 'edit') {
      return (
        <li className="d-flex justify-content-between p-2 my-3 bg-white">
          <div className="form-group w-100 px-3">
            <input
              type="text"
              className="form-control my-2"
              id="firstname"
              placeholder="firstname"
              onChange={event => this.changeFirstname(event)}
              value={this.state.firstname}
            />
            <input
              type="text"
              className="form-control my-2"
              id="insertion"
              placeholder="insertion"
              onChange={event => this.changeInsertion(event)}
              value={this.state.insertion}
            />
            <input
              type="text"
              className="form-control my-2"
              id="surname"
              placeholder="surname"
              onChange={event => this.changeSurname(event)}
              value={this.state.surname}
            />
            <input
              type="text"
              className="form-control my-2"
              id="group"
              placeholder="group"
              onChange={event => this.changeGroup(event)}
              value={this.state.group}
            />
            <input
              type="date"
              className="form-control my-2"
              id="birthdate"
              placeholder="dd/mm/yyyy"
              onChange={event => this.changeBirthdate(event)}
              value={this.state.birthdate}
            />
          </div>

          <div>
            <button className="btn" onClick={() => this.save()}>
              Save
            </button>
          </div>
        </li>
      );
    }
    if (this.state.state === 'saving') {
      return (
        <li className="d-flex justify-content-between p-2 my-3 bg-white">
          <strong>Saving...</strong>
        </li>
      );
    }

    return (
      <li className="d-flex justify-content-between p-2 my-3 bg-white">
        <strong className="">{member.fullname}</strong>
        <div>
          <span className="px-3">{member.group}</span>

          <button className="btn" onClick={() => this.onEdit()}>
            Edit
          </button>
        </div>
      </li>
    );
  }
}
