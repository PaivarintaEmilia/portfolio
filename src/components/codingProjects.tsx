import React from "react";
import Img from "../common/Img";


const CodingProjects: React.FC = () => {

    const featuresBackEnd = [{ id: 1, feature: "Feature 1" }, { id: 2, feature: "Feature 2" }];

    const featuresFrontEnd = [{ id: 1, feature: "Feature 1" }, { id: 2, feature: "Feature 2" }];

    return (
        <div className="flex flex-col gap-8 my-24 px-10" id="codingProjects">
            <h1 className="text-4xl font-medium mb-8">Coding Projects</h1>
            {/* Info Container*/}
            <div className="grid grid-cols-2 gap-10">
                {/* Project 1 */}
                <div className="flex flex-col gap-4" id="backEnd">
                    <h2 className="text-2xl font-normal">Back End | ASP.NET Core</h2>
                    <p>Cras id metus non est tempus gravida et vel felis. Mauris ut ultrices justo, a finibus ex. Duis sed risus sit amet eros pulvinar aliquam. Sed auctor ipsum metus, sed porta eros semper et. Duis vitae scelerisque nunc. Sed sit amet viverra lacus. </p>
                    {/* Feature mapping */}

                    {featuresBackEnd.map((item) => (
                        <div className="border-b border-white border-opacity-50 pb-2" key={item.id}>
                            <p>{item.feature}</p>
                        </div>))}

                    <div className="flex flex-row items-center gap-2 mt-4">
                        <Img
                            source="/icons/gitHub.png"
                            alt="Arrow"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="https://github.com/PaivarintaEmilia">GitHub Repository</a>
                    </div>
                    <Img
                        source="/photos/code-on-computer.jpg"
                        alt="Back-end Code Image."
                        className="w-full h-44 object-cover object-top rounded-sm"
                        id=""
                    />
                </div>
                {/* Project 2 */}
                <div className="flex flex-col gap-4" id="frontEnd">
                    <h2 className="text-2xl font-normal">Front End | React & TypeScript</h2>
                    <p>Cras id metus non est tempus gravida et vel felis. Mauris ut ultrices justo, a finibus ex. Duis sed risus sit amet eros pulvinar aliquam. Sed auctor ipsum metus, sed porta eros semper et. Duis vitae scelerisque nunc. Sed sit amet viverra lacus. </p>
                    {/* Feature mapping */}
                    {featuresFrontEnd.map((item) => (
                        <div className="border-b border-white border-opacity-50 pb-2" key={item.id}>
                            <p>{item.feature}</p>
                        </div>))}

                    <div className="flex flex-row items-center gap-2 mt-4">
                        <Img
                            source="/icons/gitHub.png"
                            alt="Arrow"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="https://github.com/PaivarintaEmilia">GitHub Repository</a>
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