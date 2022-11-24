import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    const titleChangHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };
    const amountChangHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <lable>Title</lable>
                    <input type='text'
                        value={enteredTitle}
                        onChange={titleChangHandler} />
                </div>
                <div className='new-expense__control'>
                    <lable>Amount</lable>
                    <input type='number' min='0.01' step='0.01'
                        value={enteredAmount}
                        onChange={amountChangHandler} />
                </div>
                <div className='new-expense__control'>
                    <lable>Date</lable>
                    <input type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'> Add Expense</button>
            </div>
        </form>
    )
};
export default ExpenseForm;