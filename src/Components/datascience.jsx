
import React from "react";
import BlogItem from "./blogItem";
import Row from "react-bootstrap/Row";

const DataScience = (props) => {
  return (
    <div style={{ margin: "0px 20px 25px 20px" }}>
      <Row xs={3} md={4} className='g-4'>
        {props.data.map((item) => (
          <BlogItem data={item} />
        ))}
      </Row>
    </div>
  );
};

export default DataScience;
