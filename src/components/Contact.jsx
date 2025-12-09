import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                        <a href="mailto:simkhadaraj18@gmail.com" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 2rem', textDecoration: 'none' }}>
                            <FaEnvelope style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }} />
                            <span style={{ color: 'white' }}>simkhadaraj18@gmail.com</span>
                        </a>
                        <a href="tel:+9779840309541" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 2rem', textDecoration: 'none' }}>
                            <FaPhone style={{ fontSize: '1.5rem', color: 'var(--secondary-color)' }} />
                            <span style={{ color: 'white' }}>+977 9840309541</span>
                        </a>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="https://github.com/RAJ-Git18" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', color: '#ccc', transition: 'color 0.3s' }} className="hover:text-white">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/raj-simkhada-ba7b84311/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', color: '#ccc', transition: 'color 0.3s' }} className="hover:text-white">
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
