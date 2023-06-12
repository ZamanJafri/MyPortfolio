import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div className='CardConatiner'>
            <div className="d-flex">
                <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
                    Project Details
                </h1>
                <div className="line"></div>
            </div>
            <div className="card">
                <div className="row-1">
                    <div className="col-4">
                        <h1>Free Project</h1>
                        <span className='center-card-data'>
                            <h2>Business</h2>
                            <p>Complete Website</p>
                            <p>Complete Responsive</p>
                            <p></p>
                            <p>$$000</p>
                            <button>

                                <Link to={'/Contact'} className='btn-center'>
                                    Contact Us
                                </Link>
                            </button>
                        </span>

                    </div>
                    <div className="col-4">
                        <h1>Free Project</h1>
                        <span className='center-card-data'>
                            <h2>Business</h2>
                            <p>Complete Website</p>
                            <p>Complete Responsive</p>
                            <p></p>
                            <p>$$000</p>
                            <button>

                                <Link to={'/Contact'} className='btn-center'>
                                    Contact Us
                                </Link>
                            </button>
                        </span>
                    </div>
                    <div className="col-4">
                        <h1>Free Project</h1>
                        <span className='center-card-data'>
                            <h2>Business</h2>
                            <p>Complete Website</p>
                            <p>Complete Responsive</p>
                            <p></p>
                            <p>$$000</p>
                            <button>
                                <Link to={'/Contact'} className='btn-center'>
                                    Contact Us
                                </Link>
                            </button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
