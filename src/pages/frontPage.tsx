import React from "react";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import Websites from "../components/websites";
import CodingProjects from "../components/codingProjects";
import TableOfContent from "../components/tableofcontext";
import Footer from "../components/footer";


const FrontPage: React.FC = () => {

    return (
        <div>
            <Hero></Hero>
            <TableOfContent></TableOfContent>
            <CodingProjects></CodingProjects>
            <hr className="border-t-2 border-customTeal my-4 mx-24"/>
            <Websites></Websites>
            <hr className="border-t-2 border-customTeal my-4 mx-24"/>
            <AboutMe></AboutMe>
            <hr className="border-t-2 border-customTeal my-4 mx-24"/>
            <Footer></Footer>
        </div>
    );
}

export default FrontPage;