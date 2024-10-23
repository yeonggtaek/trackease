import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ExpenseRecordForm({ categories, record, updateRecord, newRecord }) {

    const [editRecord, setEditRecord] = useState(record);


    const onChangeRecodeName = (e) => {
        e.preventDefault();
        setEditRecord({ ...editRecord, name: e.target.value });
    }
    const onChangeCategory = (e) => {
        e.preventDefault();
        setEditRecord({ ...editRecord, category: e.target.value })
    }
    const onChangeAmount = (e) => {
        e.preventDefault();
        setEditRecord({ ...editRecord, amount: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault();
        setEditRecord({ ...editRecord, type: e.target.value })
    }
    const onChangeNote = (e) => {
        e.preventDefault();
        setEditRecord({ ...editRecord, note: e.target.value })
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        updateRecord(editRecord);
    }
    const handleClear = (e) => {
        e.preventDefault();
        newRecord();
    }

    return (<>
        <h2>Create / Edit Record</h2>
        <form onSubmit={onSubmitForm}>
            <div>
                <label>Name: <input type="text" name='name' value={editRecord.name} onChange={onChangeRecodeName}  /></label>
            </div>
            <div>
                <label>Category:
                <select name="category" onChange={onChangeCategory} value={editRecord.category}>
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
                <label>Amount: <input type="number" name='amount' value={editRecord.amount} onChange={onChangeAmount} /></label>
            </div>
            <div>
                <label >Type</label>
                <label>
                    <input type="radio" name='type' value='0'
                        onClick={handleClick}
                        defaultChecked={editRecord.type == '0'}
                    />
                    Income</label>
                <label>
                    <input type="radio" name='type' value='1'
                        onClick={handleClick}
                        defaultChecked={editRecord.type == '1'}
                    />
                    Expense</label>
            </div>
            <div>
                <label >Date 
                <DatePicker selected={editRecord.datetime} /></label>
            </div>
            <div>
                <label>Note 
                <input type="text" name='name' value={editRecord.note} onChange={onChangeNote} />
                </label>
            </div>
            <button onClick={onSubmitForm}>Submit</button>
            <button onClick={handleClear}>Clear</button>
        </form>
    </>);
}
