import { useEffect, useState, FormEvent } from 'react';
import * as C from './app.styles'
import * as Photos from './services/photos';
import { Photo } from './types/Photos'
import { PhotoItem } from './components/photoItem'

function App() {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll())
      setLoading(false);
    }
    getPhotos()
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0){
      setUploading(true)
      setUploading(false)
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Photos gallery</C.Header>

        <C.UploadForm method = "POST" onSubmit={handleFormSubmit}>
          <input type="file" name='image' />
          <input type="submit" value="Enviar"/>
        </C.UploadForm>

        {loading ? "loading" :
          <C.PhotoList>
            {photos?.map((item, i) => (
              <PhotoItem key={i} url={item.url} name={item.name}/>
            ))}
          </C.PhotoList>}
      </C.Area>
    </C.Container>
  );
}

export default App;
