import Link from 'next/link';
import React from 'react';

const errorPage = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
           
            
            <div className="absolute">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                 Page Not Found
                </h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                
                
                <Link 
                    href="/" 
                    className="btn bg-[#1F4D36] hover:bg-[#163a29] text-white border-none px-8 rounded-full transition-all duration-300 shadow-lg"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default errorPage;