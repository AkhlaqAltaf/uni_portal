import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { date: selectedDate, title }]);
    }
  };

  const getEventsForDate = (date) =>
    events.filter(
      (event) =>
        new Date(event.date).toDateString() === new Date(date).toDateString()
    );

  return (
    <div className="p-6 bg-[#1d2241]  rounded-lg min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        University Event Calendar
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Calendar Section */}
        <div className="flex-grow bg-[#193344] border-2 border-[#06814f]  rounded-lg shadow-lg p-4">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={({ date }) => {
              const dayEvents = getEventsForDate(date);
              return (
                <div>
                  {dayEvents.map((event, index) => (
                    <span
                      key={index}
                      className="block bg-blue-200 text-blue-800 text-xs rounded mt-1 px-1"
                    >
                      {event.title}
                    </span>
                  ))}
                </div>
              );
            }}
            className="w-full bg-[#193344] border-2 border-[#06814f] text-white border-none"
          />
        </div>

        {/* Events List Section */}
        <div className="flex-grow bg-[#193344] border-2 border-[#06814f] text-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold text-white mb-4">
            Events on {selectedDate.toDateString()}
          </h2>
          <ul >
            {getEventsForDate(selectedDate).length > 0 ? (
              getEventsForDate(selectedDate).map((event, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-white p-2 rounded-lg mb-2"
                >
                  <span className="text-white">{event.title}</span>
                  <button
                    className="text-white hover:text-white text-sm font-medium"
                    onClick={() =>
                      setEvents(events.filter((e) => e !== event))
                    }
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No events for this day.</p>
            )}
          </ul>
          <button
            onClick={handleAddEvent}
            className="mt-4 bg-[#193344] border-2 border-[#06814f] text-white px-4 py-2 rounded-lg"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
