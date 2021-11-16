import React from 'react';

const BeyonceLemonade = () => {
    const TITLE = "Lemonade";
    const AUTEUR = "Beyoncé Knowles-Carter";
    const RELEASE_YEAR = "2016";
    const FILM_TYPE = "Video Album"
    const RUNTIME = "1h 22m"
    const RELEASE_DATE = "April 23, 2016";


    return (
        <div className="tl-item">
            <div className="tl-dot b-primary"></div>
            <div className="tl-content">
                <h3>{TITLE}</h3>
                <div>{AUTEUR}</div>
                <div className="tl-date text-muted mt-1">{RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}</div>




            </div>
        </div>
    )
}

export default BeyonceLemonade;