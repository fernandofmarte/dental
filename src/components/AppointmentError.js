import React from 'react';
import { Alert } from 'react-bootstrap';

const AppointmentError = props => {
  return <Alert variant='danger'>Error: {props.message}</Alert>;
};

export default AppointmentError;
