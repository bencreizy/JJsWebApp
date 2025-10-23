import React from 'react';

function SocialIcons() {
  const style = {
    margin: '0 10px',
    color: '#22d3ee',
    textDecoration: 'none',
    fontSize: '1.2rem',
  };

  return (
    <div>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={style}>
        Facebook
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={style}>
        Instagram
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={style}>
        Twitter
      </a>
    </div>
  );
}

export default SocialIcons;
