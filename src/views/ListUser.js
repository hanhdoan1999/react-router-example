import React from 'react'
import {useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import Header from './Header';
import {Link} from 'react-router-dom'


function ListUser() {
        const user = useSelector(state => state.userReducer)
        console.log(user);
    return (
     <>
        <Header/>
        <div className="mx-3 my-4 px-4 py-2 bg-white rounded shadow" >
        <div className="d-flex justify-content-end">
            <Link to='/admin/add-user' className="btn  btn-sm btn-primary m-3">Thêm mới</Link>
        </div>    
            <Table className="table table-hover" responsive >
                <thead>
                    <tr>
                    <th>STT</th>
                    <th>Số điện thoại</th>
                    <th>Họ và Tên</th>
                    <th>Công Ty</th>
                    <th>Chức danh</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user,index)=>
                                    <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.name}</td>
                                    <td>{user.organization}</td>               
                                    <td>{user.role}</td>
                                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    </>
    )
}

export default ListUser
