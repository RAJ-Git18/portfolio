import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'GEONUSAF (Ongoing)',
            description: 'Research project focused on Geospatial analysis for Urban Sustainability and Forecasting. Integrating satellite and environmental datasets to analyze urban expansion and green space distribution.',
            tags: ['Research', 'Geospatial Analysis', 'Sustainability'],
            links: { github: '#' }
        },
        {
            title: 'AI-Powered Document RAG & Booking Assistant',
            description: 'Production-ready FastAPI backend that ingests PDF/text documents, generates embeddings with SentenceTransformers, and uses Pinecone for semantic retrieval. Features intent detection and PostgreSQL booking storage.',
            tags: ['FastAPI', 'Pinecone', 'RAG', 'PostgreSQL', 'Redis'],
            links: { github: '#' }
        },
        {
            title: 'Life Expectancy Prediction',
            description: 'Machine learning pipeline to predict life expectancy based on socio-economic data. Applied multiple models (Linear, Ridge, Lasso, Random Forest, XGBoost) to determine the best predictor.',
            tags: ['Machine Learning', 'Python', 'XGBoost', 'Data Analysis'],
            links: { github: '#' }
        },
        {
            title: 'Multi-Domain RAG AI Assistant',
            description: 'Intelligent FastAPI microservice using RAG to answer queries across travel and AI development domains. Implemented smart triage system and LangChain learning paths.',
            tags: ['FastAPI', 'LangChain', 'RAG', 'AI'],
            links: { github: '#' }
        },
        {
            title: 'PharmaLife – Medicine eCommerce Platform',
            description: 'Full-stack web app for buying and selling medicines online with authentication, cart, and order tracking.',
            tags: ['Django', 'Next.js', 'PostgreSQL'],
            links: { github: '#' }
        },
        {
            title: 'Interactive Mental Health Chatbot',
            description: 'Sentiment-aware chatbot using GPT-2 and NLP techniques to interact with users and assess mental well-being.',
            tags: ['GPT-2', 'NLP', 'Python'],
            links: { github: '#' }
        },
        {
            title: 'Gadget eCommerce Website',
            description: 'Gadget marketplace with full cart and admin features.',
            tags: ['Next.js', 'Redux Toolkit', 'Django REST API', 'PostgreSQL'],
            links: { github: '#' }
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Featured Projects</h2>

                    <div className="grid-auto-fit">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                whileHover={{ y: -10 }}
                                style={{ display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid transparent' }}
                            >
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'white' }}>{project.title}</h3>
                                <p style={{ color: '#9CA3AF', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} style={{
                                            fontSize: '0.8rem',
                                            padding: '0.3rem 0.8rem',
                                            background: 'rgba(250, 204, 21, 0.1)',
                                            color: 'var(--primary-color)',
                                            borderRadius: '20px',
                                            fontWeight: '500'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.links.github} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '8px' }}>
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
