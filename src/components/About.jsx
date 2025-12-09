import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const education = [
        {
            school: 'Thapathali Campus',
            degree: 'Bachelors in Computer Engineering',
            location: 'Thapathali, Kathmandu',
            date: 'April 2022 – Present'
        },
        {
            school: 'Xavier International College',
            degree: 'Associate Degree',
            gpa: 'GPA: 3.78',
            location: 'Kalopul, Kathmandu',
            date: 'June 2019 – December 2021'
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                        <div className="glass-card">
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1rem' }}>
                                I am a Computer Engineering student with a strong foundation in full-stack development and a growing passion for solving real-world problems using machine learning and AI. I am eager to contribute to impactful projects in the fields of smart cities, health tech, and sustainable systems.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaGraduationCap style={{ color: 'var(--secondary-color)' }} /> Education
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {education.map((edu, index) => (
                                    <div key={index} className="glass-card" style={{ padding: '1.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>{edu.school}</h4>
                                            <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{edu.date}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                            <p style={{ color: '#ccc' }}>{edu.degree} {edu.gpa && <span>• {edu.gpa}</span>}</p>
                                            <p style={{ color: '#888', fontStyle: 'italic' }}>{edu.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
