import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'GEONUSAF (Ongoing)',
            description: 'Urban sustainability research integrating satellite and urban data to model urban growth, green space distribution, and infrastructure patterns for smart city sustainability forecasting.',
            tags: ['Research', 'Geospatial Analysis', 'Sustainability', 'Smart City'],
            // links: { github: '#' }
        },
        {
            title: 'MedLORA',
            description: 'Developed a LoRA-augmented ConvNeXtV2 medical image classifier for endoscopy datasets namely (Kvasir-Capsule, GastroVision), improving performance over baseline CNNs and hybrid architectures with compute-efficient fine-tuning.',
            tags: ['Deep Learning', 'Computer Vision', 'Medical AI', 'LoRA', 'ConvNeXtV2'],
            // links: { github: '#' }
        },
        {
            title: 'Agentic Tour Planner',
            description: 'Built a stateful LangGraph and FastAPI service for automated tour planning and policy RAG. Orchestrated intent-based routing with Gemini/Pydantic to manage structured data retrieval from Pinecone (with Cross-Encoder reranking) and PostgreSQL for user profiles and booking records. Integrated Redis for multi-turn chat memory and secure JWT-based authentication.',
            tags: ['LangGraph', 'FastAPI', 'RAG', 'Pinecone', 'Gemini', 'Redis'],
            links: { github: 'https://github.com/RAJ-Git18/agentic-tour-planner' }
        },
        {
            title: 'NepaliSentimentML',
            description: 'A classical machine learning project that performs sentiment classification on Nepali text using SentenceTransformer embeddings and classical ML models such as XGBoost and Logistic Regression. This consist of a fastapi endpoint to analyze the sentiment of the user on the basis of the given text in nepali.',
            tags: ['Machine Learning', 'NLP', 'FastAPI', 'XGBoost', 'SentenceTransformers'],
            links: { github: 'https://github.com/RAJ-Git18/NepaliSentimentML' }
        },
        {
            title: 'Life Expectancy Prediction',
            description: 'Built a full ML pipeline using global socio-economic data. Performed preprocessing, feature analysis, and applied Linear, Ridge, Lasso, RF, and XGBoost to identify top predictors and optimize regression performance.',
            tags: ['Machine Learning', 'Python', 'XGBoost', 'Data Analysis'],
            links: { github: 'https://github.com/RAJ-Git18/life_expectancy' }
        },
        {
            title: 'Multi-Domain RAG AI Assistant',
            description: 'Created a FastAPI microservice using RAG for travel and AI development queries. Integrated vector search, similarity-based pipeline selection, and structured JSON outputs for dynamic, domain-aware responses.',
            tags: ['FastAPI', 'RAG', 'AI', 'Vector Search'],
            links: { github: 'https://github.com/RAJ-Git18/AI-Powered-Document-RAG-Booking-System' }
        },
        {
            title: 'Interactive Mental Health Chatbot',
            description: 'Implemented a sentiment-aware GPT-2 chatbot to analyze user mood and provide supportive conversational responses.',
            tags: ['GPT-2', 'NLP', 'Python', 'Chatbot'],
            links: { github: 'https://github.com/RAJ-Git18/Interactive-Chatbot' }
        },
        {
            title: 'Gadget & Pharmalife eCommerce Website',
            description: 'Developed dual e-commerce platforms using Next.js, Redux Toolkit, Django REST, and PostgreSQL with full cart, authentication, and admin dashboards.',
            tags: ['Next.js', 'Redux Toolkit', 'Django REST', 'PostgreSQL'],
            links: { github: 'https://github.com/RAJ-Git18/gadget_ecommerce' }
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
                                    {project.links?.github && (
                                        <a href={project.links.github} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '8px' }}>
                                            <FaGithub /> Code
                                        </a>
                                    )}
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
