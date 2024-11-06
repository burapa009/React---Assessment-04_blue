import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-8">
                Generation Thailand<br />
                React - Assessment
            </h1>
            <div className="flex justify-center space-x-4">
            <Link 
                    to="/user" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    User Home Sector
                </Link>
               
                <Link 
                    to="/admin" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Admin Home Sector
                </Link>
                
            </div>
        </div>
    );
}

export default Home;

