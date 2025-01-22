import React from "react";


const TableOfContent: React.FC = () => {


    return (
        <div className="flex flex-col gap-8 p-8 mt-24">
            <h1 className="text-4xl font-medium text-center">Table Of Content</h1>
            {/* Page Info */}
            <div className="flex flex-col gap-1 items-center">
                <h2 className="text-2xl font-normal"><a href="#codingProjects">Coding Projects</a></h2>
                <h3 className="text-xl font-normal"><a href="#frontEnd" className="mr-1">Front-End</a>|<a href="#backEnd" className="ml-1">Back-End</a></h3>
                <h2 className="text-2xl font-normal"><a href="#websitesAndECommerce">Websites & e-Commerce</a></h2>
                <h3 className="text-xl font-normal"><a href="#websites" className="mr-1">Website</a>|<a href="#eCommerce" className="ml-1">e-Commerce</a></h3>
                <h2 className="text-2xl font-normal"><a href="#aboutMe">About Me</a></h2>
            </div>

        </div>
    );
}

export default TableOfContent;