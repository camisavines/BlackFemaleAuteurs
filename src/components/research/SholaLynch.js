import React from "react";
import PTab from "../paragraphTab";


const SholaLynch = () => {
    const TITLE = "Free Angela Davis and All Political Prisoners";
    const AUTEUR = "Shola Lynch";
    const RELEASE_YEAR = "2013";
    const FILM_TYPE = "Documentary"
    const RUNTIME = "1h 22m"

    return (
        <div style={{minHeight: "100vh"}}>
            <h3 className="mb-5"><em>Free Angela Davis and All Political Prisoners.</em> Directed by Shola Lynch, 2013.</h3>

            <div className="row">
                <div className="col-sm-12 col-md-6 col-xl-4 bg-blue">
                    <img src="https://m.media-amazon.com/images/I/41RM61QX2FL._AC_.jpg" width="100%" alt=""  />            
                </div>

                <div className="col-sm-12 col-md-6 col-xl-8">
                    <p><PTab />Shola Lynch's documentary about Angela Davis is a Radical Beatified </p>
                </div>
            </div>
        </div>
    )
}

export default SholaLynch;