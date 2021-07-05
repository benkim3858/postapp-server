import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const Detail = ({ match, history }) => {
  const id = match.params.id;
  const [onePost, setOnePost] = useState({
    id: "",
    title: "",
    content: "",
    author: "",
    created: "",
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/post/" + id,
    })
      .then((res) => {
        console.log("GET 통신 성공");
        console.log(res);
        setOnePost(res.data.data);
      })
      .catch((error) => {});
  }, []);

  const Update = () => {
    history.push(`/post/${id}/update`);
  };

  return (
    <Card id={onePost.id}>
      <Card.Header as="h5">{onePost.author}</Card.Header>
      <Card.Body>
        <Card.Title>{onePost.title}</Card.Title>
        <Card.Text>{onePost.content}</Card.Text>
        <Button variant="primary" onClick={Update}>
          게시글 수정하기
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Detail;
