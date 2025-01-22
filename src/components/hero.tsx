import React from "react";
import Img from "../common/Img";


const Hero: React.FC = () => {

    return (
        <div>
            <div>
                <h1>PORTFOLIO</h1>
                <h2>MARIA EMILIA</h2>
                <h2>PÄIVÄRINTA</h2>
                <div>
                    <Img
                        source={"/icons/gitHub.png"}
                        alt={"GitHub Icon"}
                        className={""}
                        id={""}> {/* Is this needed? */}
                    </Img>

                </div>
            </div>

        </div>
    );
}

export default Hero;