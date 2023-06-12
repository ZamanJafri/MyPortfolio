import React from 'react'

const AboutBanner = ({heading, para}) => {
    return (
        <div className='AboutBanner'>
            <div className="aboutcontainer">
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>

        </div>
    )
}

export default AboutBanner
