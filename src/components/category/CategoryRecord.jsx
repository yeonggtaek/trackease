import { useState, useEffect } from 'react';
import './category.css'


const CategoryRecord = ({ category ,updateCategory, deleteCategory }) => {
    const [editing, setEditing] = useState(false);

    const [editCategory, setEditCategory] = useState(category);

    const onSubmitForm = (e) => {
        e.preventDefault();
        updateCategory(editCategory)
        setEditing(false);
    }

    const onChangeCategoryName = (e) => {
        e.preventDefault();
        setEditCategory({ ...editCategory, name: e.target.value })
    }

    const cancelEdit = (e) => {
        e.preventDefault();
        setEditCategory(category);
        setEditing(false);
    }
    const handleDelete = () => {
        deleteCategory(category);

    }
    return (<>
        <div className='record-container'>
            {editing ?
                <>
                    <form onSubmit={onSubmitForm}>
                        <input name={category} value={editCategory.name} onChange={onChangeCategoryName} />
                        <button>Save </button>
                        <button onClick={cancelEdit}>Cancel </button>
                    </form>
                </> : <>
                    <div>
                        <label>
                        {category.name} 
                        </label>
                    </div>
                    <div>
                        <button onClick={() => setEditing(true)}>Edit</button>
                        <button onClick={() => handleDelete(category)} >Delete</button>
                    </div>
                </>}
        </div>
    </>)

}
export default CategoryRecord;