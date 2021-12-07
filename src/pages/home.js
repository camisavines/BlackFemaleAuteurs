import React from "react";

import FreeAngela from "../components/research/FreeAngela";
import BeyonceLemonade from "../components/research/BeyonceLemonade";
import SholaLynch from "../components/research/SholaLynch";
import PTab from "../components/paragraphTab";
import * as THIS from "../data/researchOutline";
import "../styles/home.css";
import "../styles/timeline.css";

const Home = () => {
    return (
        <>
            <section className="bg-hero">
                <div className="container home hero text-brown">
                    <div className="w-75">
                        {/* <div className="w-50"> */}
                            <h1>Black Women, Resistance & Film</h1>
                            <p>Camisa Vines</p>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            
{/* 
            <section>
                <div className="container home hero">
                    <div className="w-75">
                        <h1>black female auteur</h1>
                        <p><em>/blak    ˈfēˌmāl    ōˈtər/ <br/>(noun)</em></p>
                        <p>a <strong><em>black, female</em></strong> filmmaker whose personal influence and artistic control over a movie are so great that the filmmaker is regarded as the author of the movie.</p>
                    </div>
                </div>
            </section>
 */}

            {/* Purpose and Claim */}
            <section style={{background: "white"}}>
                <div className="container home hero">
                    <p><PTab />{THIS.PURPOSE} <strong>{THIS.CLAIM}</strong></p>
                </div>
            </section>


            <section>
                <div className="container">
                    <SholaLynch />
                </div>
            </section>





            {/* TIMELINE + RESEARCH */}
            <div className="timeline px-4">
                {/* <FreeAngela /> */}
                {/* <BeyonceLemonade /> */}
            </div>

        </>
    )

}

export default Home;