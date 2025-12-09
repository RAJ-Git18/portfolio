import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaBrain } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            category: 'Languages',
            icon: <FaCode />,
            items: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'Java']
        },
        {
            category: 'Frameworks & Tools',
            icon: <FaTools />,
            items: ['Django', 'Flask', 'React', 'Next.js', 'Docker', 'Git', 'Redis']
        },
        {
            category: 'ML Libraries & Concepts',
            icon: <FaBrain />,
            items: ['scikit-learn', 'pandas', 'NumPy', 'matplotlib', 'seaborn', 'XGBoost', 'Supervised Learning', 'NLP']
        }
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--glass-bg)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Skills</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>{skill.icon}</div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{skill.category}</h3>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {skill.items.map((item, idx) => (
                                        <span key={idx} style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '8px',
                                            color: '#D1D5DB',
                                            fontSize: '0.9rem'
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
