import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { EventType } from "@/types/event";

export default function EventCard({ event }: { event: EventType }) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition bg-white">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold">{event.title}</h3>
        <p className="text-red-600 font-medium mt-1">{event.date}</p>
      </div>
    </Card>
  );
}
