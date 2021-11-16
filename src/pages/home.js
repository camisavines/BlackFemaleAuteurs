import React from "react";

import FreeAngela from "../components/research/FreeAngela";
import BeyonceLemonade from "../components/research/BeyonceLemonade";
import "../styles/home.css";
import "../styles/timeline.css";

const Home = () => {
    return (
        <>
            <section>
                <div className="container home hero my-5">
                    <div className="w-75">
                        <h1>Black Women, Resistance & Film</h1>
                        <p>Camisa Vines</p>
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

            <section style={{background: "white", height:"10vh"}}>

            </section>

            <div className="timeline px-4">
                <FreeAngela />
                <BeyonceLemonade />
            </div>
        </>
    )

}

export default Home;