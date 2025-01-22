import React from "react";
import Img from "../common/Img";


const Websites: React.FC = () => {

    return (
        <div className="flex flex-col gap-8 my-24 px-10" id="websitesAndECommerce">
            <h1 className="text-4xl font-medium mb-7">Websites and e-commerce</h1>
            {/* Info Container*/}
            <div className="grid grid-cols-2 gap-12">
                {/* Item 1 */}
                <div className="flex flex-col gap-4" id="websites">
                    <h2 className="text-2xl font-normal">Website | Construction machines</h2>
                    <p>Cras id metus non est tempus gravida et vel felis. Mauris ut ultrices justo, a finibus ex. Duis sed risus sit amet eros pulvinar aliquam. Sed auctor ipsum metus, sed porta eros semper et. Duis vitae scelerisque nunc. Sed sit amet viverra lacus. </p>
                    <Img
                        source="photos/jmtmachinery-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4">
                        <Img
                            source="/icons/arrow-icon.png"
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
                    <h2 className="text-2xl font-normal">Website | Saavutettavuus Samae</h2>
                    <p>Cras id metus non est tempus gravida et vel felis. Mauris ut ultrices justo, a finibus ex. Duis sed risus sit amet eros pulvinar aliquam. Sed auctor ipsum metus, sed porta eros semper et. Duis vitae scelerisque nunc. Sed sit amet viverra lacus. </p>
                    <Img
                        source="/photos/samae-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4">
                        <Img
                            source="/icons/arrow-icon.png"
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
                    <p>Cras id metus non est tempus gravida et vel felis. Mauris ut ultrices justo, a finibus ex. Duis sed risus sit amet eros pulvinar aliquam. Sed auctor ipsum metus, sed porta eros semper et. Duis vitae scelerisque nunc. Sed sit amet viverra lacus. </p>
                    <Img
                        source="/photos/akustiikkakauppa-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4">
                        <Img
                            source="/icons/arrow-icon.png"
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
                    <p>Cras id metus non est tempus gravida et vel felis. Mauris ut ultrices justo, a finibus ex. Duis sed risus sit amet eros pulvinar aliquam. Sed auctor ipsum metus, sed porta eros semper et. Duis vitae scelerisque nunc. Sed sit amet viverra lacus. </p>
                    <Img
                        source="/photos/ukkohjalmar-fi.png"
                        alt="File Icon"
                        className="w-full h-52 object-cover object-top rounded-sm"
                        id=""
                    />
                    <div className="flex flex-row items-center gap-2 mt-4">
                        <Img
                            source="/icons/arrow-icon.png"
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