import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Form } from "react-bootstrap";

const UpdatePage = ({ match, history }) => {
  const id = match.params.id;
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/post/" + id,
    })
      .then((res) => {
        console.log(res);
        setPost(res.data.data);
      })
      .catch((error) => {});
  }, []);

  console.log(post);

  const changeValue = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const deletePost = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:8000/post/" + id,
    })
      .then((res) => {
        console.log(res);
        if (res.data.code === 1) {
          history.push("/main");
        } else {
          alert("삭제 실패");
        }
      })
      .catch((error) => {});
  };

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: "PUT",
      headers: { "content-type": "application/json; charset=utf-8" },
      data: JSON.stringify(post),
      url: "http://localhost:8000/post/" + id,
    })
      .then((res) => {
        console.log(res);
        history.push("/main");
        alert("삭제 완료");
      })
      .catch((error) => {
        alert("수정 실패");
        console.log(error);
      });
  };
  return (
    <Card id={post.id}>
      <Card.Header as="h5">{post.author}</Card.Header>
      <Card.Body>
        <input
          type="text"
          name="title"
          onChange={changeValue}
          value={post.title}
        />
        <br />
        <input
          type="text"
          name="content"
          onChange={changeValue}
          value={post.content}
        />
        <br />

        <Button variant="primary" onClick={submit}>
          게시글 수정하기
        </Button>
        <Button variant="primary" onClick={deletePost}>
          게시글 삭제하기
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UpdatePage;
