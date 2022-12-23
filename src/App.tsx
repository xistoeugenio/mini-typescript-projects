import { useState } from "react";
import * as C from "./app.styles"
import { Item } from "./types/item"
import ListItem from "./components/listItem/ListItem";
import AddArea from "./components/addArea/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "fajfagdafjhl", done: true },
    { id: 2, name: "this is the second task", done: false }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }

  const handleDeleteTask = (taskName: string) => {
    const newList = list.filter(data => data.name !== taskName);
    setList(newList)
  }


  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const editTask = (id: number, name: string) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].name = name;
      }
    }
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
            deleteTask ={handleDeleteTask}
            />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App;