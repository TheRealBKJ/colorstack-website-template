import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { board } from "@/lib/board-data";
import BoardCard from "./board-card";

export default function BoardGrid() {
  const years = Array.from(board.keys());

  return (
    <Tabs
      defaultValue={years[years.length - 1]}
      className="flex flex-col items-center"
    >
      <TabsList className="gap-4 mb-16">
        {years.map((year) => (
          <TabsTrigger key={year} value={year}>
            {year}
          </TabsTrigger>
        ))}
      </TabsList>
      {years.map((year) => (
        <TabsContent key={year} value={year}>
          <div className="flex flex-wrap gap-x-8 gap-y-20 justify-center">
            {board.get(year)?.map((member, index) => (
              <BoardCard
                key={index}
                name={member.name}
                position={member.position}
                linkedIn={member.linkedIn}
                image={member.image}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
