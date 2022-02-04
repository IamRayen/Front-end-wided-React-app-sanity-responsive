import React from 'react';
import "./SkeletonElement.css";
import Shimmer from './Shimmer';

const SkeletonElement = ({type}) => {
    const classes = `skeleton ${type}`

    return <div className={classes}>
    </div>;
};

export default SkeletonElement;
