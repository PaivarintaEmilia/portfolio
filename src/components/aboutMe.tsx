import React from "react";
import Img from "../common/Img";


const AboutMe: React.FC = () => {

    return (
        <div className="flex flex-row justify-center items-center gap-12 my-24" id="aboutMe">
            {/* Text Container */}
            <div className="w-80">
                <h1 className="text-4xl font-medium mb-7">About Me</h1>
                <p>Bla bla bla Read more about my work experience and studies from my CV</p>
                {/* Link Container */}
                <div className="mt-4">
                    <div className="flex flex-row items-center gap-2">
                        <Img
                            source="/icons/file-icon.png"
                            alt="File Icon"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="#">Check the CV</a>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-4">
                        <Img
                            source="/icons/figma.png"
                            alt="Figma Icon"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="#">Check the Figma file of this portfolio</a>
                    </div>
                </div>
                {/* Social Media Container */}
                <div className="flex flex-row gap-4 mt-4">
                    <a href="mailto:mariaemilia.paivarinta@gmail.com">
                        <Img
                            source="/icons/email.png"
                            alt="Email Icon linked to send an email."
                            className="w-6 h-6 mt-4"
                            id=""
                        />
                    </a>
                    <a href="tel:+34722610406">
                        <Img
                            source="/icons/phone.png"
                            alt="Phone Icon linked to call."
                            className="w-6 h-6 mt-4"
                            id=""
                        />
                    </a>
                    <a href="https://github.com/PaivarintaEmilia"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img
                            source="/icons/gitHub.png"
                            alt="GitHub Icon linked to GitHub page."
                            className="w-6 h-6 mt-4"
                            id=""
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/emilia-päivärinta-8413a8152"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img
                            source="/icons/linkedIn.png"
                            alt="Figma Icon"
                            className="w-6 h-6 mt-4"
                            id=""
                        />
                    </a>


                </div>

            </div>
            {/* Img Container */}
            <div className="">
                <Img
                    source={"/photos/profilePic.jpg"}
                    alt={"Profile Picture Emilia Paivarinta."}
                    className={"w-80 rounded-sm"}
                    id={""}
                />
            </div>

        </div>
    );
}

export default AboutMe;