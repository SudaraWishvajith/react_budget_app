import React, { useContexet } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = ()=>{
    const { budget } = useContexet(AppContext);
    return(
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
        </div>
    )
}

export default Budget;
