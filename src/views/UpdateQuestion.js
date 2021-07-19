import React from 'react'
import Header from './Header'
import { Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { actAddQuestion } from '../redux/actions/index'

function UpdateQuestion() {
    const dispatch = useDispatch();
    let history = useHistory();
    const {id} = useParams();

    const survays = useSelector(state => state.questionReducer);
    const survay = survays.find(el => el.id == id)
    console.log('survay',survay);



    const [groupQuestions] = useState(['Nhóm 1', 'Nhóm 2', ' Nhóm 3', 'Nhóm 4']);
    const [group, setGroup] = useState(survay.group)
    const [content, setContent] = useState(survay.content);
    const [img, setImg] = useState(survay.img);
    const [advise, setAdvise] = useState(survay.advise);
    const [validated, setValidated] = useState(false);

    //TEST
    const [optionss, setOptionss] = useState(survay.options);

    const handleChangeGroup = (e) => {
        setGroup(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleImg = (e) => {
        setImg(e.target.value)
    }

    const handleChangeAdvise = (e) => {
        setAdvise(e.target.value)
    }

    const resetForm = () => {
        setContent('');
        setOptionss('');
        setImg('');
        setAdvise('');
    }

    const handleChangeRadio = () => {
        console.log('change');
    }

    const handleChangeText = () => {
        console.log('change');
    }

    const handleAddQuestion = (event) => {
        event.preventDefault();
        // let trueOption = optionss.filter(el => el.check===true)
        let trueOption = optionss.find(el => el.check === true)
        const form = event.currentTarget;
        console.log(form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert('Nhập thông tin')
            if (!trueOption || trueOption.value === '') { alert('Chọn hoặc nhập đáp án!!!') }
        } else {
            dispatch(actAddQuestion({
                "id": Date.now(),
                "group": group,
                "content": content,
                "options": optionss.map(el => el.value),
                "trueOption": trueOption.value,
                "img": img,
                "advise": advise
            }))
            console.log("add-question", optionss, trueOption, group, content, img, advise);
            setValidated(true);
            resetForm();
            alert('Thêm mới thành công !');
            history.push('/admin/list-question')
        }
    }

    return (
        <>
            <Header />
            <div className="add-form shadow">
                <h4 className="text-title ">Update Question ID - {id}</h4>
                <Form noValidate validated={validated} onSubmit={handleAddQuestion}>
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
                    <Form.Group className="d-flex flex-wrap " disabled>
                        {optionss.map((item, index) =>
                            <InputGroup key={index} className="w-50 mt-3 p-1">
                                <InputGroup.Radio name="group1" value={item} checked={item===survay.trueOption ? true : false}  onChange={handleChangeRadio}/>
                                <FormControl required type="text" placeholder={`Lựa chọn ${index + 1}`} value={item} onChange={handleChangeText} />
                            </InputGroup>
                        )}
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
                        <Form.Control required type="text" placeholder="Vd: Bạn nên đeo khẩu trang lúc làm việc ... " value={advise} onChange={handleChangeAdvise} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Row>
                            <Col>
                        <Button onClick={resetForm} variant="outline-primary" type="button" className="rounded-pill w-100" disabled >
                            Xóa
                        </Button>
                        </Col>
                        <Col>
                        <Button variant="primary" className="rounded-pill w-100" type="submit" disabled>
                            Cập nhật
                        </Button>
                        </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default UpdateQuestion
