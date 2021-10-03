import React from 'react';
import Link from 'next/dist/client/link';
import { AiOutlineHome } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs'
import { FaCalculator, FaFly } from 'react-icons/fa'


const ProductHelp = () => {
    return (
        <div>
            <h3 className="text-lg text-blue-400 py-2 font-semibold border-b-2 border-blue-400">
                <BsQuestionCircle className='inline text-lg bg-blue-400 text-white rounded-full' />
                {''} Help
            </h3>
            <div className="px-2 py-2">
                <p className='text-gray-500'>
                    Fox Parcel is a Bangladesh-based buying service for products from Everywhere.
                </p>
            </div>
            <div className='grid grid-cols-5 pt-4'>
                <AiOutlineHome className='text-2xl text-blue-400 m-auto' />
                <div className='col-span-4'>
                    <h3 className="text-lg font-semibold text-blue-400">
                        About Service
                    </h3>
                    <p className="text-gray-500">
                        Visit our <Link href="/" className='underline text-blue-400'>home page</Link> for an overview of our services.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-5 pt-4'>
                <FaFly className='text-2xl text-blue-400 m-auto' />
                <div className='col-span-4'>
                    <h3 className="text-lg font-semibold text-blue-400">
                        Tour this Page 
                    </h3>
                    <p className="text-gray-500">
                        Take a guided tour of this page.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-5 pt-4'>
                <FaCalculator className='text-2xl text-blue-400 m-auto' />
                <div className='col-span-4'>
                    <h3 className="text-lg font-semibold text-blue-400">
                        Shipping Rates 
                    </h3>
                    <p className="text-gray-500">
                        Use our Shipping Calculator to estimate shipping rates.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductHelp;