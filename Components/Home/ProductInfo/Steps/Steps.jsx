import React from 'react';
import { useSelector } from 'react-redux';
import StepsNavigation from './StepsNavigation/StepsNavigation';

const Steps = () => {
    const { step } = useSelector(state => state.productReducer);

    const stepData = [
        {
            title: 'Product URL',
            step: 1,

        },
        {
            title: 'Details',
            step: 2,

        },
        {
            title: 'Place Order',
            step: 3,

        },
        {
            title: 'Checkout',
            step: 4,

        },
    ];

    return (
        <section className='p-5'>
            <div className="max-w-7xl md:max-w-5xl rounded bg-white px-4 mx-auto sm:px-6 pt-8 pb-8">
                <div className="grid grid-cols-4">
                    {
                        stepData.map((steps, i) => <StepsNavigation steps={steps} currentIndex={step} key={i++} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Steps;