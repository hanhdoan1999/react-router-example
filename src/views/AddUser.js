import React from 'react';
import Header from './Header';
import { Container,Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";



function AddUser() {

  const [password2,setPassword2] = useState('');
  const [organizations,setOrganizations] = useState(['Công ty A','Công ty B','Công ty C'])
  const [roles,setRoles] = useState(['Nhân Viên','Trưởng Phòng','Bảo vệ']);

  const users = useSelector(state => state.userReducer)
  const dispatch = useDispatch()


  const [user,setUser] = useState({
    id:Date.now(),
    name:'',
    phone:'',
    password:'',
    organization:'',
    role:'',
  })

  const history = useHistory();


  const handleChangeName = (e) => {
    setUser({...user,name : e.target.value})
  }
  const handleChangePhone = (e) => {
    setUser({...user,phone : e.target.value})
  }

  const handleChangeOrganization = (e) => {
    setUser({...user,organization : e.target.value})
  }

  const handleChangePassword = (e) => {
    setUser({...user,password : e.target.value})
  }

  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value)
  }

  const handleChangeRole = (e) => {
    setUser({...user,role : e.target.value})
  }

  const handleAddUser = (e) => {
      e.preventDefault();
      dispatch({type:'ADD_USER',payload:user})
      const path = '/admin/list-user'; 
      history.push(path);
    
  }

    return (
      <>
        <Container fluid className="bg">
        <Header/>
          <div className = "addForm">
            <div className="formHeader">
                <div className="d-flex">
                  <div className="logo"></div>
                  <div className="d-flex">

                  </div>
                </div>
            </div>
            <div className="formContent">
              <h3>Thêm mới người sử dụng</h3>
            <Form onSubmit={handleAddUser}>
              <Form.Group className="mb-3">
                <Form.Label>Họ tên</Form.Label>
                <Form.Control type="text" placeholder="Họ và tên" value={user.name} onChange={e=> handleChangeName(e)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control type="text" placeholder="Số điện thoại" value={user.phone} onChange={e=> handleChangePhone(e)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Mật khẩu" value={user.password} onChange={e=> handleChangePassword(e)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nhập lại mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Mật khẩu" value={password2} onChange={e=> handleChangePassword2(e)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tổ chức</Form.Label>
                <Form.Control as="select" defaultValue="Tổ chức" onChange={e=> handleChangeOrganization(e)}>
                  {organizations.map((organization,index) => <option  key={index} value={user.organization}>{organization}</option>)}
              </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Vai trò</Form.Label>
                <Form.Control as="select" defaultValue="Tổ chức"  onChange={e=> handleChangeRole(e)}>
                  {roles.map((role,index) => <option key={index} value ={user.role}>{role}</option>)}
                </Form.Control>
              </Form.Group>                           
              <Button variant="primary" type="submit" disabled>
                Submit
              </Button>
            </Form>
            </div>
          </div>
        </Container>
      </>
    )
}

export default AddUser

