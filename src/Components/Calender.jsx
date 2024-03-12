import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Box from "@mui/material/Box";

export function BoxSystemProps({ children }) {
  return (
    <Box
      sx={{
        "& .meeting-event ": {
          fontSize: "20px",
          fontWeight: "bold",
          bgcolor: "green",
          "@media (max-width: 425px)": { fontSize: "15px" },
        },
        "& .Wandering ": {
          fontSize: "26px",
          fontWeight: "bold",
          bgcolor: "red",
          "@media (max-width: 425px)": {
            fontSize: "18px",
            bgcolor: "orange",
            "@media (max-width: 425px)": { fontSize: "15px" },
          },
        },
        "& .fc-toolbar-title , & .fc .fc-button .fc-icon  ": {
          "@media (max-width: 425px)": { fontSize: "15px" , padding:"0"  },
        },
        "& .fc .fc-button   ": {
          "@media (max-width: 425px)": { padding: "2px 4px" },
        },
        "& .fc-direction-ltr .fc-toolbar > * > :not(:first-child) ": {
          "@media (max-width: 325px)": { margin: "0" },
        },
        "& .fc-button-group ": {
          "@media (max-width: 425px)": {

            
          },
        },
      }}
    >
      {children}
    </Box>
  );
}

const Calendar = () => {
  const [info, setInfo] = useState(null);

  const handleSelect = (info) => {
    setInfo(info);
    console.log(info);
  };

  const getEventClassName = (event) => {
    if (event.title === "Meeting") {
      return "meeting-event";
    } else if (event.title === "Party") {
      return "party-event";
    } else if (event.title === "Wandering") {
      return "Wandering";
    } else {
      return "default-event";
    }
  };

  const events = [
    {
      title: "Meeting",
      date: "2024-03-01",
      start: "2024-03-01",
      end: "2024-03-03",
      textColor: "white",
    },
    {
      title: "Party",
      date: "2024-03-01",
      start: "2024-03-01",
      end: "2024-03-03",
      textColor: "white",
    },
    {
      title: "Party",
      date: "2024-03-06",
      start: "2024-03-09",
      end: "2024-03-03",
      textColor: "white",
    },
    {
      title: "Meeting",
      date: "2024-03-01",
      start: "2024-03-05",
      end: "2024-03-08",
      textColor: "white",
    },
    {
      title: "Party",
      date: "2024-03-01",
      start: "2024-03-05",
      end: "2024-03-07",
      textColor: "white",
    },
    {
      title: "Wandering",
      date: "2024-03-01",
      start: "2024-03-05",
      end: "2024-03-07",
      textColor: "white",
    },
  ];

  return (
    <BoxSystemProps>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        eventContent={(eventInfo) => {
          const className = getEventClassName(eventInfo.event);
          return (
            <div className={`custom-event ${className}`}>
              <b>{eventInfo.timeText}</b>
              <i>{eventInfo.event.title}</i>
            </div>
          );
        }}
        selectable
        select={handleSelect}
      />
      {info && (
        <div>
          <h3>Selected Date Range Information:</h3>
          <p>Start: {info.startStr}</p>
          <p>End: {info.endStr}</p>
        </div>
      )}
    </BoxSystemProps>
  );
};

export default Calendar;
