import React from 'react'
import {useSelector} from 'react-redux';
import {Table, Container} from 'react-bootstrap';
import Header from './Header';


function ListUser() {
        const user = useSelector(state => state.userReducer)
        console.log(user);
    return (
     <>   
        <Container fluid>
        <Header/>
        <Table  bordered >
            <thead>
                <tr>
                <th>STT</th>
                <th>Số điện thoại</th>
                <th>Họ và Tên</th>
                <th>Công Ty</th>
                <th>Chức danh</th>
                <th>Câu hỏi</th>
                <th>Trạng thái</th>
                <th>Trả lời</th>
                <th>Ý kiến</th>
                <th>Ngày trả lời</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user,index)=>
                                <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.phone}</td>
                                <td>{user.name}</td>
                                <td>{user.organization}</td>               
                                <td>{user.role}</td>
                                <td>Bạn có đeo khẩu trang không?</td>
                                <td>Đã trả lời</td>
                                <td>Có</td>
                                <td>Không có ý kiến</td>
                                <td>2021/05/14</td>
                                </tr>
                )}

            </tbody>
        </Table>
        </Container>
    </>
    )
}

export default ListUser
