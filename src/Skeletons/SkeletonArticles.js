import React from "react";
import { Card } from "react-bootstrap";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonArticles = () => {
    return (
            <div className="skeleton-articles">
                <Card style={{ width: "350px" }}>
                    <SkeletonElement type="image"/>
                    <Card.Body>
                        <Card.Title><SkeletonElement type="title"/></Card.Title>
                        <Card.Text>
                            <SkeletonElement type="text"/>
                            <SkeletonElement type="text"/>
                        </Card.Text>
                        <SkeletonElement type="button"/>
                    </Card.Body>
                    <Card.Footer>
                                <small className="text-muted">
                                    <SkeletonElement type="text"/>
                                </small>
                    </Card.Footer>
                </Card>
                <Shimmer/>
            </div>
    );
};

export default SkeletonArticles;
