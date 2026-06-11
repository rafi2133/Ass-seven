import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-lg ">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-8xl md:text-9xl font-bold text-gray-900">404</h1>
                </div>

                {/* Main Message */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                        Page not found
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                </div>

                {/* Home Button */}
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-[#3E6356] text-white font-medium rounded-lg hover:bg-[#4e8b76] transition-colors duration-200"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;