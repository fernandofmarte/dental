import moment from 'moment';
import uuid from 'uuid';

import { ADD_APPOINTMENT, APPOINTMENT_ERROR } from '../actions/types';

// One default appointment item added as example
const INITIAL_STATE = {
  items: [
    {
      id: uuid.v4(),
      startTime: moment()
        .add('30', 'minutes')
        .unix(),
      endTime: moment()
        .add('60', 'minutes')
        .unix(),
      dentistName: 'Smith',
      patientName: 'Jane Doe'
    }
  ],
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      // add the appointment to the store
      action.payload.id = uuid.v4();
      let items = state.items.slice(0);
      items.push(action.payload);

      return {
        ...state,
        items,
        error: ''
      };
    case APPOINTMENT_ERROR:
      // set the appointment store error
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
