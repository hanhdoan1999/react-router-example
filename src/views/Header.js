import React from "react";
import { useHistory, NavLink } from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Form ,FormControl } from 'react-bootstrap';
import {FaRegArrowAltCircleRight} from "react-icons/fa";

function Header() {

  let history = useHistory();

  const active = { color: "#0259A3", fontWeight:'500' };

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    history.replace('/')
  }

  return (

<Navbar sticky="top" collapseOnSelect expand="lg"  className="shadow-sm bg-white">
  {/* <Container fluid> */}
  <Navbar.Brand href="#home">
    <img src="/assets/images/logo2.png" alt="logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Collapse className="justify-content-center">
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Tìm kiếm..."
        className="mr-2"
        aria-label="Search"
      />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
    <Nav className="me-auto">
          <NavLink activeStyle={active} className="nav-link" to="/news" > Tin Tức </NavLink>
          <NavLink exact  activeStyle={active} className="nav-link" to="/document"> Văn bản </NavLink>
          <NavLink activeStyle={active} className="nav-link" to="/model">Mô hình </NavLink>
    </Nav>
    <NavDropdown title="Quản lý">   
          <NavLink activeStyle={active} className="nav-link" to="/admin/list-user"> Người dùng</NavLink>
          <NavLink  activeStyle={active} className="nav-link" to="/admin/list-question"> Câu hỏi </NavLink>
          <NavLink activeStyle={active} className="nav-link" to="/admin/list-result">Kết quả khảo sát</NavLink>
    </NavDropdown>
    </Navbar.Collapse>
 <Navbar.Collapse className="justify-content-end">
    <img src="/assets/images/user.png" alt="avatar" className="rounded-circle border" />
    <NavDropdown className="user-name"  title="Admin">
          <NavDropdown.Item >
          <NavLink activeStyle={active} className="nav-link" to="/profile"> Profile</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item >
           <span className="m-2 logout-text" onClick={handleLogout}>Logout <FaRegArrowAltCircleRight/></span>
          </NavDropdown.Item>
    </NavDropdown>
    </Navbar.Collapse>
  </Navbar.Collapse>
  {/* </Container> */}
</Navbar>
  )
}
export default Header
