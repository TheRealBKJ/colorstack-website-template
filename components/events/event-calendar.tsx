import React from "react";
import EventCard from "./event-card"; // adjust path if different
import { mockEvents } from "../data/events"; // import mock data
import { ScrollArea } from "@/components/ui/scroll-area";



export default function EventCalendar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6">
      {mockEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}


