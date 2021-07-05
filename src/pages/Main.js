import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Tbody from "../components/Tbody";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/post",
    })
      .then((res) => {
        console.log(res);
        setPosts(res.data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>작성자</th>
          <th>글 제목</th>
          <th>글 내용</th>
          <th>게시글 날짜</th>
        </tr>
      </thead>
      {posts.map((post) => (
        <Tbody key={post.id} post={post} />
      ))}
    </Table>
  );
};

export default Main;
