import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import s from "./App.module.css"
import ImageList from './Component/ImageList/ImageList';
import axios from 'axios'
import { useScrollPosition } from './Component/hooks/useScrollPosition';



function App() {
  const [imageList, setImageList] = useState([]);
  const {isBottom} = useScrollPosition()
  const [pageToFetch,setPageToFetch] = useState(1)
  const [isLoading,setIsLoading] = useState(false)
  console.log(isBottom);
  useEffect(()=>{
    FetchImagesByPage(pageToFetch)
  },[pageToFetch])

  useEffect(()=>{
    if(isBottom){
      console.log("hy");
      increasePage()
    }
    

  },[isBottom])
  async function FetchImagesByPage(pageNumber){
    console.log("http req ..");
    setIsLoading(true)
    const {data} = await axios(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
      );
      setImageList([...imageList,...data])
      setIsLoading(false)
  }
  function increasePage(){
    setPageToFetch(pageToFetch+1)
  }
  return (
    <div className={s.root}>
      <h1>Rand's images</h1>
      <h2>Rand's images open source</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className='spinner-border' role='status'/>}
    </div>
  );
}

export default App;

