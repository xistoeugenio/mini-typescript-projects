import * as C from "./styles"
import { Item } from "../../types/item"
import { Delete, Edit } from "@mui/icons-material"

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

const ListItem = ({ item, onChange }: Props) => {

    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name} {item.done.toString()}</label>
            <C.rightContainer>
                {
                    !item.done &&
                    <Edit className="icon edit" />
                }
                <Delete className="icon delete" />
            </C.rightContainer>
        </C.Container>
    )
}

export default ListItem


