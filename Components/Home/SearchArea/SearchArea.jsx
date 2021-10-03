import React from 'react';
import { BsSearch, BsExclamationCircle } from 'react-icons/bs';


const SearchArea = () => {
    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-center items-center pt-12 pb-10">
                    <div className='w-4/5 md:w-3/6 relative'>
                        <input className='py-2 px-3 border-2 outline-none rounded border-blue-400 w-full' type="search" name="search" id="" placeholder='Enter keyword or paste product link...' />
                        <button className='absolute top-0 py-2.5 px-3 border rounded right-0.5 bg-blue-400'>
                            <BsSearch className='text-xl text-white' />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className='w-11/12 md:w-4/6'>
                        <h3 className="bg-gray-100 shadow rounded-full py-2 text-center">
                            <BsExclamationCircle className='inline text-xl mr-2 text-blue-400'/>
                            Please fill the relevant information below so that we can purchase for you.
                        </h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchArea;