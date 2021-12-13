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

            <div className='row my-5 py-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <p>
                        <span className="first-letter">D</span>id you know that 1 in 4 cowboys in America were black? 
                        That number may be surprising since the majority of cowboys seen from Hollywood have looked like Clayton Moore, the white actor that plays The Lone Ranger. But many historians and movie critics argue that the character was largely inspired by the US marshal Bass Reeves, a Black man. Black people have been excluded from western representation for the same reason that they’ve been excluded from overall American history. And that’s because it does not fit the narrative that the true American is the white American (Attn). 
                        
                        Regina King corrects that narrative in the new western classic by peeking into the lives of forgotten legends. Referencing real, historical figures of western culture, such as Bill Pickett, Stagecoach Mary, and Nat Love, she presents the origination of cowboys in the United States.
                    </p>
                </div>
            </div>



            
        </div>
    )
}

export default ReginaKing;