import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { getAllBlogAction } from "../../Redux/Action/blogAction";
import { deleteBlog } from "../../Redux/Action/blogAction";

const AdminScreen = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.getAllBlogReducer);

  const { blogs } = blogState;

  useEffect(() => {
    dispatch(getAllBlogAction());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Blogs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/admin/addblog">
                  <Nav.Link>
                    <Button>Add Blog</Button>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Blog Title</th>
              <th>Status</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.status}</td>
                  <td>{blog.order}</td>
                  <td>
                    <Button>Edit</Button> &nbsp; &nbsp;
                    <Button onClick={() => dispatch(deleteBlog(blog._id))}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AdminScreen;
