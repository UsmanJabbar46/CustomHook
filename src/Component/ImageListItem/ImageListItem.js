import React from 'react';
import './ImageListItem.css';
import { saveAs } from 'file-saver';

export function ImageListItem({ img }) {
     async function DownloadImage(){
       const ImageResponse = await  fetch(img.download_url)
       const ImageBlob = await ImageResponse.blob()
       saveAs(ImageBlob,img.author + "_" + img.id)
    }
  return (
    <div className='card'>
      <a href={img.url}>
        <img src={img.download_url} className='img' />
      </a>
      <div className='card_banner'>
        <img src={img.download_url} className='card_thumb' />
        <div className='card_text'>
          <h3 className='card_title'>{img.author}</h3>
          <div className='card_subtitle'>
            Original size: {img.height}x{img.width}
          </div>
          <button onClick={DownloadImage}>Download</button>
        </div>
      </div>
    </div>
  );
}


