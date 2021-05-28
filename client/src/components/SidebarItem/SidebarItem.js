import React from 'react';
import './SidebarItem.css';

function SidebarItem({ title, Icon }) {
    return (
        <div className="sidebarItem">
            {Icon && <Icon className='sidebarItem__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarItem;