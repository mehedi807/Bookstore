/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../componants/Spinner'
import BackBtn from '../componants/BackBtn'

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  return (
    <div className="container p-6 min-h-screen">
      <BackBtn />
      <h1 className="text-3xl font-bold mb-6 text-center">Book Details</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
          <div className="flex gap-x-1 mb-4">
            <span className="block font-semibold text-gray-700">Title :</span>
            <span className="block text-gray-900">{book.title}</span>
          </div>
          <div className="mb-4 flex gap-x-1">
            <span className="block font-semibold text-gray-700">Author:</span>
            <span className="block text-gray-900">{book.author}</span>
          </div>
          <div className="mb-4 flex gap-x-1">
            <span className="block font-semibold text-gray-700">Published Year:</span>
            <span className="block text-gray-900">{book.publishYear}</span>
          </div>
        </div>
      )}
    </div>
  );

}

export default ShowBook