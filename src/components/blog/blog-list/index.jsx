import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {

  state = {
    post: []
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:3002/posts")
    const posts = await res.json()
    //console.log(posts)
    this.setState({ posts })
  }

  render() {
    return (
      <Row>
        {posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
