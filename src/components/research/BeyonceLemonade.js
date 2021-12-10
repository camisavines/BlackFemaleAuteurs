import React from 'react';
import Tooltip from '../textTooltip';

const BeyonceLemonade = () => {
    const TITLE = "LEMONADE";
    const AUTEUR = "Beyoncé Knowles-Carter";
    const RELEASE_YEAR = "2016";
    const FILM_TYPE = "Video Album"
    const RUNTIME = "1h 5m"


    return (
        <div style={{minHeight: "100vh", paddingBottom: "40vh"}}>
            <div className="row home hero">
                <div className="col-md-6 col-xl-6 film-title">
                    <div className="w-100">
                        <h3 className="m-0">{AUTEUR}</h3>
                        <h1 className="my-5"><em>{TITLE}</em></h1>
                        <h5 className="text-muted m-0">
                            {RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}
                        </h5>
                    </div>
                </div>

                <div className="col-md-6 col-xl-6 mt-4">
                    {/* <img src="https://cdn.vox-cdn.com/thumbor/kt3wfD7uUnHFVzR1eL7VQfHhhdQ=/6x50:1240x873/1200x800/filters:focal(6x50:1240x873)/cdn.vox-cdn.com/uploads/chorus_image/image/49387275/Screen_Shot_2016-04-23_at_9.54.53_PM.0.0.png" width="100%" /> */}
                    <img src="https://api.time.com/wp-content/uploads/2016/11/lemonade.jpeg?" width="100%" alt="" />
                    {/* <img src="https://pyxis.nymag.com/v1/imgs/245/4b9/b4496eda47e6c7c641cc7fa774498cab82-25-beyonce-lemonade-cover.rsquare.w700.jpg" width="100%" alt="" /> */}
                </div>
            </div>


            
            <div className="row py-5" style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className="col-lg-8">
                    <p>Queen Bey! You guys didn't honestly think I would skip over Beyonceé, did you? The creative genius! the Queen! Don't be silly.</p>
                    <p>
                        Beyoncé’s sixth studio album is regarded as one of the 
                        <Tooltip label="most highly acclaimed"  text={`<p>And with good reason!</p>`}/> 
                        projects in music history.

                    </p>
                </div>
            </div>

        </div>
    )
}

export default BeyonceLemonade;