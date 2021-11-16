import React from 'react';

const FreeAngela = () => {
    const TITLE = "Free Angela Davis and All Political Prisoners";
    const AUTEUR = "Shola Lynch";
    const RELEASE_YEAR = "2013";
    const FILM_TYPE = "Documentary"
    const RUNTIME = "1h 22m"
    // const RELEASE_DATE = "August 5, 2013";


    return (
        <div className="tl-item active">
            <div className="tl-dot b-primary"></div>
            <div className="tl-content px-4">
                <h3>{TITLE}</h3>
                <div>{AUTEUR}</div>
                <div className="tl-date text-muted mt-1">{RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}</div>

                <div className="row mt-4">
                    <div className="col-sm-6 col-md-4 col-lg-5 pb-3">
                        <img src="https://m.media-amazon.com/images/I/41RM61QX2FL._AC_.jpg" width="100%" />
                    </div>

                    <div className="col-md-8 col-lg-7 px-3">
                        <p>Resistance is ingrained in every scence and in every aspect of this film. </p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default FreeAngela;