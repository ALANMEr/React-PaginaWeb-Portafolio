import React from 'react'
import { GrRestaurant } from "react-icons/gr";
import './about.css'
import about from "../../image/imageAbout.jpg"
export const About = () => {
    return (
        <div className='cotainer about-section'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-image'>
                        <img src={about} height="400px" width="400px" alt='about-images' />
                    </div>
                    
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-details'>
                        <div className='about-title'>
                            <h5>Mira!!!</h5>
                            <span className='line'></span>
                        </div>
                        <p>Conoce las novedades</p>
                        <div className='card-design'>
                            <div className='about-list-item'>
                                <div className='about-details-icon'>
                                    <p><GrRestaurant /></p>
                                    <div>
                                        <h6>Día Perfecto</h6>
                                        <p>Da un vistazo a nuestro increible menú.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-design'>
                            <div className='about-list-item'>
                                <div className='about-details-icon'>
                                    <p><GrRestaurant /></p>
                                    <div>
                                        <h6>Día Perfecto</h6>
                                        <p>Da un vistazo a nuestro increible menú.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div className='card-design'>
                            <div className='about-list-item'>
                                <div className='about-details-icon'>
                                    <p><GrRestaurant /></p>
                                    <div>
                                        <h6>Día Perfecto</h6>
                                        <p>Da un vistazo a nuestro increible menú.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
