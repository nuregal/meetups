import React, { useState } from "react";
import { meetup } from "../models/meetup";

interface Props {
  event: meetup;
  handleAttend(arg: number): void;
  handleReview(id: number, review: string): void;
}

function Event({ event, handleAttend, handleReview }: Props) {
  const [review, setReview] = useState("");

  return (
    <div className="event">
      <h2 data-testid="eventName">{event.name}</h2>

      <p>Date: {event.date}</p>
      <p>time: {event.time}</p>
      {event.review && <p>your review: {event.review}</p>}
      {event.attend && (
        <div>
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write a review"
          />
          <button onClick={() => handleReview(event.id, review)}>Send</button>
        </div>
      )}
      <button data-testid="registerBtn" onClick={() => handleAttend(event.id)}>
        {event.attend ? "going" : "register"}
      </button>
    </div>
  );
}

export default Event;
