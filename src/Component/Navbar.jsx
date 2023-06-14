import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './style.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const setToggleHandler = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link className='myLogo'>
                        <h1 className='my-logo'>
                            <span>P</span>
                            <span>ortfolio</span>
                        </h1>
                    </Link>
                </div>

                <ul className={toggle ? 'list active' : 'list'}>
                    <li>
                        <Link className='anchorTag' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='anchorTag' to={'/about'}>About</Link>
                    </li>
                    <li>

                        <Link className='anchorTag' to={'/project'}>Project</Link>                        </li>
                    <li>

                        <Link className='anchorTag' to={'/contact'}>Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={setToggleHandler}>
                    {
                        toggle ? (<FaTimes className='toggle' />) : (<FaBars className='toggle' />)}
                </div>

            </div>
        </>
    )
}

export default Navbar
