import { useEffect, useState } from 'react';
import * as C from './app.styles'
import * as Photos from './services/photos';
import { Photo } from './types/Photos'
import { PhotoItem } from './components/photoItem'
import Navbar from './components/navbar';

function App (){
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

  return (
    <C.Container>
      <C.Area>
        <C.Header>Photos gallery</C.Header>
        <Navbar photos={photos} setPhotos={setPhotos}/>
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

