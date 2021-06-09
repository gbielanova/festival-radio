import React from 'react';
import './Header.css';
import { useDataLayerValue } from '../../../DataLayer';
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Header({ handleClick }) {
    const [{ user }] = useDataLayerValue();

    return (
        <header className='header' >
            <div className="header__wrapper">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <p className='header__text'>{user?.display_name}</p>
                <ExitToAppIcon className='header__logout' onClick={handleClick} />
            </div>
        </header>
    );
}

export default Header;