import React, { useState } from "react";

interface Props {
  count: number;
  attending: any;
}
function Header({ count, attending }: Props) {
  const [display, setDisplay] = useState("none");
  const handleClick = () => {
    if (count > 0) {
      display === 'none' ? setDisplay("flex") : setDisplay("none");
    }
  };

  return (
    <div className="header">
      <h1>Meetups</h1>
      <button onClick={handleClick}>
        {count ? `Attending: ${count}` : "No events"}
      </button>
      <div className="display-attend" style={{ display: display }}>
        {attending.map((event: any) => {
          return (
            <div key={event.id}>
              <p>{event.name}</p>
              <p>{event.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
