import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

  test("renders the Fieldset heading", () => {
    renderComponent();
    expect(screen.getByText("Table Reservation Details:")).toBeInTheDocument();
  });

  test("renders the form fields", () => {
    renderComponent();

    expect(screen.getByLabelText("Date*:")).toBeInTheDocument();
    expect(screen.getByLabelText("Time*:")).toBeInTheDocument();
    expect(screen.getByLabelText("Name*:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email*:")).toBeInTheDocument();
  });

  test("should submit the form", async () => {
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

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

describe("BookingForm Input Field Attributes", () => {
  const availableTimes = ["5:00 PM", "6:00 PM", "7:00 PM"]; // Sample data
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
        availableTimes={availableTimes}
        handleReservationSubmit={() => {}}
        dispatch={mockDispatch}
      />
    );
  };

  test("displays error message when submitting empty form", async () => {
    renderComponent();

    fireEvent.click(screen.getByRole("button", { name: "Reserve Table" }));

    await waitFor(() => {
      expect(screen.getByText("Date is required")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Time is required")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText("No. of Guests must be at least 1")
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });
  });
});
