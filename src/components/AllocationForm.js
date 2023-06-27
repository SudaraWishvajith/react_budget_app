import React, { useState, useContext }  from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = ()=>{
    const { dispatch, remaining } = useContext(AppContext);

    const [name, setName] = useState('');
    const [action, setAction] = useState('');
    const [cost, setCost] = useState('');

    const SubmitEvent = ()=>{
        if(cost > remaining){
            alert("Cost cannot be exceed remaining funds $"+remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if(action === "Add"){
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }

        if(action === "Reduce"){
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        }

    };

    return(
        <div className='row'>
            <div className='input-group mb-3' style={{marginLeft: '2rem'}}>
                <div className='input-group-prepend'>
                    <label className='input-group-text' htmlFor="inputGroupSelect01">Department</label>
                </div>
                <select className='custom-select' id='inputGroupSelect01' onChange={(e)=> setName(e.target.value)}>
                    <option defaultValue>Chose...</option>
                    <option value="Marketing" name="marketing">Marketing</option>
                    <option value="Sales" name="sales">Sales</option>
                    <option value="Finance" name="finance">Finance</option>
                    <option value="HR" name="hr">HR</option>
                    <option value="IT" name="IT">IT</option>
                    <opiton value="Admin" name="admin">Admin</opiton>
                </select>

                <div className='"input-group-prepend' style={{marginLeft: '2rem'}}>
                    <label className='input-group-text' htmlFor='inputGroupSelect02'>Allocation</label>
                </div>
                <select className='custom-select' id='inputGroupSelect02' onChange={(e)=> setAction(e.target.value)}>
                    <option defaultValue="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={cost}
                    style={{marginLeft: '2rem', size: 10}}
                    onChange={(e)=> setCost(e.target.value)}>
                </input>

                <button className='btn btn-primary' onClick={SubmitEvent} style={{marginLeft: '2rem'}}>Save</button>
            </div>
        </div>
    );

};

export default AllocationForm;