import React, { useState } from 'react';
import Form from './Form';
import TodoTasks from './TodoTasks';

function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>Khoa's Todo App</h1>
            <Form onSubmit={addTodo}/>
            <TodoTasks todos={todos} completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}/>
        </div>
    )
}

export default Todolist;
