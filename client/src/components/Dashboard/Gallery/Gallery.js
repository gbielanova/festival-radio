import React from 'react';
import './Gallery.css';
import { useDataLayerValue } from '../../../DataLayer';
import PlaylistItem from '../PlaylistItem/PlaylistItem'

function Gallery(props) {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className='gallery'>
            <div className="galleryItems">
                {playlists?.map(item => (
                    <PlaylistItem playlist={item} key={item.id} />
                ))}</div>
        </div>
    );
}

export default Gallery;