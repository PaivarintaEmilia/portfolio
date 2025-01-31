import React from "react";
import Img from "../common/Img";


const CodingProjects: React.FC = () => {

    const featuresBackEnd = [
        { id: 1, feature: "Authentication and Role Management: Includes secure JWT-based authentication and role-specific access controls." },
        { id: 2, feature: "Data Handling: Fully supports CRUD operations for users, categories, expenses, and income with additional date-range filtering and monthly summaries." },
        { id: 3, feature: "Clean Architecture: Implements dependency injection, DTOs, and AutoMapper for scalability and maintainability." },
        { id: 4, feature: "Database Integration: Models complex relationships between users, expenses, and categories using SQLite and Entity Framework Core." },
        { id: 5, feature: "Swagger Documentation: Simplifies testing and API exploration with an intuitive user interface." },
    ];

    const featuresFrontEnd = [
        { id: 1, feature: "User Authentication: Supports email/password registration, login, and Google OAuth integration." },
        { id: 2, feature: "Expense and Income Management: Allows users to add, edit, and delete entries, with categorization options for better organization." },
        { id: 3, feature: "Dashboard Overview: Provides a clear visualization of income, expenses, and balance, along with monthly summaries." },
        { id: 4, feature: "Data Filters: Enables filtering of financial records like incomes and expenses by month and year." },
        { id: 5, feature: "Responsive Design: Optimized for devices of all sizes for an accessible user experience." },
    ];

    return (
        <div className="flex flex-col gap-8 my-24 px-24" id="codingProjects">
            <h1 className="text-4xl font-medium mb-8">Coding Projects</h1>
            {/* Info Container*/}
            <div className="grid lg:grid-cols-2 gap-16 md:grid-cols-1">
                {/* Project 1 | Back End */}
                <div className="flex flex-col gap-4" id="backEnd">
                    <h2 className="text-2xl font-normal">Back End | ASP.NET Core</h2>
                    <p>The Financial Management API is a robust back-end solution built using ASP.NET Core, showcasing advanced development capabilities for managing user data, expenses, and income efficiently. This API integrates SQLite for data handling and features comprehensive role-based authentication with JWT. This project demonstrates my expertise in REST API design, database modeling, and clean software architecture.</p>
                    {/* Feature mapping */}
                    <div className="h-full lg:min-h-3.5">
                        {featuresBackEnd.map((item) => (
                            <div className="border-b border-white border-opacity-50 pb-3 pt-3" key={item.id}>
                                <p>{item.feature}</p>
                            </div>
                        ))}

                    </div>


                    <div className="flex flex-row gap-7">
                        <div className="flex flex-row items-center gap-2 mt-4 transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-110">
                            <Img
                                source="/icons/gitHub.svg"
                                alt="Arrow"
                                className="w-6 h-6"
                                id=""
                            />
                            <a href="https://github.com/PaivarintaEmilia"
                                target="_blank"
                                rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>

                    <Img
                        source="/photos/code-on-computer.jpg"
                        alt="Back-end Code Image."
                        className="w-full h-44 object-cover object-top rounded-sm"
                        id=""
                    />
                </div>
                {/* Project 2 | Front End */}
                <div className="flex flex-col gap-4" id="frontEnd">
                    <h2 className="text-2xl font-normal">Front End | React & TypeScript</h2>
                    <p>The Expense Tracker is a dynamic front-end application built with React and TypeScript to help users effectively manage their personal finances. By leveraging Supabase for authentication and data storage, it ensures a seamless and secure user experience. This project highlights my skills in React development, state management, responsive UI design, and working with third-party tools like Supabase.</p>
                    {/* Feature mapping */}
                    <div className="h-full lg:min-h-3.5">
                        {featuresFrontEnd.map((item) => (
                            <div className="border-b border-white border-opacity-50 pb-3 pt-3" key={item.id}>
                                <p>{item.feature}</p>
                            </div>
                        ))}

                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-7">
                        <div className="flex flex-row items-center gap-2 mt-4 transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-110">
                            <Img
                                source="/icons/gitHub.svg"
                                alt="GitHub Icon linked to projects GitHub repository"
                                className="w-6 h-6"
                                id=""
                            />
                            <a href="https://github.com/PaivarintaEmilia/fullStackFrontEnd">GitHub Repository</a>
                        </div>
                        <div className="flex flex-row items-center gap-2 mt-4 transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-110">
                            <Img
                                source="/icons/arrow-icon.svg"
                                alt="Arrow"
                                className="w-6 h-6"
                                id=""
                            />
                            <a href="https://fullstackownmainproject.onrender.com/">Applications page</a>
                        </div>

                    </div>


                    <Img
                        source="/photos/frontEndProjectPage.png"
                        alt="Front-end Project Front Page Image."
                        className="w-full h-44 object-cover object-top rounded-sm"
                        id=""
                    />
                </div>

            </div>

        </div>
    );
}

export default CodingProjects;