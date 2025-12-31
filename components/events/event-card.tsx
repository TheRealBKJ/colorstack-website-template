import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type  {EventType} from "@/types/event";


export default function EventCard({ event }:{ event: EventType }) {
  return (
    <Card className="hover:shadow-md transition">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.date} • {event.time}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{event.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">📍 {event.location}</p>
      </CardContent>

      <CardFooter>
        {event.link && (
          <Button variant="outline" asChild>
            <a href={event.link} target="_blank" rel="noopener noreferrer">View Details</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
