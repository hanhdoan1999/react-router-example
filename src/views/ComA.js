import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ComA = () => {
    const data = useSelector(state => state.reducer1);
    const dispatch = useDispatch();
    console.log({data});
    
    function updateNumber() {
        dispatch({type: 'UPDATE_NUMBER', payload: data.number + 1})    }
    
    return (
        <div>
            <p>Com A Number: {data.number}</p>
            <button onClick={updateNumber}>Update Number</button>
        </div>
    )
};

export default ComA;