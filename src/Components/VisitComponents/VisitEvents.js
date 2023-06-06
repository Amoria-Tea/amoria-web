import React, { useState } from "react";
import events from "data/events";

const formatDate = (eventStart, eventEnd) => {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/New_York",
  };

  const start = eventStart.toLocaleString("en-US", options);
  const end = eventEnd.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/New_York",
  });

  return `${start}-${end}`;
};

const openMap = (address) => {
  window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`);
};

const VisitEvents = () => {
  const [currDate] = useState(new Date());

  return (
    <div className="p-20">
      <h3 className="text-2xl font-bold">Upcoming Events!</h3>
      <ul className="mt-10 flex flex-col gap-10">
        {events.map((event) => {
          if (event.date.getMonth() === currDate.getMonth()) {
            return (
              <li key={event.name} className="gap-2 flex flex-col">
                <h4 className="text-xl font-bold">{event.name}</h4>
                <p>{formatDate(event.date, event.end)}</p>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot" />
                  <p
                    className="cursor-pointer hover:underline decoration-dotted"
                    onClick={() => openMap(event.location)}
                  >
                    {event.location}
                  </p>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default VisitEvents;
