import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} =useParams()
    const bookId = parseInt(id)
    const data =useLoaderData()
   const singleBook = data.find(book => book.bookId === bookId)
   const {bookName,author,image,review,tags,totalPages,category,publisher,yearOfPublishing,rating}= singleBook
    return (
        <div className='flex flex-col md:flex-row md:justify-between  gap-6 my-20 w-full'>
            <div className='bg-gray-200 rounded-xl flex justify-center py-20  md:w-1/2'>
                <img src={image} alt="" className=''/>
            </div>
            <div className='md:w-1/2 space-y-2'>
                <h3 className='text-2xl font-bold'>{bookName}</h3>
                <h3>By : {author}</h3>
                 <div className="divider"></div>
                <p>{category}</p>
                <div className="divider"></div>
                <p><span className='font-bold '>Review: </span>{review}</p>
                <div className='flex gap-4 mt-'>
                  <h3>
                    <span className='font-bold'>Tag :</span>   {
                        tags.map((tag,index) =><button key={index} className='text-green-400 bg-green-100 px-3 rounded-xl mx-2'>{tag}</button>)
                    }
                  </h3>
                </div>
               <div className="divider"></div>
                <p className='flex gap-4'>Number of Pages : <span  className='font-bold'>{totalPages}</span></p>
                <p className='flex gap-4'>Publisher : <span className='font-bold'>{publisher}</span></p>
                <p className='flex gap-4'>Year of Publishing : <span className='font-bold'>{yearOfPublishing}</span></p>
                <p className='flex gap-4'>Rating : <span className='font-bold'>{rating}</span></p>

               <div className="divider"></div>

                <div className='flex gap-4 mt-4'>
                    <button className='btn bg-red-300 '> Mark As Read</button>
                    <button className='btn bg-[#50B1C9] '>Add To WhishList</button>

                </div>
                
            </div>
        </div>
    );
};

export default BookDetails;