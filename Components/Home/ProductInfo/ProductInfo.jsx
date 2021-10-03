import React from 'react';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi'
import ProductDetails from './ProductDetails/ProductDetails';
import ProductLink from './ProductLink/ProductLink';
import ProductSummary from './ProductSummary/ProductSummary';
import ProductHelp from './ProductHelp/ProductHelp';
import { useRouter } from 'next/dist/client/router';


const ProductInfo = () => {
    const router = useRouter()
    const state = useSelector(state => state.productReducer);

    const { step } = state;

    return (
        <section className=''>
            <div className="max-w-7xl px-4 mx-auto sm:px-6 pt-8 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    <div className="sm:col-span-2 md:col-span-3">
                        <div className="shadow rounded p-3 bg-white">
                            {
                                step === 1 && <ProductLink />
                            }
                            {
                                step === 2 && <ProductDetails />
                            }
                            {
                                step === 3 && <ProductSummary />
                            }
                        </div>
                    </div>
                    <div className="sm:col-span-1 md:col-span-2">
                        <div className="bg-white px-3 py-2 shadow rounded">
                            <h3 className='text-xl font-semibold text-gray-800'>
                                Instant Quote: US$0.00
                            </h3>
                            <p className='py-2 text-gray-500'>Your cart is empty</p>
                            <button className='px-3 py-2 rounded w-full bg-blue-400 text-white font-semibold'>
                                My Cart {''}
                                <FiShoppingCart className='inline text-lg' />
                            </button>
                        </div>
                        <div className="bg-white px-3 pt-2 pb-4 shadow mt-5 rounded">
                            <ProductHelp />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};


export default ProductInfo