import React from 'react';

const MovieCardPlaceholder = ({ title = "No Poster Available" }) => {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '2 / 3',
      backgroundColor: '#1e293b',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'col',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      boxSizing: 'border-box',
      border: '1px solid #334155',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#64748b" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ marginBottom: '12px' }}
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18M17 3v18M3 7h4M3 12h4M3 17h4M17 7h4M17 12h4M17 17h4" />
      </svg>
      
      <span style={{
        color: '#94a3b8',
        fontSize: '14px',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        fontWeight: '500'
      }}>
        {title}
      </span>
    </div>
  );
};

export default MovieCardPlaceholder;