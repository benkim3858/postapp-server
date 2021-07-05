import axios from "axios";
import React, { useState } from "react";
import { InputGroup, FormControl, Container, Form } from "react-bootstrap";

const Save = (props) => {
  const [postDto, setPostDto] = useState({
    title: "",
    content: "",
  });

  console.log(postDto);

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      data: JSON.stringify(postDto),
      url: "http://localhost:8000/post",
    })
      .then((res) => {
        console.log(res);
        props.history.push("/");
      })
      .catch((error) => {
        alert("글쓰기 실패");
        console.log(error);
      });
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">작성자</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="author"
          onChange={changeValue}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>글 제목</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Amount (to the nearest dollar)"
          name="title"
          onChange={changeValue}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>글 내용 작성</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          aria-label="With textarea"
          name="content"
          onChange={changeValue}
        />
      </InputGroup>
      <button onClick={submit}>글쓰기완료</button>
    </div>
  );
};

export default Save;
