import React, { useState, FormEvent } from 'react';
import * as C from './styles'
import * as Photos from '../../services/photos';
import { Photo } from '../../types/Photos'
import { CircularProgress } from "@mui/material"
import { Close } from '@mui/icons-material';

type Props = {
    photos: Photo[],
    setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>
}

function Navbar({ photos, setPhotos }: Props) {
    const [uploading, setUploading] = useState(false)
    const [currentFile, setCurrentFile] = useState('')

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('image') as File;

        if (file && file.size > 0) {
            setUploading(true)
            let result = await Photos.insert(file)
            setUploading(false)

            if (result instanceof Error) {
                alert(`${result.name} - ${result.message}`)
            } else {
                let newPhotoList = [...photos]
                newPhotoList.push(result);
                setPhotos(newPhotoList)
                setCurrentFile('')
            }
        }
    }

    return (
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
            {currentFile
                ? <span>{currentFile}<Close onClick={() => setCurrentFile('')} /></span>
                : <label htmlFor='image'>Chose your file</label>}
            <input
                id='image'
                type="file"
                name='image'
                value={currentFile}
                onChange={(e) => { setCurrentFile(e.target.value) }}
            />
            <button type='submit' disabled={(currentFile ? false : true) || uploading}>{uploading ? <CircularProgress size={20} color="inherit" /> : "Enviar"}</button>
        </C.UploadForm>
    );
}


export default Navbar;
