import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import client from "../client";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
import SkeletonArticles from "../Skeletons/SkeletonArticles";
import Aos from "aos";
import "aos/dist/aos.css";

const Articles = () => {
    const [articles, setArticles] = useState(null);

    const builder = imageUrlBuilder(myConfiguredSanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    };

    useEffect(() => {
        const Function = async () => {
            try {
                const data =
                    await client.fetch(`*[_type == "post"] | order(publishedAt desc,title) {
                    title,
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
                setArticles(data);
                Aos.init({});
            } catch (error) {
                console.log(error);
            }
        };
        Function()
    }, []);

    const fixDate = (dateToFix) => {
        const datetime = new Date(dateToFix);
        const truedate = datetime.toLocaleString([], {
            dateStyle: "medium",
            timeStyle: "short",
        });
        return truedate;
    };

    return (
        <div className="container-xl d-flex justify-content-evenly flex-wrap">
            {articles &&
                articles.map((post) => (
                    <Link
                        to={"/post/" + post.slug.current}
                        key={post.slug.current}
                        style={{ textDecoration: "none" }}
                    >
                        <Card
                            className="Cards"
                            data-aos="fade-up"
                            style={{ width: "350px", marginBottom: "40px",border:"white" }}
                        >
                            <Card.Img
                                variant="top"
                                src={urlFor(post.mainImage)
                                    .height(400)
                                    .width(350)
                                    .quality(80)
                                    .url()}
                                className="img-fluid"
                            />

                            <Card.Body>
                                <Card.Title style={{ color: "black" }}>
                                    {post.title}
                                </Card.Title>
                                <Card.Text style={{ color: "grey" }}>
                                    {post.introduction}
                                </Card.Text>
                                <Button
                                    variant="dark"
                                    style={{ borderRadius: "0" }}
                                >
                                    Go To Article
                                </Button>
                            </Card.Body>

                            <Card.Footer>
                                <small className="text-muted">
                                    {fixDate(post.publishedAt)}
                                </small>
                            </Card.Footer>
                        </Card>
                    </Link>
                ))}
            {!articles && [1, 2, 3, 4, 5, 6].map((el) => <SkeletonArticles />)}
        </div>
    );
};

export default Articles;
