import React, { useState,useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import client from "../client";
import {Link} from "react-router-dom"

const Articles = () => {
    const [articles, setArticles] = useState(null);
    useEffect( async () => {
        try {
            const data = await client.fetch(`*[_type == "post"] | order(publishedAt,title) {
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
            }`)
            setArticles(data)
        } catch (error) {
            console.log(error);
        } 
    }, []);
    console.log(articles);
    
    return (
        <div className="container-xl border d-flex justify-content-evenly flex-wrap">
                    {articles && articles.map((post) => (
                        <Link to={"/post/"+post.slug.current} key={post.slug.current} style={{textDecoration:"none"}}>
            <Card style={{width:"350px"}}>
                <Card.Img variant="top" src={post.mainImage.asset.url} className="img-fluid" style={{objectFit:"cover",height:"400px",overflow:"hidden"}} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text style={{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"100px",border:"1px solid"}}>
                        {post.introduction}
                    </Card.Text>
                    <Button variant="primary">Go To Article</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Last updated 3 mins ago
                    </small>
                </Card.Footer>
            </Card>
            </Link>
            ))}
        </div>
    );
};

export default Articles;
