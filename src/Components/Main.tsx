import React, { useState, useEffect } from "react";
import Event from "./Event";
import events, { handleLocalStorage } from "../data/eventsData";
interface Props {
  updateCount(): void;
}
function Main({ updateCount }: Props) {
  const [meetups, setMeetups] = useState([...events]);
  // const meetups : meetup [] = [...events]
  useEffect(() => {
    const isAvailable = handleLocalStorage.load().length > 0;
    // console.log(isAvailable);
    if (isAvailable) {
      setMeetups(handleLocalStorage.load());
    }
  }, []);

  const handleAttend = (id: number): void => {
    let originalMeetups = [...meetups];
    let index = meetups.findIndex((i) => i.id === id);
    let eventObj = originalMeetups[index];
    eventObj.attend = !eventObj.attend;
    originalMeetups.splice(index, 1, eventObj);
    setMeetups(originalMeetups);
    handleLocalStorage.save(originalMeetups);
    updateCount();
  };

  const handleReview = (id: number, review: string): void => {
    let originalMeetups = [...meetups];
    let index = meetups.findIndex((i) => i.id === id);
    let eventObj = originalMeetups[index];
    eventObj.review = review;
    originalMeetups.splice(index, 1, eventObj);
    setMeetups(originalMeetups);
    handleLocalStorage.save(originalMeetups);
  };

  return (
    <div className="main">
      <h3>Meetups</h3>
      <div className="event-container">
        {meetups.map((event, idx) => {
          return (
            <Event
              key={idx}
              event={event}
              handleAttend={handleAttend}
              handleReview={handleReview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
