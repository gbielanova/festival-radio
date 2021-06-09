import React from 'react';
import './Gallery.css';
import { useDataLayerValue } from '../../../DataLayer';
import GalleryItem from '../GalleryItem/GalleryItem'

function Gallery(props) {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className='gallery'>
            <div className="gallery__items">
                {playlists?.map(item => (
                    <GalleryItem playlist={item} key={item.id} />
                ))}</div>
        </div>
    );
}

export default Gallery;