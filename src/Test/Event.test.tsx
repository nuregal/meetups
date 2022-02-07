import React from "react";
import { render, screen } from "@testing-library/react";
import Event from "../Components/Event";
import { meetup } from "../models/meetup";
import data from "../data/eventsData"

interface Props {
  event: meetup;
  handleReview(): void;
  handleAttend(): void;
}

describe("Event Component", () => {
  it("renders correctly", () => {
    render(
      <Event event={data[0]} handleAttend={() => {}} handleReview={() => {}} />
    );
  });

  it("displays register/unregister button", () => {
    render(<Event event={data[0]} handleAttend={() => {}} handleReview={() => {}}/>);
    const btnElement = screen.getByTestId("registerBtn");
    expect(btnElement).toBeInTheDocument();
  });

  it("displays initially event name", () => {
    render(
      <Event event={data[0]} handleAttend={() => {}} handleReview={() => {}} />
    );
    const element = screen.getByTestId('eventName')
    expect(element).toBeInTheDocument();
  });

  it('displays event date', () => {
      render(<Event event={data[0]} handleAttend={() => {}} handleReview={() => {}} />);
        const dateElement = screen.getByText(/Date/i);
        expect(dateElement).toBeInTheDocument();
  })
  it('displays event time', () => {
      render(<Event event={data[0]} handleAttend={() => {}} handleReview={() => {}}/>);
        const timeElement = screen.getByText(/time/i);
        expect(timeElement).toBeInTheDocument();
  })


});
