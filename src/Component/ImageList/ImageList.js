import React from 'react';
import {ImageListItem} from '../ImageListItem/ImageListItem';
import "./ImageList.css"

export default function ImageList({ imageList }) {
  return imageList.map((img) => {
    return (
      <div key={img.id} className='card_item'>
        <ImageListItem img={img} />
      </div>
    );
  });
}

