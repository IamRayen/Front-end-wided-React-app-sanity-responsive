import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonArticle = () => {
  return (
       <div className="container-xl skeleton-article">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-lg-7 px-5">
                    <SkeletonElement type="title"/>
                    <p className="d-flex intro">
                    <SkeletonElement type="text"/>
                    </p>
                    <Shimmer/>
                </div>
                <div className="col-12 col-lg-5 text-center">
                <SkeletonElement type="image"/>
                <Shimmer/>
                </div>
                
            </div>
            <div
                className="container-xl px-md-5 mt-md-5 mt-2"
                style={{ maxWidth: "900px" }}
            >
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/><br />
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/><br />
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <Shimmer/>
            </div>
        </div>
  )
};

export default SkeletonArticle;
