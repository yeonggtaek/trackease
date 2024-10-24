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
  const deleteCategory = (category) => {

    const temp = [];
    categories.map((item, index) => {
      if (item.id != category.id) {
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
    recordType: 'Expense', //0=expensive, 1=income,
    datetime: Date(),
    note: ''
  });

  const [expense, setExpense] = useState(initialRecord);
  const [editingExpense, setEditingExpense] = useState();

  const newRecord = () => {
    console.log('test')
    const newRecord = {
      id: nanoid(),
      name: '',
      category: -1,
      amount: 0.00,
      recordType: 'Expense', //0=expensive, 1=income,
      datetime: Date(),
      note: ''
    };
    setExpense(newRecord);
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
    if (!isSave) temp.push(record);
    newRecord();
    setExpensies(temp);
  }

  const deletedRecord = (record) => {
    console.log(record)
    const temp = [];
    expensies.map((item, index) => {
      if (item.id !== record.id) {
        temp.push(item);
      }
    });
    newRecord();
    setExpensies(temp);
  }
  const setEditingRecord = (item) => {
    console.log(item);
    console.log(expense)
    setExpense(item);
    console.log(expense)
  }


  const updateExpenseRecord = (item) => {
    setExpense(item)
    console.log(item)
  }

  return (
    <>
      <div className='container'>
        <div>
          <ExpenseRecordForm categories={categories} expense={expense} newRecord={newRecord} updateRecord={updateRecord} updateExpenseRecord={updateExpenseRecord} />
        </div>
        <div>
          <ExpenseRecordList expensies={expensies} deletedRecord={deletedRecord} setEditingRecord={setEditingRecord} />
        </div>
        <div>
          <Category cate={categories} createNewCategory={createNewCategory} updateCategory={updateCategory} deleteCategory={deleteCategory} />
        </div>
      </div>
    </>
  )
}

export default App;