import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
import "./painting.css"

const Painting = ({ setShow, paintings, show, slide,setSlide }) => {
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };
    const length = paintings && paintings.length
    const NextSlide = () =>{
        setSlide(slide === length-1 ? 0 : slide + 1)
    }
    const PrevSlide = () =>{
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }
    const handleClose = () => {
        setShow(false)
        }
    console.log(slide);
    console.log(paintings);
    return (<div>
        {show ? <div className={`Carousel d-flex justify-content-center align-items-center container-fluid`}>
        <label><i type="button" class="h1 bi bi-x-lg" onClick={handleClose}></i></label>
        <label><i type="button" className="bi h1 bi-arrow-left-circle-fill" onClick={PrevSlide}></i></label>
        <label><i type="button" className="bi h1 bi-arrow-right-circle-fill" onClick={NextSlide}></i></label>
        {paintings && paintings.map((Slide,index)=>{
            return (
                <div className={slide === index ? "active-slide container-fluid" : "slide"} key={index}>
                    {index === slide && <div className="d-flex justify-content-evenly flex-wrap"> <img src={urlFor(Slide.mainImage)
                .height(650)
                .width(500)
                .quality(80)
                .url()
                } alt="img" 
                className="image img-fluid"
                />
                <p className="text align-self-center display-6 p-1">{Slide.introduction}</p>
                </div>
                }

                </div>
            )
        })}
        </div> : null
        }
        </div>
    );
};

export default Painting;
