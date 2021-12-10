import React from "react";
import Tooltip from "../textTooltip";
import angeladavis from "../../images/FreeAngelaDavis.jpeg";
import soledadbrothers from "../../images/soledadbrothers.jpeg";

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
            <div className="row py-5" style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className="col-lg-8">
                    <p>
                        This film <em>is</em> resistance, entirely! 
                        It clearly confronts racism, patriarchy, the US prison system, and perhaps the {" "}
                        <Tooltip label="indirect compliance of the US government to maintain these systems" text="<p className='m-0'>More on this later. Keep Reading!</p>"/>.
                    </p>
                    <p>
                        Let’s start with racism, shall we? 
                        The whole reason that Angela Davis was on trial was because of the events leading to the 
                        Marin County Courthouse Takeover (1970). 
                        We know that she was a strong supporter of the Soledad Brothers (not related), John W. Clutchette, Fleeta Drumgo and George Lester Jackson, 
                        who were accused of killing a prison guard after several other African American inmates were killed by another guard, Opie Miller, without consequence. 
                        Miller shot and killed 3 black prisoners at Soledad prison and was exonerated of all charges only days later by an all-white jury. 
                        None of the black inmates present for that shooting were asked to testify.
                        In the aftermath of the killings, incarcerated African Americans demanded answers. 
                        As a race war raged on behind Soledad’s walls, someone threw guard John Mills off the third level of the prison. 
                    </p>

                    <p>
                        Before the accusations, these men hadn’t even known each other, but Jackson became the primary suspect 
                        because of his well known revolutionary politics and affiliation with the Black Panther party. 
                        Drumgo and Clutchette were also targeted because of their political views <em>(Rebel Archives)</em>.
                    </p>

                    <figure className="figure my-5">
                        <img src={soledadbrothers} className="figure-img img-fluid rounded" alt="Soledad Brothers"/>
                        <figcaption className="figure-caption"><small>Soledad Brothers. Fleeta Drumgo (left), John W. Clutchette (center), George Lester Jackson (right).</small></figcaption>
                    </figure>

                    <p>
                    So, even with the lack of any convincing evidence, or any evidence at all, and strictly because of their affiliations with the Black Panther Party, they must have done it?
                    </p>

                </div>

                {/* Full figure of Angela Davis */}
                <div className="col-lg-12 my-5">
                    <figure className="figure">
                        <img src={angeladavis} className="figure-img img-fluid rounded" alt="Angela Davis 1972"/>
                        <figcaption className="figure-caption text-right"><small>Angela Davis. March 1972.</small></figcaption>
                    </figure>
                </div>

                <div className="col-lg-8">
                    <p>
                        [... Discuss the result, relate it to the claim ...]
                    </p>
                </div>

            </div>
            
        </div>
    )
}

export default SholaLynch;