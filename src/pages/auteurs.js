import React from "react";
import { auteurs } from "../data/filmList";

const Auteurs = () => {
    return (
        <section>
            <div className="container">
                <h1>Auteurs</h1>
                <p>A list of many (not all) black female auteurs and their works.</p>
                <div className="row my-5">
                    {
                        auteurs.map((a) => {
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-3 h-100 my-5">
                                    <div className="text-center justify-content-center">
                                        <div 
                                            className="mb-4"
                                            style={{
                                                backgroundImage: `url(${a.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: "50%",
                                                width: "60%",
                                                paddingTop: "60%",
                                                marginLeft: "25%"
                                            }}
                                        />

                                        <p><b>{a.auteur}</b></p>
                                    </div>
                                    <ul>
                                        {a.films.map((f) => (<li><small>{f}</small></li>))}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Auteurs;