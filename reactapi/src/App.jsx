import { useState } from 'react'
import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './api'
import ImageList from './components/ImageList'

function App() {
  const [images, setImages] = useState([])
  const handleSubmit= async (a)=>{
    const results = await searchImages(a);
    setImages(results)
  }
  return (  
      <div>
       <SearchHeader search={handleSubmit}/>
       <ImageList images = {images}/>
      </div>
    
  )
}

export default App
