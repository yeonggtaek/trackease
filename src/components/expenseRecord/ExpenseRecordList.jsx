import { useState } from 'react'
import './expense.css'

export default function ExpenseRecordList({ expensies }) {

    return (<>
        <h2>Record</h2>
        {
            expensies && expensies.map((record, index) => {
                return (
                    <div key={index} className='record-container'>
                        <div>{record.name}</div>
                        <div>{record.type == 1 ? 'Income' : 'Expense'}</div>
                        <div>${record.amount}</div>
                        <div className='button-box'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })
        }

    </>)
}
