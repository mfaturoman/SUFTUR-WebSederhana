import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>Sufi & Fathur</b> ?</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">they are two people who made this simple website, mutual support between them makes a great combination.</p>
                        <NavLink to="/register" className="btn btn-outline-primary ms-auto px-4 rounded-pill px-4 py-2">Get Started</NavLink>
                        <NavLink to="/contact" className="btn btn-outline-primary px-4 rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;
