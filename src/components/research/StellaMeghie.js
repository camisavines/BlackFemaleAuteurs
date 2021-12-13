import React from 'react';
import Tooltip from '../textTooltip';

const StellaMeghie = () => {
    const TITLE = "THE PHOTOGRAPH";
    const AUTEUR = "Stella Meghie";
    const RELEASE_YEAR = "2020";
    const FILM_TYPE = "Drama"
    const RUNTIME = "1h 46m"

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
                    <img src="https://images.moviesanywhere.com/40f09324712d744051c8a68a816c4164/c2a593f8-5a9d-4350-97ac-1837de8d11eb.jpg" width="100%" alt="" />
                </div>
            </div>

            <div className='row py-5 my-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <p>
                        <span className='first-letter'>W</span>e are so here for black love!!!
                        Black Love is a Revolutionary Act!
                    </p>
                    <p>

                    </p>
                </div>
            </div>



            
        </div>
    )
}

export default StellaMeghie;