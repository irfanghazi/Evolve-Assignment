import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../Redux/Action/blogAction";
import {
  Container,
  Form,
  FloatingLabel,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const AddNewBlog = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(" ");
  const [status, setStatus] = useState(" ");
  const [order, setOrder] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    const blogging = {
      title,
      status,
      order,
    };
    console.log(blogging);
    dispatch(addBlog(blogging));
  };
  return (
    <>
      <Container>
        <h3>Add Blog</h3>
        <>
          <Form onSubmit={submitForm}>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Write your blog"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px", marginTop: "20px" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FloatingLabel>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" style={{ marginTop: "20px" }}>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" style={{ marginTop: "20px" }}>
                  <Form.Label>Order</Form.Label>
                  <Form.Control
                    type="text"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Add New
            </Button>
          </Form>
        </>
      </Container>
    </>
  );
};

export default AddNewBlog;
