import React from 'react';
import { ImPrevious } from 'react-icons/im'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { backStep, updateStep } from '../../../../redux/actions/actions';


const ProductSummary = () => {
    const dispatch = useDispatch();

    return (
        <section className='text-gray-600'>
            <h3 className="text-lg font-semibold py-2 border-b-2 border-blue-400">
                Product summary.
            </h3>
            <hr />
            <table className='w-full'>
                <tr className='text-left'>
                    <td className='py-4'>Product total</td>
                    <td className='font-medium text-right'>$ 2</td>
                </tr>
                <tr className='text-left'>
                    <td className='py-1'>Minimum service fee</td>
                    <td className='font-medium text-right'>$ 12</td>
                </tr>
                <tr className='text-left'>
                    <td className='py-4'>Domestic Shipping</td>
                    <td className='font-medium text-right'>$ 5</td>
                </tr>

                <tr className='text-left border-t-2 border-blue-400'>
                    <th className='py-3'>Estimated Total <span className='font-medium'>( Excluding int. shipping cost )</span> :</th>
                    <td></td>
                    <td className='font-medium'>$ 50</td>
                </tr>
            </table>
            <div className="flex justify-between items-center py-3">
                <button onClick={() => dispatch(backStep())} className='px-3 py-2 bg-blue-400 text-white rounded'>
                    <ImPrevious className='inline text-lg mb-0.5 text-white' /> {''}
                    Prev
                </button>
                <button onClick={() => dispatch(updateStep())} className='px-3 py-2 bg-blue-400 text-white rounded'>
                    Checkout {''}
                    <AiOutlineCheckCircle className='inline text-lg mb-0.5 text-white' />
                </button>
            </div>

        </section>
    );
};

export default ProductSummary;