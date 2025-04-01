import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
            .then(res => {
                console.log(res);
                alert("Deleted successfully..");
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(errr => console.log(errr));
    };

    return (
        <div className="mt-5 bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8217.jpg')] bg-cover min-h-screen flex flex-col items-center p-10">
            <a href='/create' className="px-6 py-3 font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-200">
                Add new Task
            </a>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 w-full max-w-7xl">
                {users.map((user , index) => (
                    <div key={user._id} className="p-6 bg-gray-400 hover:bg-white bg-opacity-90 shadow-xl   rounded-2xl w-full max-w-sm transform transition duration-200 hover:scale-105">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">{index+1}</h3>
                        <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>

                        {/* Description */}
                        <p className="text-gray-600 mt-1 flex items-center">
                            <svg className="w-5 h-5 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h7v2H4v-2z"/>
                            </svg>
                            <span className="font-medium">Description:</span> {user.email}
                        </p>
                        
                        {/* Status */}
                        <p className="text-gray-600 mt-1 flex items-center">
                            <svg className="w-5 h-5 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                            </svg>
                            <span className="font-medium">Status:</span> {user.status || "Pending"}
                        </p>

                        {/* Date */}
                      {/* Debugging */}
                     {console.log("User Date:", user.date)}

                   {/* Date */}
                 <p className="text-gray-600 mt-1 flex items-center">
                 <svg className="w-5 h-5 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M6 2C5.44772 2 5 2.44772 5 3V5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H19V3C19 2.44772 18.5523 2 18 2H6ZM4 7H20V18H4V7Z"/>
             </svg>
             
                <span className="font-medium">Date:</span> 
                {user.date && !isNaN(new Date(user.date).getTime()) 
                ? new Date(user.date).toLocaleDateString() 
               : "Date Not Available"}
                  </p>



                        {/* Actions */}
                        <div className="mt-5 flex justify-between">
                            <a href={`/update/${user._id}`} className="px-5 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition">
                                Update
                            </a>
                            <button
                                className="px-5 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-500 transition"
                                onClick={() => handleDelete(user._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
