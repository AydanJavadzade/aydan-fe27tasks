import React, { useState } from 'react'

const TodoList = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])
    const AddTodo = (e) => {
        e.preventDefault()
        console.log(value)
        setTodos([
            ...todos, {
                id: todos.length + 1,
                todo: value
            }
        ])
        setValue('')

    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const editTodo = (index) => {

    }
    return (<div className='todo-container'>
        <h3 style={{ textAlign: "center" }}>TODO LIST</h3>
        <form onSubmit={(e) => AddTodo(e)}>
            <input
                className='todo-input'
                type='text'
                placeholder='write todo:'
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            ></input>
            <input type='submit' value='ADD TODO'></input>
        </form>


        <ul>
            {todos.map((elem, index) => {
                return <>
                    <div className='todo-item'>
                        <li key={elem.todo}>{elem.todo}</li>
                        <div>
                            <button onClick={() => deleteTodo(index)}>del</button>
                            <button onClick={() => editTodo}> edit</button>
                        </div>
                    </div>
                </>
            })}
        </ul>
    </div>
    )
}

export default TodoList;