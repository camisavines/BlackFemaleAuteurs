import React from "react";
import { films, favorites } from "../data/filmList";

const About = () => {
    return (
        <div style={{backgroundColor: "white", color: "black", paddingTop: "5rem", paddingBottom: "4rem"}}>
            <section>
                <div className="container about" >
                    <h1>About</h1>
                    <p>
                        This site represents the research I conducted for my final project in the course MSCH-F 375: Black Female Auteurs. 
                        It is formatted as an annotated bibliography that works to examine acts of resistance made by black women throughout the history 
                        of the film industry by highlighting extraordinary films by black women. 
                        Each film is analyzed by its relation to its auteur and its connection to some of the issues that black women were facing around the time of its release. 
                        While this analysis works to underline the definition of mental colonization, reveal the barriers that black women face in the film industry, and discuss the effect 
                        that these women have on society, it also works to celebrate the artistic approach and its disruptive and revolutionary nature.
                    </p>


                    <div className="row">
                        <div className="col-lg-12 my-4">
                            <h3>Course Description</h3>
                            <p>In recent years, #OscarsSoWhite has highlighted Hollywood’s lack of racial inclusivity, and the #MeToo movement has underscored the pervasiveness of sexual assault in the entertainment industry. Amidst these longstanding realities, however, Black women filmmakers have been bringing their confident and perceptive visions to the cinematic screen. Throughout the twentieth century, the Hollywood studio system emerged and evolved as a dominant force in world cinema. With increasing output in the late twentieth century, Black female auteurs managed to finance, shoot, and release their work independent of these big studios. Moreover, in recent decades, Black women filmmakers have found ways to thrive alongside the big picture system despite its culture of exclusion.</p>
                            <p>This course is a focused study of Black female auteurs in the United States. As a class, we will contemplate both the concept of the auteur in film history as well as the constraints of that approach to filmmaking. We will also examine how Black women filmmakers negotiate these challenges, and we will sample the range of expressive practices in Black women’s cinema. Screenings include early films such as the anthropological recordings of Zora Neale Hurston, iconic pictures by Kathleen Collins and Julie Dash, and twenty-first century films by Ava Duvernay, Janicza Bravo, and Numa Perrier.
                                Course objectives and learning outcomes are to:
                                <ul>
                                    <li>Strengthen knowledge and understanding of representations of race, gender, and sexuality in various genres of Black women’s film</li>
                                    <li>Employ analytical concepts in the study of culture, identity, and representation in these films</li>
                                    <li>Enable an appreciation of film as a visual and narrative artform.</li>
                                </ul>
                            </p>

                            <p className="text-muted"><em>From the course description provided by Dr. Michael Montesano, MSCH-F 375: Black Female Auteurs, Fall 2021, Indiana University-Bloomington.</em></p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="my-5">
                        <h2>Films</h2>
                        <p>Here are some of the films we studied. Much of the research that my classmates and I conducted is dervied from these films and more, all created by black women.</p>
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

            <section>
                <div className="container py-5">
                    <div className="my-5">
                        <h2>Favorites</h2>
                        <p>Here are some of my personal favorites, also all created by black women.</p>
                    </div>

                    <div className="row">
                        {
                            favorites.map((movie) => {
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