import React from 'react'
import './layout.css'
import PropTypes from 'prop-types'
import Navbar from '../../navbar/navbar'

const Layoutv1 = ({children}) => {
  return (
    <div className='container'>
        {/* navbar */}
        <Navbar />
        {/* main section */}
        <main>
            {children}
        </main>
    </div>
  );
};

Layoutv1.propTypes = {
  children: PropTypes.element,
};
export default Layoutv1;