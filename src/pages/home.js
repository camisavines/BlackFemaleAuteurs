import React from "react";

import SholaLynch from "../components/research/SholaLynch";
import BeyonceLemonade from "../components/research/BeyonceLemonade";
import ReginaKing  from "../components/research/ReginaKing";
import StellaMeghie from "../components/research/StellaMeghie";

import Tooltip from "../components/textTooltip";
import hero from "../images/Daughters_of.jpeg";
import "../styles/home.css";
import "../styles/timeline.css";

const Home = () => {
    return (
        <>
            <section className="home hero">
                <div className="container">
                    <h1>Resistance of Hegemony: Mental Liberation during the Renaissance of Black Female Auteurs</h1>
                    <p>Camisa Vines <br/> <small className="text-muted">December 14, 2021</small></p>

                    <figure className="figure my-3">
                        <img src={hero} className="figure-img img-fluid rounded" alt="Julie Dash 1991"/>
                        <figcaption className="figure-caption text-right"><em>Daughters of the Dust (1991)</em> by Julie Dash</figcaption>
                    </figure>

                    <div className="row py-5" style={{fontSize: "12pt", lineHeight:"3rem"}}>
                        <div className="col-lg-8">
                            <p>
                                <span className="first-letter">T</span>he 
                                <Tooltip label="intersectionality" text={`
                                    <p>
                                        the interconnected nature of social categorizations such as race, class, 
                                        and gender as they apply to a given individual or group, regarded as creating overlapping 
                                        and interdependent systems of discrimination or disadvantage.
                                    </p>`
                                } /> 
                                of black women makes them the most disrespected and unprotected persons in America. 
                                In the film industry, there are also the most unsupported. 
                                New research reveals the barriers that Black women in the TV and film industry face, 
                                including the lack of financial support from major Hollywood studios, the opposition to expose 
                                the sociopolitical systems of racism, patriarchy, and homophobia, and the opposition to allow black 
                                women to explore the textures of Black women’s lives independent of these systems. 
                                However, in the past few years, we’ve seen a ground-breaking renaissance of black female film, 
                                where such auteurs are reshaping and defining black identity and culture by resisting 
                                <Tooltip label=" cultural hegemony " text={`
                                    <p>
                                        In Marxist philosophy, cultural hegemony is the dominance of a culturally diverse society 
                                        by the ruling class who manipulate the culture of that society—the beliefs and explanations, 
                                        perceptions, values, and mores—so that the worldview of the ruling class becomes the accepted cultural norm.
                                    </p>
                                `}/>
                                and creating a more inclusive and representative media. By these works, it is affirmed 
                                that the images, messages, and artistry created by black female auteurs are the tools to 
                                bring forth 
                                <Tooltip label=" mental liberation " text={`
                                    <p>
                                        the liberation of mental colonization which is the internalized attitude of ethnic or cultural inferiority felt by people of color as a result of colonization.
                                    </p>
                                `} /> 
                                from prevailing ideologies rooted in white supremacy. 
                                If black women were given the same platforms, resources, and financial support as men to persuade the media, 
                                they could single-handedly revolutionize the regarding and understanding of oppressed peoples.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container home hero">
                    <div className="w-75">
                        <h1>black female auteur</h1>
                        <p><em>/blak    ˈfēˌmāl    ōˈtər/ <br/>(noun)</em></p>
                        <p>a <strong><em>black, female</em></strong> filmmaker whose personal influence and artistic control over a movie are so great that the filmmaker is regarded as the author of the movie.</p>
                    </div>
                </div>
            </section>



            <section>
                <div className="container">
                    {/* <SholaLynch /> */}
                    {/* <ReginaKing /> */}
                    <StellaMeghie />
                    <BeyonceLemonade />
                </div>
            </section>
        </>
    )

}

export default Home;