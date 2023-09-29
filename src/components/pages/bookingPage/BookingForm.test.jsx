import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockDispatch = jest.fn();

  const initialData = {
    date: "",
    time: "",
    guests: "0",
    name: "",
    occasion: "None",
    email: "",
    phone: "",
    specialRequests: "",
  };

  const renderComponent = () => {
    return render(
      <BookingForm
        reservationData={initialData}
        setReservationData={() => {}}
        availableTimes={[]}
        handleReservationSubmit={() => {}}
        dispatch={mockDispatch}
      />
    );
  };

  it("renders the Fieldset heading", () => {
    renderComponent();
    expect(screen.getByText("Table Reservation Details:")).toBeInTheDocument();
  });

  it("renders the form fields", () => {
    renderComponent();

    expect(screen.getByLabelText("Date*:")).toBeInTheDocument();
    expect(screen.getByLabelText("Time*:")).toBeInTheDocument();
    expect(screen.getByLabelText("Name*:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email*:")).toBeInTheDocument();
  });

  it("should submit the form", () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText("Date*:"), {
      target: { value: "2023-10-01" },
    });
    fireEvent.change(screen.getByLabelText("Time*:"), {
      target: { value: "5:00 PM" },
    });
    fireEvent.change(screen.getByLabelText("Name*:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*:"), {
      target: { value: "johndoe@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Reserve Table" }));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
