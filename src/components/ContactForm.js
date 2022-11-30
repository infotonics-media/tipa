import React, { useState } from "react";
import { useFormik, Field, Form } from "formik";
import Axios from "axios";
import style from "../assets/css/contactfrm.module.css";
function ContactForm({ title }) {
  const [res, setRes] = useState(false);
  const endpoint =
    "https://backend.theindianpoloawards.com/baseApp/contact-us/";
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      pageTitle: title,
      phone: "",
    },
    onSubmit: (value) => {
      Axios.post(endpoint, value).then((res) => setRes(true));
      console.log(value);
    },
  });

  return (
    <div className="App"
    style={{    marginTop: "10%",paddingRight:"5%"}}
    >
      <h1>{title}</h1>
      {res ? (
        <div className={style.thankyou}>
            <h3>Thank you</h3>
            <p>Response submitted sucessfully</p>
            </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className={style.name}>
            <div className={style.phone}>
              <label htmlFor="text">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Enter name"
              />
            </div>
            <div className={style.phon}>
              <label htmlFor="tel">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="Enter Number"
              />
            </div>
          </div>
          <div className={style.restfrm}>
            <div>
              <label htmlFor="email">Email </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
              />
            </div>

            <div>
              <label>Message </label>
              <textarea
                rows="4"
                cols="50"
                id="message"
                name="message"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.textarea}
                placeholder="Message"
              />
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
