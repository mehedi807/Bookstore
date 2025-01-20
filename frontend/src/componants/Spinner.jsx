/* eslint-disable no-unused-vars */
import React from 'react';
import './Spinner.css'
const BouncingDots = () => {
    return (
        <div className="loader-container ">
            <div className="dot bg-red-500"></div>
            <div className="dot bg-orange-500"></div>
            <div className="dot bg-yellow-500"></div>
            <div className="dot bg-lime-500"></div>
        </div>
    );
};

export default BouncingDots;
