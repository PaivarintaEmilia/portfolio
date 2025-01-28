import React from "react";
import Img from "../common/Img";


const Hero: React.FC = () => {

    return (
        <div className="bg-[url('/photos/hero.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center font-poppins rounded-b-lg text-center">
            <div className="mt-52 mb-52">
                <h1 className="text-4xl font-normal text-white">PORTFOLIO</h1>
                <h2 className="text-2xl font-normal text-white mt-5">MARIA EMILIA</h2>
                <h2 className="text-5xl font-normal text-white">PÄIVÄRINTA</h2>
                <div className="flex flex-row justify-center gap-5">
                    <a href="https://github.com/PaivarintaEmilia"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img
                            source="/icons/gitHub.svg"
                            alt="GitHub Icon to navigate GitHub page."
                            className="w-6 h-6 mt-4"
                            id=""
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/emilia-päivärinta-8413a8152"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img
                            source="/icons/linkedIn.svg"
                            alt="Figma Icon to navigate to LinkedIn Profile Page."
                            className="w-6 h-6 mt-4"
                            id=""
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;