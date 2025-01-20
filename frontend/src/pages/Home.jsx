/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Spinner from "../componants/Spinner";
import axios from "axios";
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const Home = () => {
  const [loading, Setloading] = useState(false);
  const [books, SetBooks] = useState([]);

  useEffect(() => {
    Setloading(true);
    axios.get("http://localhost:5555/books")
      .then((response) => {
        SetBooks(response.data.data),
          Setloading(false);
      })
      .catch((error) => {
        alert("Error fetching books");
        console.log(error);
        Setloading(false);
      })
  }, []);

  return (
    <>
      {
        loading ? (
          <Spinner />
        ) : (
          <div className="pl-8 pt-12 mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl">Available Books</h1>
              <Link to='/books/create'>
                <MdOutlineAddBox className="text-4xl text-sky-500" />
              </Link>
            </div>
            <div className="mt-4">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">SL no.</th>
                    <th className="border border-gray-300 px-4 py-2">Title</th>
                    <th className="border border-gray-300 px-4 py-2">Author</th>
                    <th className="border border-gray-300 px-4 py-2">Published Year</th>
                    <th className="border border-gray-300 px-4 py-2">Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr key={book._id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                      <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                      <td className="border border-gray-300 px-4 py-2">{book.publishYear}</td>
                      <td className="border border-gray-300 px-4 py-2 flex justify-center gap-x-4">
                        <Link to={`/books/details/${book._id}`}>
                          <BsInfoCircle className="text-blue-500 hover:text-blue-700 text-xl" />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                          <AiOutlineEdit className="text-green-500 hover:text-green-700 text-xl" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                          <MdOutlineDelete className="text-red-500 hover:text-red-700 text-xl" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Home