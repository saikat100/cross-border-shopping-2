import { FaStripe } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { country } from '../Components/Home/ProductInfo/dummyData';
export default function Checkout() {
//     const { handleInput, inputValue, currency } = useProductInfo();
//     const [isOpenOthers, setIsOpenOthers] = React.useState(false);

    const dispatch = useDispatch()
    const state = useSelector(state => state.productReducer);

    console.log(state);
    const handleCurrencyChange = e => {
        dispatch(updateCurrency(e.target.value))
        handleInput(e)
    };
    return (
    <>
        <div  className="max-w-7xl px-4 mx-auto sm:px-6 pt-8 pb-8  border-b-4 border-light-blue-500 border-opacity-100">
            <div>
                 <h5 className="font-black">Select a payment method</h5>
                 <form action="">
                 <input type="radio" name="payment" value="Nagad"/> Pay with Nagad<br />
                 <input type="radio" name="payment" value="Strip"/> Pay with Stripe</form>
            </div>
            <div className='flex md:justify-center items-end pt-8'>
         <select onChange={handleCurrencyChange} className='w-4/5 md:w-3/4 outline-none text-sm py-1.5 border-2 focus:border-blue-400 duration-500 rounded-md' name="currency" id="currency">
             <option defaultValue={state?.country?.currency}>{state?.country?.name ? state?.country?.currency : 'Select Currency'}</option>
             {
                 country.map((c, i) =>
                     <option value={c.currency} key={i++} >{c.currency}</option>
                 )
             }
         </select>
        </div>
        </div>
        <div className="max-w-7xl px-4 mx-auto sm:px-6 pt-8 pb-8">
            <h3 className="font-black">
            Our Policy
            </h3>
            <p> Before proceeding with this request, check that you agree to our terms of service:</p>
        </div>
        <div className="max-w-7xl px-4 mx-auto sm:px-6 pb-8">
            <ul className="list-inside bg-rose-200">
                <li>I authorize this payment of US$20.73, and I authorize White Rabbit to make this purchase on my behalf.</li>
                <li>I understand that international shipping is billed separately. See . Shipping Calcualtor</li>
                <li>I agree to the Terms of Service. I understand this sale is non-refundable, and I assume all risk if the item is not as described by the seller.</li>
                <li>I agree that any import duty (Customs tax) is my responsibility to pay.</li>
            </ul>
            <div className="pt-8" >
            <input type="checkbox"/><span className="p-2">I've read and agree to the Terms of Service.</span><br />
            <input type="checkbox" /><span className="p-2">Due to Covid-19 related issues, I understand there may be shipping delays and some shipping methods may not be available to me.</span>
            </div>
            <h1 className="font-medium">Make sure we got that email right: <span className="font-extrabold">someThing@gmail.com</span></h1>
            <p>Wrong email? Sign-up again with the corrected information before proceeding.</p>
        </div>
        
   </>

    )
}
