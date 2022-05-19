import React from 'react';

const TaskDetails = ({ task }) => {

    const handleDeleteTask = (id) => {

        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const { name, description, _id } = task
    return (
        <div>
            <div className='rounded-lg shadow-lg p-5 '>
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={() => handleDeleteTask(_id)} className='btn btn-sm'>delete</button>
            </div>
        </div>
    );
};

export default TaskDetails;