import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            {" "}
            <Card style={{ marginTop: "50px" }}>
              <Card.Img variant="top" src="/images/blog1.jpg" />
              <Card.Body>
                <Card.Title>Evernote News</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            {" "}
            <Card style={{ marginTop: "50px" }}>
              <Card.Img variant="top" src="/images/blog2.jpg" />
              <Card.Body>
                <Card.Title>Evernote News</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: "50px" }}>
              <Card.Img variant="top" src="/images/blog3.jpg" />
              <Card.Body>
                <Card.Title>Evernote News</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
