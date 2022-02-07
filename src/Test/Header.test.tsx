import React from "react";
import { render,screen } from "@testing-library/react";
import Header from "../Components/Header";

interface Props {
  count: number;
  attending: any;
}

describe("Header component", () => {
  it("renders without crashing", () => {
    render(<Header count={0} attending={[]} />);
  });

  it('displays brand name', () => {
        render(<Header count={1} attending={[]} />);
        const linkElement = screen.getByText(/Meetups/i);
        expect(linkElement).toBeInTheDocument();
  })
  
  it('displays no events when events are not registered', () => {
      render(<Header count={0} attending={[]} />);
      const btnElement = screen.getByText(/No events/i);
      expect(btnElement).toBeInTheDocument();
  })
});
