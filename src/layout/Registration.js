import React from 'react';
import EventInfo from '../components/EventInfo';
import Form from '../components/Form';

const Registration = () => {
  return (
    <div className="regpage">
      <div className="heading">
        Book your seats
      </div>
      <div className="bottom">
        <div className="events">
          <EventInfo />
          <EventInfo />
          <EventInfo />
          <EventInfo />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Registration;
