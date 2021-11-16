import React from 'react';

const FreeAngela = () => {
    const TITLE = "Free Angela Davis and All Political Prisoners";
    const AUTEUR = "Shola Lynch";
    const RELEASE_YEAR = "2012";


    return (
        <div className="tl-item active bg-dark">
            <div className="tl-dot b-primary"></div>
            <div className="tl-content px-4">
                <h3>{TITLE} </h3>
                <p>{AUTEUR}</p>
                <p className="tl-date text-muted mt-1">{RELEASE_YEAR}</p>




            </div>
        </div>
    )
}

export default FreeAngela;