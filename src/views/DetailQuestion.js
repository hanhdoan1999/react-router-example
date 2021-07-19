import React from 'react'
import Header from './Header'
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Form,Button} from 'react-bootstrap'

function DetailQuestion() {
     
    const {id} = useParams();
    const survays = useSelector(state => state.questionReducer)
    const survay = survays.find(el => el.id == id)
    const history = useHistory();
 
    return (
        <>
        <Header/>
        <div className="survay-detail shadow ">
        <h4>ID Question - {id}</h4>
            <img src={survay.img} alt="Survay" className="rounded mx-auto d-block"/>
            <h5 className="text-uppercase mt-3">Nội dung khảo sát:</h5>
            <p>{survay.content}</p>
            <h5>Lựa chọn</h5>
            <Form>
            <Form.Group>
                {survay.options.filter(item => item !=="").map((s,index) => 
                <Form.Check key={index}>
                    <Form.Check.Input type='radio' name="group1" defaultChecked={(s === survay.trueOption) ? true : false } />
                    <Form.Check.Label>{s}</Form.Check.Label>
                </Form.Check>
                )}   
            </Form.Group>
            <h5>Khuyến cáo</h5>
            <p>{survay.advise}</p>
            <Button type="button" onClick={() => history.goBack()}>
                Trở lại
            </Button>
            </Form>
        </div>
            
        </>
    )
}

export default DetailQuestion

