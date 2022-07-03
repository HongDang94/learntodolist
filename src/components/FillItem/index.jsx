import React, { useState } from 'react';

function FillItem({ onAddItem }) {
    const [valueInput, setValueInput] = useState('');

    function getValueInput(e) {
        const textInput = e.target.value;
        setValueInput(textInput);
    }

    return (
        <div>
            <input type="text" placeholder='nhập nội dung' value={valueInput} onChange={getValueInput}/>
            <button type='button' onClick={onAddItem}>Thêm nội dung</button>
        </div>
    );
}

export default FillItem;