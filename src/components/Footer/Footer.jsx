import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '100px' }}>
      &copy; {new Date().getFullYear()} created by <em>Phoenix Bird"</em>
    </footer>
  );
};

export default Footer;
