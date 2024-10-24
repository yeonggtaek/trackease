import { useState } from 'react'
import './expense.css'

export default function ExpenseRecordList({ expensies, deletedRecord, setEditingRecord }) {
   
    return (<>
        <h2>Record</h2>
        {
            expensies && expensies.map((record, index) => {
                const handleDeleted = () => {
                    deletedRecord(record);
            
                }
                const handleEdit = () => {
                    setEditingRecord(record);
                }
                return (
                    <div key={index} className='record-container'>
                        <div>{record.name}</div>
                        <div>{record.recordType}</div>
                        <div>${record.amount}</div>
                        <div className='button-box'>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDeleted}>Delete</button>
                        </div>
                    </div>
                )
            })
        }

    </>)
}
