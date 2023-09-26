import React, { useState } from "react";
import Wrapper from "../../wrapper/Wrapper";
import "./ResTableSection.scss";
import Button from "../../elements/button/Button";

const ResTableSection = () => {
  const [reservationData, setReservationData] = useState({
    dateTime: "",
    guests: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [isReservationConfirmed, seIsReservationConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(seIsReservationConfirmed((preVal) => preVal));
  };

  return (
    <section className="res-table-section">
      <Wrapper>
        <div className="reservation-page">
          <div className="reservation-title">
            <h2>Table Reservation</h2>
            <h4>We are looking forward to serving you</h4>
          </div>
          {isReservationConfirmed ? (
            <div className="confirmation-message"></div>
          ) : (
            <form className="reservation-form" onSubmit={handleSubmit}>
              <fieldset className="table-details-fieldset">
                <legend>Table details:</legend>
                <div className="table-forms">
                  <div className="form-field">
                    <label>Date and Time:</label>
                    <input
                      className="form-field"
                      type="datetime-local"
                      value={reservationData.dateTime}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          dateTime: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>No. of Guests:</label>
                    <input
                      className="form-field"
                      type="number"
                      value={reservationData.guests}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          guests: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="user-details-fieldset">
                <legend>User details:</legend>
                <div className="user-form">
                  <div className="form-field">
                    <label>First Name:</label>
                    <input
                      className="form-field"
                      type="text"
                      value={reservationData.firstName}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          firstName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Last Name:</label>
                    <input
                      className="form-field"
                      type="text"
                      value={reservationData.lastName}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-field">
                    <label>Email:</label>
                    <input
                      className="form-field"
                      type="email"
                      value={reservationData.email}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone:</label>
                    <input
                      className="form-field"
                      type="tel"
                      value={reservationData.phone}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-field form-textarea">
                    <label>Special Requests:</label>
                    <textarea
                      className="form-field form-textarea"
                      value={reservationData.specialRequests}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          specialRequests: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
              </fieldset>
              <div className="form-fields">
                <Button text="Reserve Table" />
              </div>
            </form>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default ResTableSection;
