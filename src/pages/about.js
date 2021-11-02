import React from "react";
import { films } from "../data/filmList";

const About = () => {
    return (
        <div style={{backgroundColor: "white", color: "black", paddingTop: "5rem", paddingBottom: "4rem"}}>
            <section>
                <div className="container">
                    <h1>About</h1>

                    <div className="row">
                        <div className="col-sm-12">
                            {/* <h3>Course Description</h3> */}
                            {/* <p>In recent years, #OscarsSoWhite has highlighted Hollywood’s lack of racial inclusivity, and the #MeToo movement has underscored the pervasiveness of sexual assault in the entertainment industry. Amidst these longstanding realities, however, Black women filmmakers have been bringing their confident and perceptive visions to the cinematic screen. Throughout the twentieth century, the Hollywood studio system emerged and evolved as a dominant force in world cinema. With increasing output in the late twentieth century, Black female auteurs managed to finance, shoot, and release their work independent of these big studios. Moreover, in recent decades, Black women filmmakers have found ways to thrive alongside the big picture system despite its culture of exclusion.</p> */}
                            {/* <p>This course is a focused study of Black female auteurs in the United States. As a class, we will contemplate both the concept of the auteur in film history as well as the constraints of that approach to filmmaking. We will also examine how Black women filmmakers negotiate these challenges, and we will sample the range of expressive practices in Black women’s cinema. Screenings include early films such as the anthropological recordings of Zora Neale Hurston, iconic pictures by Kathleen Collins and Julie Dash, and twenty-first century films by Ava Duvernay, Janicza Bravo, and Numa Perrier. Assignments include film screening responses (4), one essay (5-7 pages), conference presentations, and a final project of independent research.</p> */}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="w-75 my-5">
                        <h1>Films</h1>
                        <p>Here are some of the films we studied. Much of the research that my classmates and I conducted is dervied from some of the first films ever created by black women.</p>
                    </div>

                    <div className="row">
                        {
                            films.map((movie) => {
                                return (
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
                                        <div className="w-100 mb-3" style={{
                                            backgroundImage: `url(${movie.poster})`, 
                                            paddingTop: "150%", 
                                            backgroundPosition: "center", 
                                            backgroundSize: "cover"
                                        }}></div>
                                        <p><b>{movie.auteur}</b><br/><em>{movie.title} ({movie.year})</em></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>


        </div>
    )

}

export default About;