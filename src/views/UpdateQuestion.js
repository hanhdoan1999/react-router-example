import React from 'react';
import Header from './Header';
import  {useParams} from 'react-router-dom'

function UpdateQuestion() {
    const {id} = useParams();
    return (
        <div>
            <Header/>
            <h2>Update Question ID: {id}</h2>
        </div>
    )
}

export default UpdateQuestion
