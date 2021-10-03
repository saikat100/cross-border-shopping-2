import React from 'react';

const customStyle = {
    background: `url(/assets/images/shopping-bag.png)`,
    backgroundSize: '250px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
}


const OrderSteps = () => {
    return (
        <section style={customStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 shadow rounded-md py-6 px-4">
                    <div className="pb-4 text-center md:text-start">
                        <h3 className="text-xl">
                            Fill in Shopping Agent Order
                        </h3>
                        <p className='text-sm'>
                            （columns marked <span className='text-red-500'>*</span> are required）
                        </p>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 lg:grid-cols-4 gap-5 py-3">
                        <div className="text-center">
                            <h3 className='bg-blue-400 text-white rounded-full font-bold px-2 inline-block'>1</h3>
                            <p className='text-xs md:text-sm'>
                                Fill in the <br /> order & submit
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className='bg-blue-400 text-white rounded-full font-bold px-2 inline-block'>2</h3>
                            <p className='text-xs md:text-sm'>
                                Pay for product <br /> & domestic <br /> delivery fee
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className='bg-blue-400 text-white rounded-full font-bold px-2 inline-block'>3</h3>
                            <p className='text-xs md:text-sm'>
                                Wait for your <br /> product to arrive <br /> at the warehouse
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OrderSteps;