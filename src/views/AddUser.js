import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";



function AddUser() {

  const [password2, setPassword2] = useState('');
  const [organizations] = useState(['Công ty A', 'Công ty B', 'Công ty C'])
  const [roles] = useState(['Khách hàng', 'Quản lý']);


  const dispatch = useDispatch()
  const history = useHistory();

  const [user, setUser] = useState({
    id: Date.now(),
    name: '',
    phone: '',
    password: '',
    organization: organizations[0],
    role: roles[0],
  })



  const handleChangeName = (e) => {
    setUser({ ...user, name: e.target.value })
  }
  const handleChangePhone = (e) => {
    setUser({ ...user, phone: e.target.value })
  }

  const handleChangeOrganization = (e) => {
    setUser({ ...user, organization: e.target.value })
  }

  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value)
  }

  const handleChangeRole = (e) => {
    setUser({ ...user, role: e.target.value })
  }

  const handleAddUser = (e) => {
    // if()
    e.preventDefault();
    console.log(user.property)
    dispatch({ type: 'ADD_USER', payload: user })
    const path = '/admin/list-user';
    history.push(path);

  }

  return (
    <>
      {/* <Header/> */}
      <div className="container">
        <div className="row" style={{ height: '100vh' }}>
          <div id="col" className="col-md-12 align-self-center">
            <img src="/assets/images/logo2.png" alt="logo" className="d-block mx-auto my-3" />
            <div className="add-form shadow">
              <h5 className="text-title text-center">Thêm mới người sử dụng</h5>
              <Form onSubmit={handleAddUser}>
                <Form.Group className="mb-2">
                  <Form.Label>Họ tên</Form.Label>
                  <Form.Control type="text" placeholder="Họ và tên" value={user.name} onChange={e => handleChangeName(e)} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control type="text" placeholder="Số điện thoại" value={user.phone} onChange={e => handleChangePhone(e)} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control type="password" placeholder="Mật khẩu" value={user.password} onChange={e => handleChangePassword(e)} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Nhập lại mật khẩu</Form.Label>
                  <Form.Control type="password" placeholder="Mật khẩu" value={password2} onChange={e => handleChangePassword2(e)} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Tổ chức</Form.Label>
                  <Form.Control as="select" onChange={e => handleChangeOrganization(e)}>
                    {organizations.map((organization, index) => <option key={index} value={organization}>{organization}</option>)}
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Vai trò</Form.Label>
                  <Form.Control as="select" onChange={e => handleChangeRole(e)}>
                    {roles.map((role, index) => <option key={index} value={role}>{role}</option>)}
                  </Form.Control>
                </Form.Group>
                <Form.Group className="my-2">
                  <Row>
                    <Col>
                      <Button onClick={() => history.goBack()} variant="outline-primary" className="rounded-pill w-100" type="button">
                        Trở lại
                      </Button>
                    </Col>
                    <Col>
                      <Button  variant="primary" className="rounded-pill w-100" type="submit">
                        Đăng kí
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default AddUser

