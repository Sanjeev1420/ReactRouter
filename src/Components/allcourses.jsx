
import React from "react";
import BlogItem from "./blogItem";
import Row from "react-bootstrap/Row";

const Allcourses = (props) => {
  console.log(props.data);
  return (
    <div style={{ margin: "0px 20px 25px 20px" }}>
      <Row xs={3} md={4} className='g-4'>
        {Object.values(props.data).map((courses) =>
          courses.map((item) => <BlogItem data={item} />)
        )}
      </Row>
    </div>
  );
};

export default Allcourses;
