import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'
import { useDataLayerValue } from '../../DataLayer';
import FestivalsForm from '../AdminDashboard/FestivalsForm/FestivalsForm'

function AdminDashboard(props) {
    const [{ accessToken }, dispatch] = useDataLayerValue();

    function handleReturn() {
        sessionStorage.removeItem('state');
        dispatch({
            type: "SET_FESTIVAL",
            user: null,
        });
    }

    return (
        <div>
            <FestivalsForm />

            {/* <button onClick={handleReturn}> go back</button> */}
        </div>
    );
}

export default AdminDashboard;