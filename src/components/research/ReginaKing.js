import React from 'react';
import Tooltip from '../textTooltip';

const ReginaKing = () => {
    const TITLE = "THE HARDER THEY FALL";
    const AUTEUR = "Regina King";
    const RELEASE_YEAR = "2021";
    const FILM_TYPE = "Western"
    const RUNTIME = "2h 19m"

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
                    <img src="https://images.squarespace-cdn.com/content/v1/5efce5920d28887981c5bd9b/1632834547356-TUXMNLADNXDAGIKV9BGB/The+Harder+They+Fall+official+poster.jpg?format=1000w" width="100%" alt="" />
                </div>
            </div>



            
        </div>
    )
}

export default ReginaKing;