import React from 'react'
import {useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import Header from './Header';


function ListUser() {
        const user = useSelector(state => state.userReducer)
        console.log(user);
    return (
     <>
        <Header/>
        <div className="mx-3 my-4 px-4 py-2 bg-white rounded shadow" > 
        <p className="text-title py-1">Kết quả: Đợt khảo sát A</p>
            <Table className="table table-hover" responsive >
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
        </div>
    </>
    )
}

export default ListUser
