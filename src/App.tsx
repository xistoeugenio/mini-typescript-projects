import { useEffect, useState } from 'react';
import * as C from './app.styles'
import * as Photos from './services/photos';
import { Photo } from './types/Photos'

function App() {
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

        {loading ? "loading" :
          <C.PhotoList>
            {photos?.map((item, i) => (
              <div>{item.name}</div>
            ))}
          </C.PhotoList>}
      </C.Area>
    </C.Container>
  );
}

export default App;
