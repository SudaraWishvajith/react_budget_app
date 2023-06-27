import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = ()=>{
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((tExpense,item)=>{
        return (tExpense = tExpense + item.cost);
    },0)

    return(
        <div className='alert alert-primary'>
            <span>Spent so far: ${totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
