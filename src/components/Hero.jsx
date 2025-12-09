import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Blobs */}
            <div className="blob blob-pink" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px' }}></div>
            <div className="blob blob-cyan" style={{ bottom: '-10%', right: '-10%', width: '500px', height: '500px' }}></div>
            <div className="blob blob-yellow" style={{ top: '40%', left: '40%', width: '300px', height: '300px', opacity: 0.2 }}></div>

            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>

                {/* Left Content */}
                <motion.div
                    style={{ flex: '1', minWidth: '300px', paddingRight: '2rem' }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)', fontWeight: '600' }}>Hello, I'm</h2>
                    <h1 style={{
                        fontSize: '4.5rem',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        color: 'white'
                    }}>
                        Raj <br /> Simkhada
                    </h1>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        color: '#9CA3AF'
                    }}>
                        AI/ML Engineer & <span style={{ color: 'var(--secondary-color)' }}>Full-Stack Developer</span>
                    </h3>
                    <p style={{
                        maxWidth: '500px',
                        marginBottom: '2.5rem',
                        fontSize: '1.1rem',
                        color: '#D1D5DB'
                    }}>
                        I build pixel-perfect, engaging, and accessible digital experiences. Passionate about smart cities, health tech, and sustainable systems.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
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
                    <div style={{
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{
                            width: '380px',
                            height: '380px',
                            borderRadius: '50%',
                            background: 'var(--bg-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
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
