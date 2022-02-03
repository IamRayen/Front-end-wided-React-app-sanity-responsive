import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

const Article = () => {
    const [article, setArticle] = useState(null);
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const { slug } = useParams();    
    const urlFor = (source) => {
        return builder.image(source);
    };

    useEffect(() => {
            const Function = async () => {
                try {
                    const data =
                        await client.fetch(`*[slug.current == $slug]{
                        title,
                        introduction,
                        slug,
                        mainImage{
                            asset->{
                                _id,
                                url
                            }
                        },
                        publishedAt,
                        body,
                    }`,{ slug });
                    setArticle(data[0]);
                } catch (error) {
                    console.log(error);
                }
            };
            Function();
        }, [slug]);
    return (
        <div className="container-xl border">
            <div
                className="row"
            >
                <div className="col-6 border text-center">
                    {article && <img
                        src={urlFor(article.mainImage)
                            .height(550)
                            .width(450)
                            .quality(80)
                            .url()}
                        alt="Main Image"
                    />}
                </div>
                <div className="col-6 border">
                    <div className="row border display-2">{article && article.title}</div>
                    <div className="row border display-6 align-items-center">{article && article.introduction}</div>
                </div>
            </div>
            <div
                className="container-xl ps-5 pe-5"
                style={{maxWidth:"1000px"}}
            >
                <BlockContent
                 blocks={article && article.body}
                 />
            </div>
        </div>
    );
};

export default Article;
