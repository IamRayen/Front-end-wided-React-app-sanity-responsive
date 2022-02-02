import React from "react";
import { Card } from "react-bootstrap";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticles = () => {
    return (
            <div className="skeleton-article">
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
            </div>
    );
};

export default SkeletonArticles;
