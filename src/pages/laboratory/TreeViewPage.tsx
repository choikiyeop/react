import { useState, useEffect } from "react";
import { TreeView, TreeItem } from "@mui/x-tree-view";

export default function TreeViewPage() {
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState("");

  const onNodeFocus = (e, nodeId) => {
    // console.log(e);
    // console.log(nodeId);
    setSelected(nodeId);
  }

  const onNodeSelect = (e, nodeIds) => {
    // console.log(nodeId);
    // setSelected(nodeId);
  }

  const onNodeToggle = (e, nodeIds) => {
    setExpanded(nodeIds);
  }

  useEffect(() => {
    setSelected("3");
  }, []);

  return(
    <TreeView onNodeFocus={onNodeFocus} onNodeSelect={onNodeSelect} onNodeToggle={onNodeToggle} expanded={expanded} selected={selected}>
      <TreeItem nodeId="1" label="메뉴1"></TreeItem>
      <TreeItem nodeId="2" label="메뉴2"></TreeItem>
      <TreeItem nodeId="3" label="메뉴3" >
        <TreeItem nodeId="4" label="서브메뉴1"></TreeItem>
        <TreeItem nodeId="5" label="서브메뉴2"></TreeItem>
      </TreeItem>
      <TreeItem nodeId="6" label="메뉴4" >
        <TreeItem nodeId="7" label="서브메뉴1"></TreeItem>
        <TreeItem nodeId="8" label="서브메뉴2"></TreeItem>
        <TreeItem nodeId="9" label="서브메뉴3"></TreeItem>
      </TreeItem>
    </TreeView>
  )
}