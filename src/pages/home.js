import React from "react";

import FreeAngela from "../components/research/FreeAngela";
import BeyonceLemonade from "../components/research/BeyonceLemonade";
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

            <section>
                <div className="container home hero py-5">
                    <div className="w-75">
                        <h1>black female auteur</h1>
                        <p><em>/blak    ˈfēˌmāl    ōˈtər/ <br/>(noun)</em></p>
                        <p>a <strong><em>black, female</em></strong> filmmaker whose personal influence and artistic control over a movie are so great that the filmmaker is regarded as the author of the movie.</p>
                    </div>
                </div>
            </section>

            <section style={{background: "white"}}>
                <div className="container w-75 py-5">
                    <p><PTab />  </p>
                </div>
            </section>



            {/* MY CLAIM */}
            <section style={{background: "white", fontSize: "2em"}}>
                <div className="container home hero text-center">
                    <p>{THIS.CLAIM}</p>
                </div>
            </section>





            {/* TIMELINE + RESEARCH */}
            <div className="timeline px-4">
                <FreeAngela />
                <BeyonceLemonade />
            </div>

            <section className="text-center d-flex justify-content-center align-items-center" style={{height: "10vh", backgroundColor: "#fcfcfc"}}>
                End of Content
            </section>
        </>
    )

}

export default Home;