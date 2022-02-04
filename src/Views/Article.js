import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import SkeletonArticle from "../Skeletons/SkeletonArticle";

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
                const data = await client.fetch(
                    `*[slug.current == $slug]{
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
                    }`,
                    { slug }
                );
                setArticle(data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        Function();
    }, [slug]);
    return (<div>
        { article ? 
        <div className="container-xl">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-lg-7 px-5">
                    <h1 className="title">
                        {article && article.title}
                    </h1>
                    <p className="d-flex intro">
                        {article && article.introduction}
                    </p>
                </div>
                <div className="col-12 col-lg-5 text-center">
                    {article && (
                        <img
                            src={urlFor(article.mainImage)
                                .height(550)
                                .width(450)
                                .quality(80)
                                .url()}
                            alt="MainImage"
                        />
                    )}
                </div>
            </div>
            <div
                className="container-xl px-md-5 mt-md-5 mt-2"
                style={{ maxWidth: "900px" }}
            >
                <BlockContent blocks={article && article.body} className="roboto" />
            </div>
        </div> : <SkeletonArticle/>}
        </div>
    );
};

export default Article;
