import React from 'react';
import styles from './stepNavigation.module.css';

const StepsNavigation = ({ steps, currentIndex }) => {
    const { title, step } = steps;
    console.log('from navigation', currentIndex);


    return (
        <section className=''>
            <div className={`relative flex justify-center items-center`}>
                <div className={`pr-24 ${styles.circleWrapper}`}>
                    <div className={`h-10 w-10 rounded-full font-bold ${step === currentIndex ? 'text-white bg-blue-400' : 'text-blue-400 bg-gray-200'} flex justify-center items-center`}>
                        {step}
                    </div>
                </div>
            </div>
                <p className='text-center'>{title}</p>
        </section>
    );
};

export default StepsNavigation;