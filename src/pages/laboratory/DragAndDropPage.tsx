import Dnd from "@/components/dnds/Dnd";
import { useState, useEffect } from "react";

const groupStyle = {
  padding: 8,
  width: 250,
}

const itemStyle = {
  userSelect: "none",
  padding: 16,
  margin: "0 0 8px 0",
}

export default function DragAndDropPage() {
  const [groups, setGroups] = useState<Array<string>[] | null>(null);

  useEffect(() => {
    setGroups([['item0', 'item1'], ['item2']]);
  }, [])

  return(
    <div>
      <Dnd groups={groups} setGroups={setGroups} groupStyle={groupStyle} itemStyle={itemStyle} />
    </div>
  )
}