import { useState } from "react";
import * as C from "./app.styles"
import { Item } from "./types/item"
import ListItem from "./components/listItem/ListItem";
import AddArea from "./components/addArea/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>(JSON.parse(localStorage.getItem("tasks") as string) || [])


  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: Math.floor(Math.random() * 9999999),
      name: taskName,
      done: false,
    })
    localStorage.setItem("tasks", JSON.stringify(newList))
    setList(newList)
  }

  const handleDeleteTask = (id: number) => {
    const newList = list.filter(data => data.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newList))
    setList(newList)
  }


  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(newList))
    setList(newList);
  }

  const editTask = (id: number, name: string) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].name = name;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(newList))
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To do list</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            editTask={editTask}
            deleteTask={handleDeleteTask}
          />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App;