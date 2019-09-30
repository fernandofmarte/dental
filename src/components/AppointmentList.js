import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';

class AppointmentList extends Component {
  renderAppointment = appointment => {
    let startTime = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
    let endTime = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');
    let dentistName = `Dr. ${appointment.dentistName}`;

    return (
      <ListGroup.Item key={appointment.id}>
        <strong>Doctor: </strong>
        <span>{dentistName}</span>
        <span> - </span>
        <strong>Patient: </strong>
        <span>{appointment.patientName}</span>
        <span> - </span>
        <strong>Start Time: </strong>
        <span>{startTime}</span>
        <span> - </span>
        <strong>End Time: </strong>
        <span>{endTime}</span>
      </ListGroup.Item>
    );
  };

  render() {
    return (
      <Card>
        <Card.Header>Appointments</Card.Header>
        <ListGroup>{this.props.appointments.map(this.renderAppointment)}</ListGroup>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(AppointmentList);
