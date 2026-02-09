import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRobot, FaDatabase, FaCogs, FaRocket, FaStar, FaUsers } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            category: 'Languages & Frameworks',
            icon: <FaCode />,
            items: ['Python', 'JavaScript', 'C', 'C++', 'Shell scripting', 'SQL', 'FastAPI', 'Next.js', 'Django']
        },
        {
            category: 'ML/DL Stack',
            icon: <FaBrain />,
            items: ['PyTorch', 'TensorFlow', 'Transformers', 'Huggingface', 'Scikit-learn', 'Pandas', 'NumPy']
        },
        {
            category: 'NLP',
            icon: <FaRobot />,
            items: ['Fine-tuning (LoRA)', 'Agentic Workflows (LangChain/LangGraph)', 'RAG Pipelines', 'Text Analytics', 'Cross-Encoder Reranking']
        },
        {
            category: 'Data Systems',
            icon: <FaDatabase />,
            items: ['Pinecone', 'Qdrant', 'PostgreSQL', 'Redis', 'SQLAlchemy']
        },
        {
            category: 'ML Infrastructure & MLOps',
            icon: <FaCogs />,
            items: ['Docker', 'CI/CD pipelines', 'MLOps Practices']
        },
        {
            category: 'Deployment Tools',
            icon: <FaRocket />,
            items: ['Streamlit', 'Git', 'Postman', 'Jupyter', 'VS Code']
        },
        {
            category: 'Specializations',
            icon: <FaStar />,
            items: ['NLP', 'LLM Systems', 'RAG/Agentic Architectures', 'Computer Vision', 'Full-Stack Development']
        },
        {
            category: 'Soft Skills',
            icon: <FaUsers />,
            items: ['Communication', 'Problem Solving', 'Teamwork', 'Quick Learning', 'Research-Oriented']
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
