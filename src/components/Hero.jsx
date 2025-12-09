import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Background Blobs */}
            <div className="blob blob-pink" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px' }}></div>
            <div className="blob blob-cyan" style={{ bottom: '-10%', right: '-10%', width: '500px', height: '500px' }}></div>
            <div className="blob blob-yellow" style={{ top: '40%', left: '40%', width: '300px', height: '300px', opacity: 0.2 }}></div>

            <div className="container flex-col-mobile reverse-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

                {/* Left Content */}
                <motion.div
                    className="hero-content text-center-mobile"
                    style={{ flex: '1', minWidth: '300px', paddingRight: '2rem' }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)', fontWeight: '600' }}>Hello, I'm</h2>
                    <h1 style={{
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        color: 'white'
                    }}>
                        Raj <br /> Simkhada
                    </h1>
                    <h3 style={{
                        marginBottom: '1.5rem',
                        color: '#9CA3AF'
                    }}>
                        AI/ML Engineer & <span style={{ color: 'var(--secondary-color)' }}>Full-Stack Developer</span>
                    </h3>
                    <p style={{
                        maxWidth: '500px',
                        marginBottom: '2.5rem',
                        color: '#D1D5DB'
                    }}>
                        I build pixel-perfect, engaging, and accessible digital experiences. Passionate about smart cities, health tech, and sustainable systems.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#projects" className="btn btn-primary">My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                    style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-img-container">
                        <div className="hero-img-inner">
                            <img
                                src={profileImg}
                                alt="Raj Simkhada"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'contrast(1.1) brightness(1.1)'
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
