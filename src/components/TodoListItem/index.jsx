import React, { useState } from 'react';
import FillItem from '../FillItem';

// const listItem = [ '1','2','3'];

function TodoListItem({ listItem }) {
    const [valueInput, setValueInput] = useState('');
    const [todoList, setTodoList] = useState(listItem);

    function handleAddItem() {
        if(!valueInput.length) return;
        setTodoList([...todoList, valueInput]);
        setValueInput('');
    }

    function getValueInput(e) {
        const textInput = e.target.value;
        setValueInput(textInput);
    }

    function removeItem(index) {
        const newList = [...todoList].filter((item, filterIndex) => filterIndex !== index);
        setTodoList(newList);
    }

    return (
        <div>
            <div>
                <input type="text" placeholder='nhập nội dung' value={valueInput} onChange={getValueInput}/>
                <button type='button' onClick={handleAddItem}>Thêm nội dung</button>
            </div>
            {todoList.length ? 
                <ul id='listItem'>
                    {todoList.map((item, index) => 
                        <li key={index}>{item} <button type='button' style={{marginLeft: 10}} onClick={() => {removeItem(index)}}>x</button></li>
                    )}
                </ul>
                :
                <p>Khong co</p>
            }
        </div>
    );
}

export default TodoListItem;