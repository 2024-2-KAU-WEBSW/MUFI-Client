import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ApiCalendar from "react-google-calendar-api";

function GoogleCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Google Calendar API에서 이벤트 가져오기
    ApiCalendar.listUpcomingEvents(20)
      .then(({ result }) => {
        const googleEvents = result.items.map((event) => ({
          title: event.summary,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
        }));
        setEvents(googleEvents);
      })
      .catch((error) => console.error("이벤트 가져오기 실패:", error));
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events} // Google Calendar API로 가져온 데이터
    />
  );
}

export default GoogleCalendar;
