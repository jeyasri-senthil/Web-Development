import './ToDo.css';
import React, { useState } from 'react';

function ToDo() {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addTask = () => {
        if (value.trim()) { 
            setTodo([...todo, value]);
            setValue("");
        }
    };

    const deleteTask = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h3>TO-DO APPLICATION</h3>
            <br />
            <input type='text' value={value} onChange={handleChange} />
            <button onClick={addTask}>Add</button>
            <div>
                <ul>
                    {todo.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button 
                                className="delete-button" 
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;
