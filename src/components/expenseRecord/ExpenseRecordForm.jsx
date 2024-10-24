import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ExpenseRecordForm({ categories, expense, updateRecord, newRecord, updateExpenseRecord }) {
    console.log(expense.recordType)

    const onChangeRecodeName = (e) => {
        e.preventDefault();
        const record = { ...expense, name: e.target.value };
        updateExpenseRecord(record);
    }
    const onChangeCategory = (e) => {
        e.preventDefault();
        const record = { ...expense, category: e.target.value };
        updateExpenseRecord(record);
    }
    const onChangeAmount = (e) => {
        e.preventDefault();
        const record = { ...expense, amount: e.target.value };
        updateExpenseRecord(record);
    }
    const handleOptionChange = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        const record = { ...expense, recordType: e.target.value };
        console.log(record)
        updateExpenseRecord(record);
    }
    const onChangeNote = (e) => {
        e.preventDefault();
        const record = { ...expense, note: e.target.value };
        updateExpenseRecord(record);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        updateRecord(expense);
    }
    const handleClear = (e) => {
        e.preventDefault();
        console.log('before run handle Clear')
        newRecord();
        console.log(expense)
        console.log('after run handle Clear')
    }

    return (<>
        <h2>Create / Edit Record</h2>
        <form onSubmit={onSubmitForm}>
            <div>
                <label>Name: <input type="text" name='name' value={expense.name} onChange={onChangeRecodeName} /></label>
            </div>
            <div>
                <label>Category:
                    <select name="category" onChange={onChangeCategory} value={expense.category}>
                        {
                            categories && categories.map((cate, index) => {
                                return (
                                    <option key={index} value={cate.id}>{cate.name}</option>
                                )
                            })
                        }
                    </select>
                </label>
            </div>
            <div>
                <label>Amount: <input type="number" name='amount' value={expense.amount} onChange={onChangeAmount} /></label>
            </div>
            <div>
                <label >Type</label>
                <label>
                    <input type="radio" value="Income" checked={expense.recordType == 'Income'} onChange={handleOptionChange} />

                    Income</label>
                <label>
                    <input type="radio" value="Expense" checked={expense.recordType == 'Expense'} onChange={handleOptionChange} />
                    Expense
                </label>
            </div>
            <div>
                <label >Date
                    <DatePicker selected={expense.datetime} /></label>
            </div>
            <div>
                <label>Note
                    <input type="text" name='name' value={expense.note} onChange={onChangeNote} />
                </label>
            </div>
            <button onClick={onSubmitForm}>Submit</button>
            <button onClick={handleClear}>Clear</button>
        </form>
    </>);
}
