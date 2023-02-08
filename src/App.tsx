import { useEffect, useState, FormEvent } from 'react';
import * as C from './app.styles'
import * as Photos from './services/photos';
import { Photo } from './types/Photos'
import { PhotoItem } from './components/photoItem'
import { CircularProgress } from "@mui/material"
import { Close } from '@mui/icons-material';

function App() {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [currentFile, setCurrentFile] = useState('')

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll())
      setLoading(false);
    }
    getPhotos()
  }, [])

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
    <C.Container>
      <C.Area>
        <C.Header>Photos gallery</C.Header>

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
        {loading ? "loading" :
          <C.PhotoList>
            {photos?.map((item, i) => (
              <PhotoItem key={i} url={item.url} name={item.name} />
            ))}
          </C.PhotoList>}

      </C.Area>
    </C.Container>
  );
}

export default App;
