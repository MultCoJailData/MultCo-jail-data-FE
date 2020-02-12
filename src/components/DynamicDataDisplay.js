import React from 'react';
import PropTypes from 'prop-types';
import styles from './DynamicDataDisplay.css';


const DynamicDataDisplay = ({ children, hook }) => {
  const { data } = hook();
  return (
    
    <div className={styles.DynamicDataDisplay}>
      <h2>{children}</h2>
      <p>{data.toFixed(1)}</p>
    </div>
  );
};

DynamicDataDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired
};

export default DynamicDataDisplay;
