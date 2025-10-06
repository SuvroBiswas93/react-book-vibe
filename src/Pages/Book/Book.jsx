import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
   const {bookName,author,image,bookId,rating,tags,category} = singleBook
// console.log(singleBook)
  
    return (
       <Link to={`/bookdetails/${bookId}`}>
             <div className="card bg-base-100 w-96 shadow-lg p-3 ">
            <figure className='p-4 bg-[#F3F3F3]  rounded-xl'>
                <img
                src={image}
                alt="Shoes" 
                className='w-[125px] h-[160px] ' />
            </figure>
            <div className="card-body p-0 mt-2">
                <div className='flex gap-4'>
                    {
                        tags.map((tag,index) =><button key={index} className='text-green-400 bg-green-100 px-3 rounded-xl'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title text-2xl font-bold">
                {bookName}
            
               
                </h2>
                
                <h3 className=' mb-4 font-bold'>By : {author}</h3>
                
                
                <div className="card-actions flex justify-between">
                    <p className='font-bold'>{category}</p>
                    <p className='flex justify-center items-center gap-2 font-bold'>{rating} <FaStarHalfAlt /></p>
                
                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;