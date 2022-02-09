import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
import "./painting.css"
import { useSwipeable } from 'react-swipeable';

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
    const handlers = useSwipeable({
        onSwipedLeft: NextSlide,
        onSwipedRight: PrevSlide,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    console.log(slide);
    console.log(paintings);
    return (<div>
        {show ? <div {...handlers} className={`Carousel d-flex justify-content-center align-items-center container-fluid`}>
        <label><i type="button" class="h1 bi bi-x-lg" onClick={handleClose}></i></label>
        <label><i type="button" className="bi h1 bi-arrow-left" onClick={PrevSlide}></i></label>
        <label><i type="button" className="bi h1 bi-arrow-right" onClick={NextSlide}></i></label>
        {paintings && paintings.map((Slide,index)=>{
            return (
                <div className={slide === index ? "active-slide container-fluid" : "slide"} key={index}>
                    {index === slide && <div className="d-flex justify-content-evenly flex-wrap"> <img src={urlFor(Slide.mainImage)
                .height(650)
                .width(500)
                .quality(80)
                .url()
                } alt="img" 
                className="image img-fluid px-4"
                />
                <p className="text align-self-center display-6 p-1 px-4">{Slide.introduction}</p>
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
