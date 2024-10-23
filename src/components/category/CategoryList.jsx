import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import CategoryRecord from './CategoryRecord';

export default function categoryList({ cate, createNewCategory ,updateCategory, deleteCategory  }) {


        const [categories, setCategories] = useState(cate);
        const [initialCategoryData, setInitialCategoryData] = useState({
            id: nanoid(),
            name: ''
        })
        const [category, setCategory] = useState(initialCategoryData);

       
        const onChangeCategoryName = (e) => {
            e.preventDefault();
            setCategory({ ...category, name: e.target.value })
            console.log(category)

        }
        const onSubmitCreateCategoryForm = (e) => {
            e.preventDefault();
            console.log(category)
            setCategories([...categories, category])
            createNewCategory(category);
            setCategory(
                {
                    id: nanoid(),
                    name: ''
                }
            );
        }

        return (
            <div>
                <div>
                    <h2>Expense Category</h2>
                </div>
                <div>
                    <h3>Category List</h3>
                </div>
                <div>
                    <form onSubmit={onSubmitCreateCategoryForm}>
                        <label htmlFor="categoryName">Name:</label>
                        <input type="text" id='categoryName' name='categoryName' value={category.name} onChange={onChangeCategoryName} />
                        <button>Create</button>
                    </form>
                </div>
                {
                    categories && categories.map((cate, index) => {
                        return (
                            <CategoryRecord key={index} category={cate}  updateCategory={updateCategory} deleteCategory={deleteCategory}  />
                      )
                    })
                }
            </div>
        )
    }