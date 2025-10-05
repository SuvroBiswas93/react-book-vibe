import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
   const {bookName,author,image,rating,tags,category} = singleBook
console.log(singleBook)
  
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-3 border">
            <figure className='p-4 bg-[#F3F3F3]  rounded-xl'>
                <img
                src={image}
                alt="Shoes" 
                className='w-[125px] h-[160px]' />
            </figure>
            <div className="card-body p-0 mt-2">
                <div className='flex gap-4'>
                    {
                        tags.map(tag =><button className='text-green-400 bg-green-100 px-3 rounded-xl'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{category}</div>
                <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                </div>
            </div>
        </div>
    );
};

export default Book;