import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions';

import { Button } from 'react-bootstrap';

import AppointmentError from './AppointmentError';
import AppointmentList from './AppointmentList';
import AddAppointment from './AddAppointment';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  onAddAppointment = (timeStamp, duration, dentist, patient) => {
    this.props.addAppointment(timeStamp, duration, dentist, patient);
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  renderError = () => {
    if (this.props.appointmentError) {
      return <AppointmentError message={this.props.appointmentError} />;
    }
  };

  render() {
    return (
      <div>
        {this.renderError()}
        <div>
          <Button onClick={this.toggleShow}>Add Appointment</Button>

          <AppointmentList appointments={this.props.appointments} />
        </div>
        <AddAppointment onAddAppointment={this.onAddAppointment} onClose={this.toggleShow} show={this.state.show} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments.items,
    appointmentError: state.appointments.error
  };
};

export default connect(
  mapStateToProps,
  {
    addAppointment
  }
)(Landing);
