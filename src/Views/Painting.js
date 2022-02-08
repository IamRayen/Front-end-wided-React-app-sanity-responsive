import React from "react";
import "./painting.css"

const Painting = ({ paintings, show }) => {
    console.log(paintings);
    return (<div>
        {show ? <div className={`Carousel d-none d-md-block container-fluid border`}>
        <label><i type="button" className="bi h1 bi-arrow-left-circle-fill"></i></label>
        <label><i type="button" className="bi h1 bi-arrow-right-circle-fill"></i></label>
        </div> : null
        }
        </div>
    );
};

export default Painting;
