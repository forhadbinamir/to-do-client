import React, { useEffect, useState } from 'react';
import TaskDetails from './TaskDetails';

const ToDo = () => {

    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/todo',)
            .then(res => res.json())
            .then(data => {
                setTask(data)
                console.log(data)
            })
    }, [])
    const handleToDoForm = event => {
        event.preventDefault()
        const name = event.target.name.value
        const description = event.target.description.value
        event.target.reset()
        // console.log(name, description)

        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, description })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }
    return (
        <div>
            <div className='bg-yellow-100 p-10'>
                <form onSubmit={handleToDoForm} className='w-[600px] mx-auto'>
                    <input className='border rounded-lg w-full p-3 mb-2' type="text" placeholder='Name' name='name' />
                    <textarea className='border rounded-lg w-full p-3 mb-2' name="description" id="" cols="30" rows="5"></textarea>
                    <input className='bg-gray-300 py-2 px-3 rounded-lg w-full text-purple-600 font-bold' type="submit" value="Add Task" />
                </form>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    tasks.map(task => <TaskDetails
                        key={task._id}
                        task={task}
                    ></TaskDetails>)
                }
            </div>
        </div>
    );
};

export default ToDo;