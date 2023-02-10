import * as C from './styles'
import * as Photos from '../../services/photos';
import { Photo } from '../../types/Photos';

type Props = {
    url: string,
    name: string,
    photos: Photo[],
    setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>,
}

export const PhotoItem = ({ url, name, photos, setPhotos }: Props) => {

    const deleteItem = async () => {
        Photos.deleteFile(name)
    }

    return (
        <C.Container>
            <img src={url} alt={name} onClick={deleteItem} />
            {name}
        </C.Container>
    )
}