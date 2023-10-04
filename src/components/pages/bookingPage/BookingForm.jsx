import React from "react";
import Button from "../../elements/button/Button";
import "./BookingForm.scss";
import { fetchAPI } from "../../../api/api";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = ({
  reservationData,
  setReservationData,
  availableTimes,
  handleReservationSubmit,
  dispatch,
}) => {
  const handleOnChange = async (e, fieldName) => {
    const { value } = e.target;

    if (fieldName === "date") {
      const selectedDate = new Date(value);
      const times = await fetchAPI(selectedDate);
      dispatch({ type: "updateTimes", date: selectedDate, times });
    }

    setReservationData({
      ...reservationData,
      [fieldName]: value,
    });
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "No. of Guests must be at least 1")
      .required("No. of Guests is required"),
    occasion: Yup.string(),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string(),
    specialRequests: Yup.string(),
  });

  return (
    <div className="booking-form-container">
      <Formik
        initialValues={{
          date: "",
          time: "",
          guests: "0",
          name: "",
          occasion: "None",
          email: "",
          phone: "",
          specialRequests: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleReservationSubmit}
      >
        {({ isSubmitting, handleChange, values, isValid }) => (
          <Form className="reservation-form">
            <fieldset className="table-details-fieldset">
              <legend>Table Reservation Details:</legend>
              <div className="table-forms">
                <div className="form-field">
                  <label htmlFor="res-date">
                    Date<span className="required-asterisk">*</span>:
                  </label>
                  <Field
                    as="input"
                    className={`form-field ${
                      values.date && !isSubmitting ? "valid" : "invalid"
                    }`}
                    type="date"
                    id="res-date"
                    name="date"
                    aria-required="true"
                    aria-label="Date"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChange(e, "date");
                    }}
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="res-time">
                    Time<span className="required-asterisk">*</span>:
                  </label>
                  <Field
                    as="select"
                    className={`form-field ${
                      values.time && !isSubmitting ? "valid" : "invalid"
                    }`}
                    id="res-time"
                    name="time"
                    aria-required="true"
                    aria-label="Time"
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChange(e, "time");
                    }}
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="res-guests">
                    No. of Guests<span className="required-asterisk">*</span>:
                  </label>
                  <Field
                    as="input"
                    className={`form-field ${
                      values.guests && !isSubmitting ? "valid" : "invalid"
                    }`}
                    type="number"
                    id="res-guests"
                    name="guests"
                    aria-required="true"
                    aria-label="Number of Guests"
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChange(e, "guests");
                    }}
                  />
                  <ErrorMessage
                    name="guests"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="res-occasion">Occasion:</label>
                  <Field
                    as="select"
                    className="form-field"
                    id="res-occasion"
                    name="occasion"
                    aria-label="Occasion"
                    onChange={handleChange}
                  >
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                  </Field>
                </div>
              </div>
            </fieldset>

            <fieldset className="user-details-fieldset">
              <legend>Your Details:{isSubmitting}</legend>
              <div className="user-form">
                <div className="form-field name">
                  <label htmlFor="res-name">
                    Name<span className="required-asterisk">*</span>:
                  </label>
                  <Field
                    as="input"
                    className={`form-field ${
                      values.name && !isSubmitting ? "valid" : "invalid"
                    }`}
                    type="text"
                    id="res-name"
                    name="name"
                    aria-required="true"
                    aria-label="Name"
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChange(e, "name");
                    }}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-field email">
                  <label htmlFor="res-email">
                    Email<span className="required-asterisk">*</span>:
                  </label>
                  <Field
                    as="input"
                    className={`form-field ${
                      values.email && !isSubmitting ? "valid" : "invalid"
                    }`}
                    type="email"
                    id="res-email"
                    name="email"
                    aria-required="true"
                    aria-label="Email"
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChange(e, "email");
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-field phone">
                  <label htmlFor="res-phone">Phone:</label>
                  <Field
                    as="input"
                    className={`form-field ${
                      values.phone && !isSubmitting ? "valid" : "invalid"
                    }`}
                    type="tel"
                    id="res-phone"
                    name="phone"
                    aria-label="Phone"
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChange(e, "phone");
                    }}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-field form-textarea specialRequest">
                  <label htmlFor="res-special-request">Special Requests:</label>
                  <Field
                    as="textarea"
                    className={`form-field ${
                      values.specialRequests && !isSubmitting
                        ? "valid"
                        : "invalid"
                    }`}
                    id="res-special-request"
                    name="specialRequests"
                    aria-label="Special Requests"
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChange(e, "specialRequests");
                    }}
                  />
                  <ErrorMessage
                    name="specialRequests"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
            </fieldset>
            <div className="form-fields-button">
              <Button
                text="Reserve Table"
                disabled={!isValid || isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
