import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCountry, updatePdUrl, updateStep } from '../../../../redux/actions/actions';
import { country } from '../dummyData';


const ProductLink = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.productReducer)

    console.log(state);

    const handleCountryChange = e => {
        const expectCountry = country.find(c => c.name === e.target.value)
        dispatch(addCountry(expectCountry))
    };

    const handleNext = () => {
        dispatch(updateStep())
    }

    return (
        <section className='text-gray-600'>
            <h3 className="text-lg font-semibold py-2 border-b-2 border-blue-400">
                Add a URL for the product you want us to buy.
            </h3>
            <hr />
            <div className="py-4">
                    <label className='block py-1 text-sm font-bold' htmlFor="country">Shopping country</label>
                    <select onChange={handleCountryChange} name="" id="country" className='text-sm border-2 outline-none py-1 px-2 focus:border-blue-400 duration-500 rounded w-3/4 md:w-2/4'>
                        {
                            country.map((c, i) => <option key={i++} value={c.name}>{c.name}</option>)
                        }
                    </select>
                </div>
            <div className="p-1 pb-4 flex flex-col">
                <label className='py-1 text-sm font-bold' htmlFor="link">
                    Product web page {''}
                    <BsQuestionCircle className='inline text-lg bg-gray-700 text-white rounded-full' />
                </label>
                <input onChange={(e) => dispatch(updatePdUrl(e.target.value))} className='px-3 py-2 outline-none border-b-2 duration-500 focus:border-blue-400' type="text" name="link" id="link" placeholder='Product link' />
            </div>
            <button onClick={handleNext} className='px-4 mb-3 py-1.5 rounded text-white bg-blue-500'>
                Next {''}
                <BsArrowRightShort className='inline text-xl mb-0.5' />
            </button>
            <h3 className="text-sm font-normal py-2 border-t text-gray-500">
                Next, we’ll gather a few more details so we can make a quote for you.
            </h3>
        </section>
    );
};

export default ProductLink;