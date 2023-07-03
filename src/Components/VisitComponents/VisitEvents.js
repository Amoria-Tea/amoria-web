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

const openLink = (link) => {
  window.open(link);
}

const VisitEvents = () => {
  const [currDate] = useState(new Date());

  return (
    <>
    <h3 className="text-2xl font-bold flex justify-center mt-8">Upcoming Events!</h3>
    <div className="px-16 sm:px-32">
      <ul className="mt-8 flex flex-col gap-10">
        {events.map((event) => {
          if (event.date.getMonth() === currDate.getMonth()) {
            return (
              <li key={event.name} className="gap-2 flex flex-col">
                <h4 className="cursor-pointer hover:underline decoration-dotted text-xl font-bold" 
                onClick={() => openLink(event.eventLink)}>{event.name}</h4>
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
  </>
  );
};

export default VisitEvents;
