import React from "react";

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

  return `${start} - ${end}`;
};

const openMap = (address) => {
  window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`);
};

const VisitCalendarTilePopUp = ({ event }) => {
  return (
    <div className="absolute invisible group-hover:visible z-50 w-96 top-8 -translate-x-1/2 left-1/2">
      <div className="bg-white rounded-md shadow-lg">
        <div className="relative">
          <div className="w-4 h-4 bg-white transform -translate-x-1/2 rotate-45 absolute -top-2 left-1/2"></div>
        </div>
        <div className="p-4">
          <p className="text-gray-800 text-base font-medium">{event.name}</p>
          {/* <p className="text-gray-600 text-sm">{event.description}</p> */}
          <p className="text-gray-700 text-sm">
            {formatDate(event.date, event.end)}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <i className="fa-solid fa-location-dot text-gray-600" />
            <p
              className="text-gray-600 text-sm cursor-pointer hover:underline decoration-dotted"
              onClick={() => openMap(event.location)}
            >
              {event.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitCalendarTilePopUp;
