import React from 'react';
import Tooltip from '../textTooltip';

const MelinaMatsoukas = () => {
    const TITLE = "QUEEN & SLIM";
    const AUTEUR = "Melina Matsoukas";
    const RELEASE_YEAR = "2019";
    const FILM_TYPE = "Romance/Drama"
    const RUNTIME = "2h 12m"

    return (
        <div style={{minHeight: "100vh", paddingBottom: "40vh"}}>
            <div className="row home hero">
                <div className="col-md-6 film-title">
                    <div className="w-100">
                        <h3 className="m-0">{AUTEUR}</h3>
                        <h1 className="my-5"><em>{TITLE}</em></h1>
                        <h5 className="text-muted m-0">
                            {RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}
                        </h5>
                    </div>
                </div>

                <div className="col-sm-6 mt-4">
                    <img src="https://picfiles.alphacoders.com/339/339823.jpg" width="100%" alt="" />
                </div>
            </div>

            <div className='row my-5 py-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <p>
                        <span className="first-letter">N</span>o need to grab the tissue this time. 
                    </p>
                </div>
            </div>



            
        </div>
    )
}

export default MelinaMatsoukas;