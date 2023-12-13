import React, { useState } from "react";
import Axios from "axios";

const ENDPOINT = "https://backend.theindianpoloawards.com/event-registration/";

const Form = () => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState(initialState);
  const [formStatus, setFormStatus] = useState(false);
  const validateEmail = (email) => {
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    return re.test(email.toLowerCase());
  };
  const checknum = (num) => {
    const re = /^[-+]?\d+$/;
    return re.test(num) && num.length === 10;
  };
  const submitHandler = () => {
    setLoading(true);
    if (
      validateEmail(formdata.email) &&
      checknum(formdata.phone) &&
      formdata.name.length >= 1
    ) {
      console.log("submitted");
      Axios.post(ENDPOINT, formdata)
        .then((_) => {
          setLoading(false);
          setFormdata(initialState);
          setFormStatus(true);
        })
        .catch((err) => {
          console.log(err);
          setFormStatus('Contact to admin');
          setLoading(false);
        });
    } else if ( validateEmail(formdata.email) === false ){
      alert("Check Email id ")
      setLoading(false);

    } else if (checknum(formdata.phone) === false) {
      alert("Check  Phone number")
      setLoading(false);
    }
     else {
      alert("Please! check the details you just entered");
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="head">Event Registration form</div>

      {formStatus ? (
        <div className="submessage">
          Thank you! Your submission has been received!
        </div>
      ) : (
        <>
          <div className="top">
            <div className="name">
              <div className="label">Name</div>
              <input
                type="text"
                onChange={(e) =>
                  setFormdata({ ...formdata, name: e.target.value })
                }
                placeholder="Enter name"
                value={formdata.name}
                required
              />
            </div>
            <div className="phone">
              <div className="label">Phone</div>
              <input
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  setFormdata({ ...formdata, phone: e.target.value })
                }
                value={formdata.phone}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="email">
            <div className="label">Email</div>
            <input
              type="text"
              placeholder="Enter email"
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              value={formdata.email}
            />
          </div>
          <div className="message">
            <div className="label">Message(Optional)</div>
            <textarea
              placeholder="Enter Message"
              onChange={(e) =>
                setFormdata({ ...formdata, message: e.target.value })
              }
              value={formdata.message}
            ></textarea>
          </div>
          <button onClick={submitHandler} className="submit">
            {loading ? <div className="loader inform"></div> : "Submit"}
          </button>
        </>
      )}
    </React.Fragment>
  );
};

export default Form;
