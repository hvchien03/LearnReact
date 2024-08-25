import { useState } from "react";
import React from 'react';

function Todolist() {
    const [job, setJob] = useState('');
    const [jobs, sẹtJobs] = useState(() => {
        //lấy dữ liệu từ local storage
        const getJobs = JSON.parse(localStorage.getItem('Jobs'))
        return getJobs || [];
        //gẹtJobs || [] toán tử or '||' nếu gẹtJobs không có dữ liệu thì trả về mảng rỗng
    }); 

    const handleAddJobs = () => {
        sẹtJobs(prev => {
            const newJobs = [...prev, job]
            //lưu trữ dữ liệu vào local storage (Chỉ lưu trữ dữ liệu dạng chuỗi nên phải chuyển mảng sang json)
            //lưu trữ vào local storage giúp dữ liệu không bị mất khi reload trang 
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('Jobs', jsonJobs);
            return newJobs;
        });
        setJob('');
    }
    //ddang loi
    return (
        <div className="container w-full m-auto">
            <h1 className="text-center font-bold size-4 my-10 w-full">Todo List</h1>
            <input
                placeholder="Add new todo"
                className="border border-green-300 rounded-sm m-2 p-2 h-10"
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button
                onClick={handleAddJobs}
                className="w-20 bg-green-500 text-white rounded-sm h-10"
            >
                Add
            </button>

            <ul className="list-disc list-inside">
                {jobs.map((item, index) => (
                    <li key={index} className="m-2">{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default Todolist;