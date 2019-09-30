import moment from 'moment';

import { ADD_APPOINTMENT, APPOINTMENT_ERROR } from './types';

export const addAppointment = (startTime, endTime, dentistName, patientName) => {
  return async (dispatch, getState) => {
    dispatch({ type: APPOINTMENT_ERROR, payload: '' });

    try {
      const nameRegex = /^[a-zA-Z ]{2,30}$/;
      if (!nameRegex.test(patientName)) {
        dispatch({
          type: APPOINTMENT_ERROR,
          payload: 'Please add a valid name for the patient.'
        });
        return;
      }

      // check for time in the past
      if (startTime < moment().unix()) {
        dispatch({
          type: APPOINTMENT_ERROR,
          payload: 'Appointment cannot be in the past. Please try again.'
        });
        return;
      }

      // check for a time overlap
      let overlap = false;
      let appointments = getState().appointments;

      appointments.items.forEach(appointment => {
        if (
          ((startTime >= appointment.startTime && startTime <= appointment.endTime) ||
            (endTime >= appointment.startTime && endTime <= appointment.endTime)) &&
          dentistName === appointment.dentistName
        ) {
          overlap = true;
        }
      });

      if (overlap) {
        dispatch({
          type: APPOINTMENT_ERROR,
          payload:
            'You are adding an appointment that has an overlap conflict with your current appointments. Please try again'
        });
      } else {
        let appointment = {
          startTime,
          endTime,
          dentistName,
          patientName
        };

        dispatch({ type: ADD_APPOINTMENT, payload: appointment });
      }
    } catch (error) {
      dispatch({ type: APPOINTMENT_ERROR, payload: 'Error adding appointment. Please try again later.' });
    }
  };
};
