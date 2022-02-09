import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
import { Card, Button } from "react-bootstrap";
import SkeletonArticles from "../Skeletons/SkeletonArticles";
import client from "../client";
import { Link } from "react-router-dom";
import Painting from "./Painting";
import Aos from "aos";
import "aos/dist/aos.css";

const Paintings = () => {
    const [paintings, setPaintings] = useState(null);
    const [categories, setCategories] = useState(null);

    const builder = imageUrlBuilder(myConfiguredSanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    };

    useEffect(() => {
        const Function = async () => {
            try {
                const data =
                    await client.fetch(`*[_type == "painting"] | order(publishedAt desc,title) {
                    title,
                    categories,
                    introduction,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    publishedAt
                }`);
                const data2 = await client.fetch(`*[_type == "category"]`);
                setPaintings(data);
                setCategories(data2);
                Aos.init({});
            } catch (error) {
                console.log(error);
            }
        };
        Function();
    }, []);

    const fixDate = (dateToFix) => {
        const datetime = new Date(dateToFix);
        const truedate = datetime.toLocaleString([], {
            dateStyle: "medium",
            timeStyle: "short",
        });
        return truedate;
    };
    const Filter = (el) => {
        if (filter === "all") {
            return true;
        } else {
            return el.categories[0]._ref === filter;
        }
    };
    const [filter, setFilter] = useState("all");
    const Checkbox = (el) => {
        el ? setFilter(el._id) : setFilter("all");
    };
    const [show, setShow] = useState(false);
    const [slide, setSlide] = useState(0);
    const handleShow = (index) => {
        setShow(!show)
        setSlide(index)
    }
    return (
        <div>
            <Painting setShow={setShow} show={show} paintings={paintings} slide={slide} setSlide={setSlide}/> 
            <div className="container-lg my-4 categorie d-flex align-items-center flex-wrap">
                <h1 className="display-6 me-5">Categories</h1>
                <div className="container-lg d-flex justify-content-center col flex-wrap">
                    <label className="px-4 d-flex align-items-center flex-nowrap">
                        <input
                            onClick={() => Checkbox()}
                            className="Radio"
                            defaultChecked
                            type="radio"
                            name="123"
                        />
                        <span className="checkmark">all</span>
                    </label>
                    {categories &&
                        categories.map((el) => (
                            <label className="px-4 d-flex align-items-center">
                                <input
                                className="Radio"
                                    onClick={() => Checkbox(el)}
                                    type="radio"
                                    name="123"
                                />
                                <span className="checkmark">{el.title}</span>
                            </label>
                        ))}
                </div>
            </div>
            <div className="container-xl d-flex justify-content-evenly flex-wrap">
                {paintings &&
                    paintings
                        .filter((el) => Filter(el))
                        .map((painting,index) => (
                            <Link
                                to=""
                                onClick={()=>handleShow(index)}
                                key={painting.slug.current}
                                style={{ textDecoration: "none" }}
                            >
                                <Card
                                    className="Cards"
                                    data-aos="fade-up"
                                    style={{
                                        width: "350px",
                                        marginBottom: "40px",
                                        border: "white",
                                    }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={urlFor(painting.mainImage)
                                            .height(400)
                                            .width(350)
                                            .quality(80)
                                            .url()}
                                        className="img-fluid"
                                    />

                                    <Card.Body>
                                        <Card.Title style={{ color: "black" }}>
                                            {painting.title}
                                        </Card.Title>
                                        <Card.Text style={{ color: "grey" }}>
                                            {painting.introduction}
                                        </Card.Text>
                                        <Button
                                            variant="dark"
                                            style={{ borderRadius: "0" }}
                                        >
                                            Go To Painting
                                        </Button>
                                    </Card.Body>

                                    <Card.Footer>
                                        <small className="text-muted">
                                            {fixDate(painting.publishedAt)}
                                        </small>
                                    </Card.Footer>
                                </Card>
                            </Link>
                        ))}
                {!paintings &&
                    [1, 2, 3, 4, 5, 6].map((el) => <SkeletonArticles />)}
            </div>
        </div>
    );
};

export default Paintings;
