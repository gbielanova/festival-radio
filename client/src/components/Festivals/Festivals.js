import React, { useState, useEffect } from 'react';
import './Festivals.css'
import axios from 'axios';
import Carousel from 'react-material-ui-carousel'
import Login from '../Login/Login'
import { useDataLayerValue } from '../../DataLayer';
import FestivalBlock from '../FestivalBlock/FestivalBlock'

const FestivalsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/festival/';

function Festivals() {
    const [fests, setFests] = useState([]);
    const [{ }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(FestivalsUrl);
            setFests(result.data);
        };

        fetchData();
    }, []);

    function handleClick(item) {
        console.log(item)
        dispatch({
            type: "SET_FESTIVAL",
            festival: item,
        });
        sessionStorage.setItem('selectedFestival', JSON.stringify(item));
        dispatch({
            type: "SET_PLAYLISTS",
            playlists: []
        });
    }

    return (
        <div className='festivals'>
            <Login text="Create new playlist" cName='festivals__login' state='admin' />

            <Carousel
                className="carousel"
                autoPlay={true}
                timer={500}
                animation={'fade'}
                indicators={true}
                timeout={500}

                navButtonsProps={{
                    style: {
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: '10px'
                    }
                }}

                indicatorIconButtonProps={{
                    style: {
                        color: 'white',
                        margin: '0 10px'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: 'white',
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '-40px'
                    }

                }}
            >
                {
                    fests.map(
                        (item) =>
                            <article key={item.id} className='carousel__block' onClick={() => handleClick(item)}>
                                <img src={item.logo_url} alt="logo" className='carousel__image' />
                                <button className='carousel__button'>Get <span className='carousel__text'>{item.name}</span> boost!</button>
                            </article>
                    )
                }
            </Carousel>
            <section className="festivals__list">
                {fests.map(
                    (item) =>
                        <FestivalBlock key={item.id} festival={item} chooseFestival={handleClick} />
                )}
            </section>
        </div>
    );
}


export default Festivals;