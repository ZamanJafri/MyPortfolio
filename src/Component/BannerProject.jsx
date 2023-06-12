import React from 'react'
import './style.css'

const BannerProject = ({ heading, para }) => {
    return (
        <>
            <div className="projectBanner">
                <div className="projectBannerContainer">
                    <div className="heading-content">
                        <h1>{heading}</h1>
                        <p>{para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerProject
