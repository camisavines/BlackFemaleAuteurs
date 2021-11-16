import React from 'react';

const BeyonceLemonade = () => {
    const TITLE = "Lemonade Video Album";
    const AUTEUR = "Beyoncé";
    const RELEASE_YEAR = "2012";


    return (
        <div className="tl-item">
            <div className="tl-dot b-primary"></div>
            <div className="tl-content">
                <h3>{TITLE} </h3>
                <p>{AUTEUR}</p>
                <p className="tl-date text-muted mt-1">{RELEASE_YEAR}</p>




            </div>
        </div>
    )
}

export default BeyonceLemonade;