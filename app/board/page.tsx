import BoardGrid from "@/components/board/board-grid";

export default function Board() {
  return (
    <div className="flex flex-col items-center p-14 gap-8 bg-accent">
      <h1 className="text-5xl font-medium">{"Meet The Board"}</h1>
      <BoardGrid />
    </div>
  );
}
