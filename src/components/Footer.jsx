import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: 'black' }}>
            <div className="container">
                <p style={{ color: '#666' }}>
                    &copy; {new Date().getFullYear()} Raj Simkhada. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
