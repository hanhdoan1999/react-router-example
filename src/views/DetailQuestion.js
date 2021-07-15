import React from 'react'
import Header from './Header'
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Form,Button} from 'react-bootstrap'

function DetailQuestion() {
     
    const {id} = useParams();
    const survays = useSelector(state => state.questionReducer)
    const survay = survays.filter(el => el.id == id)

    const history = useHistory();
 
    return (
        <>
        <Header/>
        <div className="survay-detail">
        <h3>ID Question - {id}</h3>
            <img src={survay[0].img} alt="Survay" className="rounded mx-auto d-block"/>
            <h4 className="text-uppercase mt-3">Nội dung khảo sát:</h4>
            <p>{survay[0].content}</p>
            <h5>Lựa chọn</h5>
            <Form>
            <Form.Group>
                {survay[0].options.filter(item => item !=="").map((s,index) =>
                  
                <Form.Check key={index}>
                    <Form.Check.Input type='radio' name="group1"/>
                    <Form.Check.Label>{s}</Form.Check.Label>
                </Form.Check>
                )}   
            </Form.Group>
            <h5>Khuyến cáo</h5>
            <p>{survay[0].advise}</p>
            <Button type="button" onClick={() => history.goBack()}>
                Trở lại
            </Button>
            </Form>
        </div>
            
        </>
    )
}

export default DetailQuestion

