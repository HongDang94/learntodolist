import React, { useState } from 'react';

const listItem = [ '1','2','3'];

function TodoListItem() {
    const [valueInput, setValueInput] = useState('');
    const [todoList, setTodoList] = useState(listItem);

    const ulElement = document.querySelector('#listItem');
    const liElement = document.createElement("li");

    function getValueInput(e) {
        const textInput = e.target.value;
        setValueInput(textInput); 
        liElement.textContent = valueInput;
    }

    function handleAddItem() {
        setTodoList(listItem.push(valueInput));
        setValueInput('');
    }

    function removeItem(index) {
        setTodoList(listItem.splice(index, 1));
    }

    return (
        <div>
            <div>
                <input type="text" placeholder='nhập nội dung' value={valueInput} onChange={getValueInput}/>
                <button type='button'
                    onClick={handleAddItem}>Thêm nội dung</button>
            </div>
            <ul id="listItem">
                {listItem.map((item, index) => (
                    <li key={index}>{item} 
                    <button type='button' onClick ={() => {removeItem(index)}}>x</button></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListItem;