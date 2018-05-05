import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer className={`Footer ${props.theClasses}`}>
    <span className="Footer__info">i</span>
    <div className="Footer__copyright m-quarter-l">Keyrus</div>
  </footer>
);

Footer.defaultProps = {
  theClasses: ''
};

Footer.propTypes = {
  theClasses: PropTypes.string
};

export default Footer;
