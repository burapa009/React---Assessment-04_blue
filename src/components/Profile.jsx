import React from "react";
import Navbar from "./Navbar";

function Profile() {
    const biography = {
        id: 0,
        name: "Blue",
        group: "04",
        image: "https://hips.hearstapps.com/hmg-prod/images/bio-biopage-1675279849.jpg",
        biography: "Since the 1960s when Biography premiered as a television show, the Biography name has been synonymous with intriguing life stories. Launched in 1996, Biography.com covers the people you know through stories you don't. In addition to the fascinating, highly credible profiles we are known for, our daily news operation reports on all facets of pop culture, true crime, and power dynamics."
    };

    return (
        <>
       
        <div className="container mx-auto px-4 py-8 max-w-4xl"> 
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {biography.name} - {biography.group} - {biography.id}
            </h2>
            <div className="mb-6">
                <img 
                    src={biography.image} 
                    alt="biography" 
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <p className="text-gray-600 leading-relaxed">
                {biography.biography}
            </p>
        </div>
        </>
    );
}

export default Profile;
