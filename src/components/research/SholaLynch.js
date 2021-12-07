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
            <div className="row py-5">
                <div className="col-md-6 col-xl-8 film-title">
                    <div className="w-100">
                        <h2>{TITLE}</h2>
                        <h5>{AUTEUR}</h5>
                        <h6 className="text-muted mt-1">{RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}</h6>
                    </div>
                </div>

                <div className="col-sm-6 col-xl-4 mt-4">
                    <img src="https://m.media-amazon.com/images/I/41RM61QX2FL._AC_.jpg" width="100%" alt="" />
                </div>
            </div>


            <div className="row py-5">
                <div className="col-sm-12">
                    <p>
                        Shola Lynch documents the events leading up to and surrounding the trial of Angela Davis against the United States governement. 
                        On trial for the murder of the serveral individuals during the Marin County Courthouse Takeover, Davis became an individual on the FBI’s Most Wanted list and an international beacon of counterculture radicalism and liberation for all oppressed groups. 
                        The documentary is a snappily edited, archivally wallpapered recollection of fearless behavior in the face of an antsy establishment. 
                        But it’s equally significant as a pointed act of retelling (Rapoid, NY Times). 
                    </p>

                </div>
            </div>
            

            {/* <div className="row">
                <div className="col-sm-6 col-md-4 pb-5">
                    <img src="https://m.media-amazon.com/images/I/41RM61QX2FL._AC_.jpg" width="100%" alt="" />            
                </div>

                <div className="col-sm-12 col-md-8">
                </div>
            </div> */}
        </div>
    )
}

export default SholaLynch;