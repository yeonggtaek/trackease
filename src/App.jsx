import { useState } from 'react'
import './App.css'
import Category from './components/category/CategoryList'
import ExpenseRecordList from './components/expenseRecord/ExpenseRecordList'
import ExpenseRecordForm from './components/expenseRecord/ExpenseRecordForm'
import { initialCategory, initialExpense } from './fixtures'
import { nanoid } from 'nanoid';

function App() {

  const [categories, setCategories] = useState(initialCategory);
  const [expensies, setExpensies] = useState(initialExpense);

  const createNewCategory = (cate) => {
    console.log(cate);
    setCategories([...categories, cate])
  }

  const updateCategory = (category) => {
    const temp = [];
    categories.map((item, index) => {
      if (item.id === category.id) {
        temp.push(category)
      } else {
        temp.push(item)
      }
    });
    setCategories(temp);
  }
  const deleteCategory = () => {

    const temp = [];
    categories.map((item, index) => {
      if (item.id !== category.id) {
        temp.push(item)
      }
    });
    setCategories(temp);
  }

  //Record

  const [initialRecord, setInitRecord] = useState({
    id: nanoid(),
    name: '',
    category: -1,
    amount: 0.00,
    type: '0', //0=expensive, 1=income,
    datetime: Date(),
    note: ''
  });

  const [record, setRecord] = useState(initialRecord);
  const [editingExpense, setEditingExpense] = useState();

  const newRecord = () => {
    setRecord(
      {
        id: nanoid(),
        name: '',
        category: -1,
        amount: 0.00,
        type: '0', //0=expensive, 1=income,
        datetime: Date(),
        note: ''
      }
    );
    console.log(record)
  }

  const updateRecord = (record) => {
    const temp = [];
    let isSave = false;
    expensies.map((item, index) => {
      if (item.id === record.id) {
        temp.push(record);
        isSave = true;
      } else {
        temp.push(item);
      }
    });
    if(!isSave) temp.push(record);
    console.log(record);
    console.log(temp);
    setExpensies(temp);
  }

  return (
    <>
      <div className='container'>
        <div>
          <ExpenseRecordForm categories={categories} record={record} newRecord={newRecord} updateRecord={updateRecord} />
        </div>
        <div>
          <ExpenseRecordList expensies={expensies} />
        </div>
        <div>
          <Category cate={categories} createNewCategory={createNewCategory} updateCategory={updateCategory} deleteCategory={deleteCategory} />
        </div>
      </div>
    </>
  )
}

export default App;