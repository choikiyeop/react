import { useState } from "react";
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { objState } from "@/store/store";
import ChildComponent from "./ChildComponent";

export default function TestPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [obj, setObj] = useRecoilState(objState);
  console.log(obj);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div>
      <Button variant="outlined" onClick={handleOpen} />
      <ChildComponent></ChildComponent>
    </div>
  );
}