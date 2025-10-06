import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const[allBooks setAllBooks] = useState([])
    // const booksPromise = fetch('booksData.json').then(res=>res.json())
    return (
        <div className='p-8'>
           <h3 className='text-2xl font-bold text-center mb-8'>Books</h3> 
           <Suspense fallback={<h3>Loading....</h3>}>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center '>
                  {
                    data.map((singleBook ,index) => <Book key={index} singleBook={singleBook}></Book>)
                  }
              </div>
           </Suspense>
        </div>
    );
};

export default Books;