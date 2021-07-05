import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/main">Post</Nav.Link>
            <NavDropdown title="Post Option" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/post">게시글 작성</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                게시글 수정
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">회원 정보</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">회원가입</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              로그인
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/post">글쓰기</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;
