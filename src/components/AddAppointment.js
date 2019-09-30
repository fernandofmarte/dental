import React, { Component } from 'react';
import InputMoment from 'input-moment';
import moment from 'moment';
import { Modal, Button, Form } from 'react-bootstrap';

class AddAppointment extends Component {
  state = {
    dateTime: moment().add(1, 'hour'),
    duration: 30,
    dentist: 'Smith',
    patient: ''
  };

  onDateChange = newDateTime => {
    this.setState({ newDateTime });
  };

  onDurationChange = e => {
    this.setState({ duration: e.target.value });
  };

  onDentistChange = e => {
    this.setState({ dentist: e.target.value });
  };

  onPatientChange = e => {
    this.setState({ patient: e.target.value });
  };

  onAddAppointment = () => {
    let endTime = moment(this.state.dateTime).add(this.state.duration, 'minutes');

    this.props.onAddAppointment(this.state.dateTime.unix(), endTime.unix(), this.state.dentist, this.state.patient);
    this.props.onClose();
    this.setState({ patient: '' });
  };

  render() {
    let displayTime = this.state.dateTime.format('MMMM Do, YYYY (hh:mm a)');

    return (
      <Modal show={this.props.show} id='add-appointment-model' onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Dentist</Form.Label>
            <Form.Control as='select' onChange={this.onDentistChange} value={this.state.dentist}>
              <option value='Smith'>Dr. Smith</option>
              <option value='Black'>Dr. Black</option>
              <option value='Jackson'>Dr. Jackson</option>
              <option value='Goldberg'>Dr. Goldberg</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Patient</Form.Label>
            <Form.Control type='text' onChange={this.onPatientChange} value={this.state.patient} />
          </Form.Group>
          <InputMoment moment={this.state.dateTime} minStep={1} hourStep={1} onChange={this.onDateChange} />
          <Form.Group>
            <Form.Label>Proposed Time</Form.Label>
            <Form.Control readOnly plaintext value={displayTime} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              as='select'
              onChange={this.onDurationChange}
              className='form-control'
              value={this.state.duration}
            >
              <option value='30'>30 min</option>
              <option value='45'>45 min</option>
              <option value='60'>60 min</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClose}>Cancel</Button>
          <Button onClick={this.onAddAppointment}>Add Appointment</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddAppointment;
