import React from 'react'
import Header from './Header'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Form,Button} from 'react-bootstrap'

function DoSurvay() {
    
    
    const {id} = useParams();
    console.log(id);
    const survays = useSelector(state => state.questionReducer)
    const survay = survays.filter(el => el.id === id.toString())
    console.log(survay);

    

    
    return (
        <>
        <Header/>
        <div className="survay-detail">
        <h3>Do Survay - {id}</h3>
            <img src={survay[0].img} alt="Survay" />
            <p>{survay[0].content}</p>
            <Form>
            <Form.Group>
                {survay[0].options.map((s,index) =>
                  
                <Form.Check key={index}>
                    <Form.Check.Input type='radio' isValid name="group1"/>
                    <Form.Check.Label>{s}</Form.Check.Label>
                </Form.Check>
                )}   
            </Form.Group>
            <Button type="submit" disabled>
                Submit
            </Button>
            </Form>
        </div>
            
        </>
    )
}

export default DoSurvay
