import React, { useState } from 'react'
import SingleTodo from './SingleTodo';

const Todo = () => {
    const [todo,setTodo] = useState('');
    const [data,setData] = useState([]);
    const removeTodo = (id) => {
        let newTodo = data.filter((items)=>{
            return items.id != id;
        })
        setData(newTodo);
    }
    const handleClick = (e) => {
        e.preventDefault();
        setData([...data,{todo,id: Date.now()}]);
        setTodo('');
    }
return (
    <>
    <div className="container col-lg-5 mx-auto shadow p-4 my-4">
        <h1 className="display-4 text-center">
            TODO LIST
        </h1>
        <form>
            <label className='fw-bolder' htmlFor="">Todo</label>
            <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='form-control' type="text" placeholder='Enter your todo...'/>
            <button onClick={handleClick} className='btn btn-dark w-100 my-2 fw-bolder'>ADD TODO</button>
        </form>
    </div>
    <div className="container col-lg-9 row mx-auto my-4">
        {data.map((item)=>{
            return <SingleTodo key={item.id} {...item} remove = {removeTodo}/>
        })}
    </div>
    </>
)
}

export default Todo