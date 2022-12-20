import { useState } from "react";
import * as C from "./app.styles"
import { Item } from "./types/item"
import ListItem from "./components/listItem/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "fajfagdafjhl", done: true },
    { id: 1, name: "this is the second task", done: false }
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>To do list</C.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App;