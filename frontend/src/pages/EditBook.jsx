/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import BackBtn from '../componants/BackBtn'
import Spinner from '../componants/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEditBook = () => {
    if (!title || !author || !publishYear) {
      alert("Provide all fields!!");
      return;
    }
    if (isNaN(publishYear) || publishYear.trim() == '') {
      alert("Please Insert a valid Year!!");
      return;
    }
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        setLoading(false);
        navigate('/');
        alert(response.statusText);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('An error occured');
      });
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <BackBtn />
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Book</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Published Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            className="w-full bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-800 transition duration-300"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      )}

    </div>
  );
}

export default EditBook