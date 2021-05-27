import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
    return (
        <aside className='sidebar'>
            <h2>Playlists</h2>
            <ul className="playlists">
                <li className="playlist">Playlist1</li>
                <li className="playlist">Playlist2</li>
                <li className="playlist">Playlist3</li>
            </ul>
        </aside>
    );
}

export default Sidebar;