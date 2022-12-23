import * as C from "./styles"
import { Item } from "../../types/item"
import { Delete, Edit, Check } from "@mui/icons-material"
import { useState } from "react"

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void,
    editTask: (id: number, name: string) => void,
    deleteTask: (taskName: string) => void,
}

const ListItem = ({ item, onChange, editTask, deleteTask }: Props) => {
    const [openEdit, setOpenEdit] = useState(false)
    const [taskName, setTaskName] = useState(item.name)

    const handleTaskName = () => {
        setOpenEdit(false)
        editTask(item.id, taskName)
    }

    return (
        <C.Container done={item.done}>
            {openEdit ?
                <>
                    <div className="editContainer">
                        <input
                            maxLength={50}
                            value={taskName}
                            className="editInput"
                            onChange={e => setTaskName(e.target.value)}
                        />
                        <span>{taskName.length + `/50`}</span>
                    </div>
                    <Check className="checkIcon" onClick={handleTaskName} />
                </>
                :
                <>
                    <input
                        className="radio"
                        type="checkbox"
                        checked={item.done}
                        onChange={e => onChange(item.id, e.target.checked)}
                    />
                    <label>{item.name}</label>
                    <C.rightContainer>
                        {
                            !item.done &&
                            <Edit className="icon edit" onClick={() => { setOpenEdit(true) }} />
                        }
                        <Delete className="icon delete" onClick={() => { deleteTask(item.name) }} />
                    </C.rightContainer>
                </>
            }

        </C.Container>
    )
}

export default ListItem


