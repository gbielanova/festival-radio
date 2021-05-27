import React from 'react';
import './Main.css';

function Main(props) {
    return (
        <main className="main">
            <ul className="songs">
                <li className="song">Song 1</li>
                <li className="song">Song 2</li>
                <li className="song">Song 3</li>
                <li className="song">Song 4</li>
            </ul>
        </main>
    );
}

export default Main;