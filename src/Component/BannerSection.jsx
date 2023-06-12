import React from 'react'
import codeimages from '../assets/img/codeimages.jpg'
import { Link } from 'react-router-dom'
const BannerSection = () => {
    return (
        <>
            <div className="banner">
                <div className="image-section">
                    <img className='img' src={codeimages} alt=' ' />
                </div>
                <div className="content">
                    <p>I'm a React Developer</p>
                    <h1> <i>Hire Me </i> </h1>
                    <div className="btn">
                        <Link className='btn-1 btn-warn' to={'/Project'}>
                            Project
                        </Link>
                        <Link className='btn-1 ' to={'/Contact'}>
                            Contact 
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerSection
