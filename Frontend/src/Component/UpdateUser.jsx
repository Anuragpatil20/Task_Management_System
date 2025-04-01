import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
    const { id } = useParams(); // Get the ID from URL params
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [status, setStatus] = useState('Pending');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    // Fetch user data on component mount
    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(result => {
                setName(result.data.name);
                setEmail(result.data.email);
                setPosition(result.data.position);
                setSalary(result.data.salary);
                setStatus(result.data.status || 'Pending');  // Default to "Pending"
                setDate(result.data.date || ''); // Default to empty if no date
            })
            .catch(err => console.log(err));
    }, [id]); // Effect depends on the id

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedUser = { name, email, position, salary, status, date };
        axios.put(`http://localhost:3001/updateUser/${id}`, updatedUser)
            .then(result => {
                console.log(result);
                alert("Updated successfully!");
                navigate('/user');  // Navigate to the users list page
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="min-h-screen mt-3 bg-[url('https://cdn.wallpapersafari.com/48/48/NQV7zq.jpg')] bg-cover h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-yellow-500">
                        Update Task details
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form method="POST" action="#" onSubmit={handleUpdate}>

                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium leading-5 text-gray-700">Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input 
                                        id="name"
                                        name="name"
                                        placeholder="Enter Employee Name"
                                        type="text"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">Description</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input 
                                        id="Description"
                                        name="Description"
                                        placeholder="Enter Description"
                                        type="Description"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                          

                          

                            {/* Status Field */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">Status</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <select 
                                        id="status"
                                        name="status"
                                        required
                                        value={status}
                                        className="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        onChange={(e) => setStatus(e.target.value)}>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </div>

                            {/* Date Field */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">Date</label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input 
                                        id="date"
                                        name="date"
                                        type="date"
                                        required
                                        value={date}
                                        className="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        onChange={(e) => setDate(e.target.value)} />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button 
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Update
                                    </button>
                                </span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;
