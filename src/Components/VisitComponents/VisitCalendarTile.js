import React from "react";
import VisitCalendarTilePopUp from "./VisitCalendarTilePopUp";

const VisitCalendarTile = ({ event }) => {
  return (
    <div className="absolute group bottom-2 w-full">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-circle text-xs" />
        <p className="text-sm overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[160px]">
          {event.name}
        </p>
      </div>
      <VisitCalendarTilePopUp event={event} />
    </div>
  );
};

export default VisitCalendarTile;
