import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <ul className="flex justify-between items-center h-16">
                    <li>
                        <Link 
                            to="/"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 font-medium"
                        >
                            Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/profile"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 font-medium"
                        >
                            Owner
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
