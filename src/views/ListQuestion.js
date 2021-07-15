import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Table, Container} from 'react-bootstrap';
import Header from './Header';
import { FaRegTrashAlt,FaRegEdit,FaExpandAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'



function ListQuestion() {
        const questions = useSelector(state => state.questionReducer)
        const dispatch = useDispatch();
        console.log(questions);



    // const handleUpdateQuestion = (user) => {
    //     console.log('handleUpdateQuestion',user);
    // }

    const handleDeleteQuestion = (user) => {
        dispatch({type:'DELETE_QUESTION',payload:user.id})
        console.log('handleDeleteQuestion',user);
    }


    return (
     <>   
        <Container fluid>
        <Header/>
        <div className="d-flex justify-content-end">
            <Link to='/admin/add-question' className="btn btn-primary m-3">Thêm câu hỏi</Link>
        </div>
    
        <Table  bordered > 
        {/* striped hover */}
            <thead className="text-center">
                <tr>
                <th>STT</th>
                <th>Nhóm</th>
                <th>Nội dung</th>
                <th>Lựa chọn</th>
                {/* <th>Khuyến Cáo</th> */}
                <th colSpan="3">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((q,index)=>
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{q.group}</td>
                                <td style={{maxWidth: 250}}>{q.content}</td>
                                <td>{q.options.map((el,index) => <span className="d-block" key={index}>{el}</span>)}</td>                             
                                {/* <td>{q.advise}</td> */}
                                <td className="text-center align-middle"><Link to={`/admin/list-question/${q.id}`}><FaExpandAlt/></Link></td>
                                <td className="text-center align-middle"><Link to={`/admin/list-question/edit/${q.id}`}><FaRegEdit/></Link></td>
                                <td className="text-center align-middle"><FaRegTrashAlt className="icon" onClick={() => handleDeleteQuestion(q)}/></td>
                                </tr>
                )}

            </tbody>
        </Table>
        </Container>
    </>
    )
}

export default ListQuestion
