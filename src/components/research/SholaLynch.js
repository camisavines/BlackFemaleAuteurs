import React from "react";
import Tooltip from "../textTooltip";
import angeladavis from "../../images/FreeAngelaDavis.jpeg";

const SholaLynch = () => {
    const TITLE = "Free Angela Davis and All Political Prisoners";
    const AUTEUR = "Shola Lynch";
    const RELEASE_YEAR = "2013";
    const FILM_TYPE = "Documentary"
    const RUNTIME = "1h 22m"

    return (
        <div style={{minHeight: "100vh", paddingBottom: "40vh"}}>
            <div className="row home hero">
                <div className="col-md-6 col-xl-8 film-title">
                    <div className="w-100">
                        <h3 className="text-muted m-0">{AUTEUR}</h3>
                        <h1 className="my-5"><em>{TITLE}</em></h1>
                        <h5 className="text-muted m-0">
                            {RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}
                        </h5>
                    </div>
                </div>

                <div className="col-sm-6 col-xl-4 mt-4">
                    <img src="https://m.media-amazon.com/images/I/41RM61QX2FL._AC_.jpg" width="100%" alt="" />
                </div>
            </div>

            {/* Body Contetn */}
            <div className="row py-5">
                <div className="col-lg-8" style={{fontSize: "12pt", lineHeight:"3rem"}}>
                    <p>
                        This film <em>is</em> resistance, entirely! 
                        It clearly confronts racism, patriarchy, the US prison system, and perhaps the {" "}
                        <Tooltip label="indirect compliance of the US government to maintain these systems" text="<p className='m-0'>More on this later. Keep Reading!</p>"/>.
                    </p>
                    <p>Angela Davis began her professorship at the University of California, Los Angeles (UCLA) in 1969 after spending some time studying philosophy overseas. Only 25 years at the time, she was already well-known as an outspoken activist from UC San Diego. Her first lecture teaching at UCLA, Royce Hall to accommodate over 2,000 students who wished to attend.</p>
                    <p>She joined the philosophy department as an acting assistant professor, assigned to teach an introductory course in the fall while she finished her dissertation. Before she taught her first class, the Daily Bruin ran an op-ed that claimed the philosophy department had hired a member of the Communist Party— without naming any names. A week later, the <em>San Francisco Examiner</em> ran a story naming Davis as the subject of the article, and her salary and benefits were <Tooltip label="withheld" text="<p className='m-0'>YES! WITHHELD!</p>" />.</p>
                    <p>Davis admits, and was in fact actively involved in the Che-Lumumba Club, an all-black branch of the communist party. However, while citing the university’s policies protecting academic freedom, as well as her constitutional rights, she insisted that it had nothing to do with her employment at UCLA, and vowed to fight for her job <Tooltip label="in court" text="<p className='m-0'>She won by the way.</p>" /> <em>(UCLA 100)</em>.</p>
                    <p>Outside of academia, Davis was a strong supporter of the Soledad Brothers, John W. Clutchette, Fleeta Drumgo and George Lester Jackson, who were accused of killing a prison guard after several African American inmates were killed by another guard without consequence. In support of the Soledad Brothers, members of the Black Panther Party, conducted the Marin County Courthouse Takeover with guns that were purchased in Davis’s name.</p>
                    <p>
                        [... Discuss the takeover, fbi most wanted list, time running from fbi, arrest, trial ...]
                    </p>
                </div>

                <div className="col-lg-12 my-5">
                    <figure className="figure">
                        <img src={angeladavis} className="figure-img img-fluid rounded" alt="Angela Davis 1972"/>
                        <figcaption className="figure-caption text-right">Angela Davis. <em>March 1972</em></figcaption>
                    </figure>
                </div>

                <div className="col-lg-8" style={{fontSize: "12pt", lineHeight:"3rem"}}>
                    <p>
                        [... Discuss the result, relate it to the claim ...]
                    </p>
                    <p>
                        [... Then Discuss the auteur, relevance, and conclusion ...]
                    </p>
                </div>

            </div>
            
        </div>
    )
}

export default SholaLynch;