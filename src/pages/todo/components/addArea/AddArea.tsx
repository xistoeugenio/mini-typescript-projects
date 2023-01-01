import { KeyboardEvent, useState } from "react"
import { Add } from "@mui/icons-material"
import * as C from "./styles"

type Props = {
  onEnter: (taskName: string) => void
}

export default function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== '') {
      onEnter(inputText)
      setInputText('')
    }
  }

  const addNewTask = () => {
    if (inputText.length <= 50 && inputText !== '') {
      onEnter(inputText)
      setInputText('')
    }

  }

  return (
    <C.Container>
      <Add className="iconPlus" onClick={() => { addNewTask() }} />
      <input
        maxLength={50}
        type="text"
        placeholder="Add a task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <div className="wordLimit">
        {inputText.length + "/50"}
      </div>
    </C.Container>
  )
}
