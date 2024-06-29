import React, { useState } from 'react';

const Todo = () => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const AddTodo = (e) => {
        e.preventDefault();
        console.log(value);
        if (value.trim()) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    todo: value,
                },
            ]);
        } else {
            alert('Todonu daxil edin');
        }
        setValue('');
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const startEditTodo = (index) => {
        setEditIndex(index);
        setEditValue(todos[index].todo);
    };

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const saveEditTodo = (index) => {
        const updatedTodos = todos.map((elem, i) => {
            if (i === index) {
                return { ...elem, todo: editValue };
            }
            return elem;
        });
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditValue("");
    };

    return (
        <div className='todo-container'>
            <h3 style={{ textAlign: "center" }}>TODO LIST</h3>
            <form onSubmit={AddTodo}>
                <input
                    className='todo-input'
                    type='text'
                    placeholder='Write todo:'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <input type='submit' value='ADD TODO' />
            </form>

            <ul>
                {todos.map((elem, index) => (
                    <div className='todo-item' key={elem.id}>
                        {editIndex === index ? (
                            <>
                                <input
                                style={{width:'85%', margin:"7px 45px 7px 0"}}
                                    type='text'
                                    value={editValue}
                                    onChange={handleEditChange}
                                />
                                <button onClick={() => saveEditTodo(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                <li>{elem.todo}</li>
                                <div>
                                    <button onClick={() => deleteTodo(index)}>del</button>
                                    <button onClick={() => startEditTodo(index)}>edit</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Todo;