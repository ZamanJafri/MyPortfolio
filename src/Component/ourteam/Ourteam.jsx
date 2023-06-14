import React from 'react'
import OurteamCard from './OurteamCard';
import './ourteam.style.css';

const Ourteam = () => {
    return (
        <>
            <div className="container-our-team">
                <div className="our-team">
                    <div className="row-our-team">
                        <OurteamCard />
                        <OurteamCard />
                    </div>
                    <div className="row-our-team">
                        <OurteamCard />
                        <OurteamCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourteam
