import React from 'react';
import { ImPrevious } from 'react-icons/im'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import useProductInfo from '../../../../hooks/useProductInfo';
import { backStep, updateCurrency, updateStep } from '../../../../redux/actions/actions';
import { country } from '../dummyData';



const ProductDetails = () => {
    const { handleInput, inputValue, currency } = useProductInfo();
    const [isOpenOthers, setIsOpenOthers] = React.useState(false);

    const dispatch = useDispatch()
    const state = useSelector(state => state.productReducer);

    console.log(state);

    const handleCurrencyChange = e => {
        dispatch(updateCurrency(e.target.value))
        handleInput(e)
    };

    const handleAddMore = e => {
        e.preventDefault();
        setIsOpenOthers(!isOpenOthers)
    };

    const getTotal = () => {
        const total = (inputValue?.price / parseInt(Object.values(currency)[0])).toFixed(2)
        return (

            <>
                {
                    total === 'NaN' ? <h3 className='text-xl font-semibold py-3 text-gray-800'>
                        Total: $ 0
                    </h3> :
                        <h3 className='text-xl font-semibold py-3 text-gray-800'>
                            Total: $ {total}
                        </h3>
                }
            </>
        )
    }

    return (
        <section className='text-gray-600'>
            <h3 className="text-lg font-semibold py-2 border-b-2 border-blue-400">
                What can we buy for you?
            </h3>
            <form action="/">
                <div className="p-1 pb-4 flex flex-col">
                    <label className='py-1 text-sm font-bold' htmlFor="link">Link</label>
                    <input className='px-3 py-2 outline-none border-b-2 duration-500 focus:border-blue-400' disabled value={state?.productInfo.pdUrl} type="text" name="link" id="link" placeholder='Product link' />
                </div>
                <div className="p-1 pb-4 flex flex-col">
                    <label className='py-1 text-sm font-bold' htmlFor="link">
                        Product name
                    </label>
                    <input className='px-3 py-2 outline-none border-b-2 duration-500 focus:border-blue-400' type="text" name="link" id="link" placeholder='Product name' />
                </div>
                <div className='py-1'>
                    <button onClick={(e) => handleAddMore(e)} className='bg-blue-400 text-white rounded px-2 py-1'>
                        <AiOutlinePlusCircle className='inline text-lg mb-0.5' /> {''}
                        Additional information
                    </button>
                </div>
                {
                    isOpenOthers && <div className='duration-500 pb-4'>
                        <label className='text-sm block py-1' htmlFor="others">Size, color or others</label>
                        <input onClick={() => handleInput(e)} className='w-4/5 md:w-3/4 py-1 outline-none border-2 focus:border-blue-400 duration-500 px-2 rounded' id='others' name='others' type="text" placeholder='Additional information' />
                    </div>
                }
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 pb-6">
                    <div className='flex md:justify-center items-end'>
                        <select onChange={handleCurrencyChange} className='w-4/5 md:w-3/4 outline-none text-sm py-1.5 border-2 focus:border-blue-400 duration-500 rounded-md' name="currency" id="currency">
                            <option defaultValue={state?.country?.currency}>{state?.country?.name ? state?.country?.currency : 'Select Currency'}</option>
                            {
                                country.map((c, i) =>
                                    <option value={c.currency} key={i++} >{c.currency}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-bold' htmlFor="price">Price</label>
                        <input onChange={e => handleInput(e)} className='w-4/5 md:w-3/4 py-1 outline-none border-2 focus:border-blue-400 duration-500 px-2 rounded' id='price' name='price' type="number" placeholder='Price' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-bold' htmlFor="quantity">Quantity</label>
                        <input onChange={e => handleInput(e)} className='w-4/5 md:w-3/4 py-1 outline-none border-2 focus:border-blue-400 duration-500 px-2 rounded' defaultValue='1' type="number" id='quantity' name='quantity' placeholder='Quantity' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-bold' htmlFor="weight">Weight</label>
                        <input onChange={e => handleInput(e)} className='w-4/5 md:w-3/4 py-1 outline-none border-2 focus:border-blue-400 duration-500 px-2 rounded' id='weight' name='weight' type="number" placeholder='Weight' />
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className="">
                        <label className='text-sm block py-1 font-bold' htmlFor="deliveryFee">Domestic Delivery Fee ( {state?.currency} )</label>
                        <input className='outline-none border-2 focus:border-blue-400 duration-500 py-1 px-2 rounded' type="number" id='deliveryFee' placeholder='Domestic delivery fee' />
                    </div>
                    {
                        getTotal()
                    }
                </div>
                <div className="py-3 flex justify-between items-center border-t-2 border-blue-400 mt-4">

                    <button onClick={() => dispatch(backStep())} className='px-3 py-2 bg-blue-400 text-white rounded'>
                        <ImPrevious className='inline text-lg mb-0.5 text-white' /> {''}
                        Prev
                    </button>
                    <button onClick={() => dispatch(updateStep())} className='px-3 py-2 bg-blue-400 text-white font-semibold rounded'>
                        Add to Cart {''}
                        <AiOutlinePlusCircle className='inline text-lg mb-0.5' /> {''}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ProductDetails;