import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Reservations from "./components/Reservations";


describe("Reservations", () => {
  test("Testing if the values are being submittted", ()=>{
  const name = "Henry";
  const lastName = "Castillo";
  const email = "abc@example.com";
  const telephone = "(954) 225-3087";
  const date = "04-01-2023";
  const time = "04:00 PM";
  const guest = "5";
  const seat = "Indoor";
  const ocasion = "Birthday";
  const handleSubmit = jest.fn();

  if (!window.IntersectionObserver) return

  // Render the component
  render(
    <Reservations onSubmit={handleSubmit} />
     
  );

  // Fill in the form fields
  const firstName = screen.getByLabelText(/First Name/);
  fireEvent.change(firstName, { target: { value: name } });

  const lName = screen.getByLabelText(/Last Name/);
  fireEvent.change(lName, { target: { value: lastName } });

  const emailTest = screen.getByLabelText(/Email/);
  fireEvent.change(emailTest, { target: { value: email } });

  const phone = screen.getByTestId("phone-component");
  fireEvent.change(phone, { target: { value: telephone } });

  const dateTest = screen.getByTestId("date-component");
  fireEvent.change(dateTest, { target: { value: date } });

  const timeTest = screen.getByTestId("time-component");
  fireEvent.change(timeTest, { target: { value: time } });

  const guestTest = screen.getByTestId("guest-component");
  fireEvent.change(guestTest, { target: { value: guest } });

  const seatTest = screen.getByTestId("seat-component");
  fireEvent.change(seatTest, { target: { value: seat } });

  const ocasionTest = screen.getByTestId("ocasion-component");
  fireEvent.change(ocasionTest, { target: { value: ocasion } });

  const submitButton = screen.getByRole("button", { name: /Submit/ });
  fireEvent.click(submitButton);

  

  expect(handleSubmit).toHaveBeenCalledWith({
    name,
    lastName,
    email,
    guest,
    ocasion: ocasion,
    phone:telephone,
    seat: seat,
    date: date,
    time: time
  });
});
})
