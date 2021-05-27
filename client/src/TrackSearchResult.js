import React from 'react';

function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
        chooseTrack(track);
    }

    return (
        <div style={{ display: "flex" }} onClick={handlePlay}>
            <img src={track.albumUrl} alt="" style={{ height: "64px", "width": "64px" }} />
            <div>
                <p>{track.title}</p>
                <p>{track.artist}</p></div>
        </div >
    );
}

export default TrackSearchResult;