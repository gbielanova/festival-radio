import React from 'react';
import './AdminDashboard.css'
import { useDataLayerValue } from '../../DataLayer';

function AdminDashboard(props) {
    const [{ accessToken }] = useDataLayerValue();

    function handleCLick() {
        sessionStorage.removeItem('state')
    }

    return (
        <div>
            "Admin panel here!"
            < button onClick={handleCLick}> go back</button >
        </div >
    );
}

export default AdminDashboard;