import React from 'react';
import bookImg from '../../assets/pngwing.png'
const Banner = () => {
    return (
        <div className='flex  flex-col md:flex-row md:justify between items-center gap-4 md:gap-8 p-4 md:p-15 bg-gray-200 rounded-xl'>
            <div className='space-y-3'>
                <h3 className='text-5xl font-bold mb-8'>Books To Freshen Up Your Book Shelf</h3>
                <button className="btn bg-green-400 text-white">View The List</button>
            </div>
            <img src={bookImg} alt="Book Picture" className='rounded-xl' />
        </div>
    );
};

export default Banner;