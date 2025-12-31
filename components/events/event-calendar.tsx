import React from "react";
import EventCard from "./event-card"; // adjust path if different
import { mockEvents } from "../data/events"; // import mock data
import { ScrollArea } from "@/components/ui/scroll-area";

const EventCalendar = () => {

  // Future: replace with fetch("/api/events")
  const events = mockEvents;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>

      <ScrollArea className="h-[500px] rounded-md border p-4">
        <div className="flex flex-col gap-4">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EventCalendar;


