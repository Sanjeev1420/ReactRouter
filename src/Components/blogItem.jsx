/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Stylesheets/blogItem.css";
import Card from "react-bootstrap/Card";

const BlogItem = (props) => {
  return (
    <a href={props.data.link} target="_blank" rel="noopener noreferrer">
      <Card className="custom-card">
        <Card.Img variant='top' src={props.data.img} />
        <Card.Body>
          <Card.Title>{props.data.header}</Card.Title>
          <Card.Text>{props.data.description}<span style={{"color":"rgb(21, 210, 21)"}}> Read more...</span></Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.data.postedOn}</small>
        </Card.Footer>
      </Card>
    </a>
  );
};

export default BlogItem;
