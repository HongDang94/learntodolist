import React from 'react';
import TodoListItem from '../TodoListItem';

function TodoList() {
    return (
        <TodoListItem listItem={[1, 2, 3]} />
    );
}

export default TodoList;