import React from "react";





const Footer: React.FC = () => {

    const d = new Date();
    let year = d.getFullYear();


    return (
        <div className="p-10 text-center">
            <p>Copyright ©{year} | Emilia Päivärinta</p>
        </div>
    );
}

export default Footer;