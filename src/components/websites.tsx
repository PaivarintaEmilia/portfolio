import React from "react";
import Img from "../common/Img";


const Websites: React.FC = () => {

    return (
        <div className="flex flex-col gap-8 my-24 px-10" id="websitesAndECommerce">
            <h1 className="text-4xl font-medium mb-0">Websites and e-commerce</h1>
            <p className="mb-7">Please note that the structure or appearance of the websites may have changed since the completion of these projects, as clients have the ability to modify their sites. Therefore, the current website may not exactly match the version at the time of the project.</p>
            {/* Info Container*/}
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Item 1 */}
                <div className="flex flex-col gap-4" id="websites">
                    <h2 className="text-2xl font-normal">Website | Construction machines</h2>
                    <p>For JMT Machinery, a company specializing in the import and sale of earthmoving machinery, I developed a responsive website using the Elementor tool. The site is optimized for various devices and includes dynamic features to enhance user engagement. The design emphasizes the company's reliability and expertise in providing high-quality machinery and related services.</p>
                    <Img
                        source="photos/jmtmachinery-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4 transition delay-150 duration-300 ease-in-out hover:translate-x-5 hover:scale-110">
                        <Img
                            source="/icons/arrow-icon.svg"
                            alt="Arrow"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="https://jmtmachinery.fi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Check the website.</a>
                    </div>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col gap-4" id="eCommerce">
                    <h2 className="text-2xl font-normal">Accessible Website | Samae</h2>
                    <p>I created an AA-level accessible website for Samae Oy, an expert in diversity and inclusion. The site is designed to reflect the entrepreneur's brand identity and includes features such as adjustable text size, high contrast mode, and readable fonts to ensure inclusivity for all users. The content is organized to guide visitors through the company's services and philosophy effectively.</p>
                    <Img
                        source="/photos/samae-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4 transition delay-150 duration-300 ease-in-out hover:translate-x-5 hover:scale-110">
                        <Img
                            source="/icons/arrow-icon.svg"
                            alt="Arrow"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="https://samae.fi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Check the website.</a>
                    </div>
                </div>
                {/* Item 3 */}
                <div className="flex flex-col gap-4" id="eCommerce">
                    <h2 className="text-2xl font-normal">e-Commerce | Acoustic Store</h2>
                    <p>For a company selling acoustic products, I developed a modern and aesthetically pleasing e-commerce platform utilizing WooCommerce. The site offers a seamless shopping experience with clear categorization of products such as wall panels, ceiling solutions, and acoustic lighting. High-quality images and detailed product descriptions assist customers in making informed purchasing decisions.</p>
                    <Img
                        source="/photos/akustiikkakauppa-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4 transition delay-150 duration-300 ease-in-out hover:translate-x-5 hover:scale-110">
                        <Img
                            source="/icons/arrow-icon.svg"
                            alt="Arrow"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="https://akustiikkakauppa.fi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Check the website.</a>
                    </div>
                </div>
                {/* Item 4 */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-normal">e-Commerce | Natural Beauty</h2>
                    <p>For Juhlatalo Ukko Hjalmar, a venue offering rustic romantic settings for various events and accommodations, I developed a website that showcases their services and facilities. The site includes a small e-commerce section implemented with WooCommerce, allowing customers to purchase the company's products online. The design reflects the warm and inviting atmosphere of the venue.</p>
                    <Img
                        source="/photos/ukkohjalmar-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4 transition delay-150 duration-300 ease-in-out hover:translate-x-5 hover:scale-110">
                        <Img
                            source="/icons/arrow-icon.svg"
                            alt="Arrow"
                            className="w-6 h-6"
                            id=""
                        />
                        <a href="https://ukkohjalmar.fi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Check the website.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Websites;