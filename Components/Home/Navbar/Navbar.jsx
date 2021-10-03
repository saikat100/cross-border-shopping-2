import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Navbar = () => {



    return (
        <>
            <nav className="relative shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                    <div className="grid grid-cols-3 md:grid-cols-4">
                        <div className="">
                            <Image width={100} height={50} src='/assets/images/shutterstock_583717939.png' alt='cross border brand logo'/>
                        </div>
                        <div className="col-span-2 md:col-span-3">
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;