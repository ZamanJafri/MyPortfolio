import React from 'react'
import {
    FaAddressBook, FaPhone,
    FaFacebook, FaInstagram,
    FaLinkedin
} from 'react-icons/fa'
import './style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col-6">
                        <span>
                            < FaAddressBook className='faHome' />
                            <h3>123 Kanpur India</h3>
                        </span>
                        <span>
                            <FaPhone className='faphone' />
                            <h3>+91-0000000000</h3>
                        </span>

                    </div>
                    <div className="col-6">
                        <h2>About Me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Velit expedita corrupti quam pariatur, minima consequatur.
                            Nihil ipsam ea, optio modi, alias molestias quis eum repellat
                            obcaecati
                            reiciendis deserunt, nesciunt beatae?</p>
                        <div className="icons">
                            <Link>
                                <FaFacebook className='FaFacebook' />
                            </Link>
                            <Link>
                                <FaInstagram className='FaInstagram' />
                            </Link>
                            <Link>
                                <FaLinkedin className='FaLinkedin' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
