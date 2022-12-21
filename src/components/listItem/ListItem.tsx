import * as C from "./styles"
import { Item } from "../../types/item"
import { useState } from "react"

type Props = {
    item: Item
}

const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name} {item.done.toString()}</label>
        </C.Container>
    )
}

export default ListItem


