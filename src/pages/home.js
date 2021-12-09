import React from "react";

import BeyonceLemonade from "../components/research/BeyonceLemonade";
import SholaLynch from "../components/research/SholaLynch";
// import PTab from "../components/paragraphTab";
import * as THIS from "../data/researchOutline";

import Tooltip from "../components/textTooltip";
import "../styles/home.css";
import "../styles/timeline.css";

const Home = () => {
    return (
        <>
            <section className="home hero py-5">
                <div className="container">
                    <h1>Resistance of Hegemony: Mental Liberation during the Renaissance of Black Female Auteurs</h1>
                    <p>Camisa Vines <br/> <small className="text-muted">December 14, 2021</small></p>
                    <div className="heroimage" />

                    <div className="row py-5" style={{fontSize: "14pt"}}>
                        <div className="col-lg-8">
                            <p>
                                <span className="first-letter">T</span>he <Tooltip label="intersectionality" text={`
                                    <p>the interconnected nature of social categorizations such as race, class, and gender as they apply to a given individual or group, regarded as creating overlapping and interdependent systems of discrimination or disadvantage.</p>`
                                } /> 
                                {THIS.PURPOSE} 
                                {THIS.CLAIM}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <hr/>
                <div className="container home hero">
                    <div className="w-75">
                        <h1>black female auteur</h1>
                        <p><em>/blak    ˈfēˌmāl    ōˈtər/ <br/>(noun)</em></p>
                        <p>a <strong><em>black, female</em></strong> filmmaker whose personal influence and artistic control over a movie are so great that the filmmaker is regarded as the author of the movie.</p>
                    </div>
                </div>
                <hr/>
            </section>



            <section>
                <div className="container">
                    <SholaLynch />
                    <BeyonceLemonade />

                </div>
            </section>





            {/* TIMELINE + RESEARCH */}
            {/* 
                <div className="timeline px-4">
                    <FreeAngela />
                </div> 
            */}
        </>
    )

}

export default Home;