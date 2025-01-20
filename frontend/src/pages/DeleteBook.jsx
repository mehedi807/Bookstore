/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import BackBtn from '../componants/BackBtn'
import Spinner from '../componants/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {

  const { id } = useParams();
  const [loading, Setloading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    Setloading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        Setloading(false)
        navigate('/')
        alert("Book deleted successfully")
      })
      .catch((error) => {
        alert(error)
        Setloading(false)
      })
  }
  const cancle = () => {
    navigate('/')
  }


  return (
    <div className='p-6 bg-gray-100 min-h-screen '>
      <BackBtn />
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Delete Book</h1>
      <div className=" flex flex-col items-center justify-center px-4">
        {loading ? (<Spinner />) : (
          <div className="bg-white shadow-md rounded-lg p-6 max-w-lg text-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Are you sure you want to delete the book?
            </h2>
            <div className="flex justify-center space-x-4">
              <button onClick={handleDeleteBook} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300">
                Yes, Delete
              </button>
              <button onClick={cancle} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:ring-2 focus:ring-gray-200">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeleteBook