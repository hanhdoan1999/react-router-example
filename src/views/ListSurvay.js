import React from 'react';
import {useSelector} from 'react-redux';
import {Table, Container} from 'react-bootstrap';
import Header from './Header';
import { Link } from 'react-router-dom';

function ListSurvay() {
        const questions = useSelector(state => state.questionReducer)
        // const dispatch = useDispatch();
        console.log(questions);

    return (
     <>   
        <Container fluid>
        <Header/>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>STT</th>
                <th>Nhóm</th>
                <th>Nội dung</th>
                <th>Trạng thái</th>
                <th>Thực hiện khảo sát</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((q,index)=>
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{q.group}</td>
                                <td>{q.content}</td>
                                <td>Đã trả lời</td>
                                <td><Link to={`/admin/list-survay/${q.id}`}>Tham Gia</Link></td>
                                </tr>
                )}

            </tbody>
        </Table>
        </Container>
    </>
    )
}

export default ListSurvay
