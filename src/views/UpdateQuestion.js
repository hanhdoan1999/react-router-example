
import React from 'react'
import Header from './Header'
import { Form, Button, Col, Row,InputGroup,FormControl } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {useHistory, useParams } from 'react-router-dom'

function UpdateQuestion() {
    const dispatch = useDispatch();
    let history = useHistory();
    const {id} = useParams();

    const survays = useSelector(state => state.questionReducer)
    const survay = survays.filter(el => el.id == id)
    console.log(survay);


    const [groupQuestions] = useState(['Nhóm 1', 'Nhóm 2', ' Nhóm 3', 'Nhóm 4']);
    const [group,setGroup] = useState(survay[0].group)
    const [content,setContent] = useState(survay[0].content);
    const [option1,setOption1] = useState(survay[0].options[0]);
    const [option2,setOption2] = useState(survay[0].options[1]);
    const [option3,setOption3] = useState(survay[0].options[2]);
    const [option4,setOption4] = useState(survay[0].options[3]);
    const [options,setOptions] = useState([survay[0].options]);
    const [img,setImg] = useState(survay[0].img);
    const [advise,setAdvise] = useState(survay[0].advise);

    const [validated, setValidated] = useState(false);



    const handleChangeGroup= (e) => {
        setGroup(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleChangeOption1 = (e) => {
        e.preventDefault();
        setOption1(e.target.value)
    }

    const handleChangeOption2 = (e) => {
        setOption2(e.target.value)
    }

    const handleChangeOption3 = (e) => {
        setOption3(e.target.value)
    }

    const handleChangeOption4 = (e) => {
        setOption4(e.target.value)
    }

    const handleImg = (e) => {
        setImg(e.target.value)
    }

    const handleChangeAdvise = (e) => {
        setAdvise(e.target.value)
    }



    const resetForm = () => {
        // setGroup(groupQuestions[0]);
        setContent('');
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
        setOptions('');
        setImg('');
        setAdvise('');
    }

    const handlUpdateQuestion = (event) => {
     event.preventDefault();
     const form = event.currentTarget;
     console.log(form);
     if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('Nhập thông tin')
     } else {
        // setOptions(options.push(option1, option2, option3, option4))
        dispatch({type:'UPDATE_QUESTION',payload:{
            "id": id,
            "group": group,
            "content": content,
            "options": options,
            "img": img,
            "advise": advise
            
        }})
        // console.log("update-question", id,  group, content, options, img ,advise);
        setValidated(true);        
        resetForm();
        alert('Cập nhật thành công !');
        history.push('/admin/list-question')
     }
    }

    return (
        <>
            <Header />
            <div className="addForm">
            <h2>Update Question ID: {id}</h2>
                <Form noValidate validated={validated} onSubmit={handlUpdateQuestion}>
                    <Form.Group className="mb-2">
                        <Form.Label>Nhóm câu hỏi</Form.Label>
                        <Form.Control required as="select" defaultValue={group} onChange={handleChangeGroup}>
                            {groupQuestions.map((question, index) => <option key={index} value={question}>{question}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Label>Nội dung câu hỏi</Form.Label>
                        <Form.Control required as="textarea" rows={3} placeholder="Vd: Bạn có đeo khẩu trang khi làm việc không ?" value={content} onChange={handleChangeContent} />
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                            <InputGroup>
                                <InputGroup.Radio   name="group1" />
                                <FormControl  required type="text" placeholder="Lựa chọn 1" value={option1} onChange={handleChangeOption1} />
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup>
                                <InputGroup.Radio   name="group1" />
                                <FormControl  required type="text" placeholder="Lựa chọn 2" value={option2} onChange={handleChangeOption2}/>
                            </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                            <InputGroup>
                                <InputGroup.Radio   name="group1" />
                                <FormControl  type="text" placeholder="Lựa chọn 3" value={option3} onChange={handleChangeOption3}/>
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup>
                                <InputGroup.Radio   name="group1" />
                                <FormControl  type="text" placeholder="Lựa chọn 4" value={option4} onChange={handleChangeOption4}/>
                            </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Hình ảnh</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl required
                            placeholder="Liên kết" type="text" value={img} onChange={handleImg}
                            />
                            <Button variant="primary" disabled>
                            Chọn
                            </Button>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Khuyến cáo</Form.Label>
                        <Form.Control required type="text" placeholder="Vd: Bạn nên đeo khẩu trang lúc làm việc ... " value={advise} onChange={handleChangeAdvise}/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group> 
                    <Form.Group >
                            <Button onClick={resetForm} variant="outline-primary" type="button">
                                Xóa
                            </Button>       
                            <Button className="ml-3" variant="primary" type="submit" disabled>
                                Cập nhật
                            </Button>
                    </Form.Group>                       
                </Form>
            </div>
        </>
    )
}

export default UpdateQuestion
