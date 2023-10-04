import React from "react";
import Wrapper from "../../wrapper/Wrapper";
import "./ConfirmedBooking.scss";

const ConfirmedBooking = ({ confirmationData }) => {
  // Check if confirmationData is null or undefined before accessing its properties

  return (
    <article className="confirmation-page">
      <Wrapper>
        {!confirmationData ? (
          <div className="reservation-error">
            <p>No reservation data available.</p>
          </div>
        ) : (
          <div
            className="reservation-confirmation"
            aria-labelledby="confirmation-header"
          >
            <div className="confirmation-header">
              <h3 id="confirmation-header">Reservation Confirmation</h3>
              <p>
                Thank you for choosing Little Lemon Restaurant. We're excited to
                have you dine with us!
              </p>
            </div>
            <div
              className="confirmation-details"
              aria-labelledby="reservation-info contact-info"
            >
              <div className="reservation-info" id="reservation-info">
                <h4>Your Reservation Details:</h4>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <strong>Name:</strong>
                      </th>
                      <td>{confirmationData.name}</td>
                    </tr>
                    <tr>
                      <th>
                        <strong>Date & Time:</strong>
                      </th>
                      <td>
                        {confirmationData.date} at {confirmationData.time}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <strong>No. of Guests:</strong>
                      </th>
                      <td>{confirmationData.guests}</td>
                    </tr>
                    <tr>
                      <th>
                        <strong>Occasion:</strong>
                      </th>
                      <td>{confirmationData.occasion}</td>
                    </tr>
                    {confirmationData.specialRequests && (
                      <tr>
                        <th>
                          <strong>Special Requests:</strong>
                        </th>
                        <td>{confirmationData.specialRequests}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="contact-info" id="contact-info">
                <h4>Contact Information:</h4>
                <p>
                  An email confirmation has been sent to{" "}
                  <strong>{confirmationData.email}</strong>. If you have any
                  additional requests or need to make changes, please don't
                  hesitate to contact us.
                </p>
              </div>
            </div>
            <p className="closing-message" aria-label="Closing Message">
              We look forward to serving you and creating memorable moments at
              Little Lemon Restaurant. Bon appétit!
            </p>
          </div>
        )}
      </Wrapper>
    </article>
  );
};

export default ConfirmedBooking;
