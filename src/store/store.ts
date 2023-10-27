import { DialogType } from "@/components/dialogs/GlobalDialog";
import { atom } from "recoil";

export const dialogsState = atom<Array<DialogType>>({
  key: "dialogsState",
  default: []
})

export const todoListState = atom({
  key: "todoListState",
  default: []
})

export const objState = atom({
  key: "objState",
  default: {
    username: "",
    password: ""
  }
})