import React from 'react';

const BeyonceLemonade = () => {
    const TITLE = "Lemonade";
    const AUTEUR = "Beyoncé Knowles-Carter";
    const RELEASE_YEAR = "2016";
    const FILM_TYPE = "Video Album"
    const RUNTIME = "1h 22m"
    // const RELEASE_DATE = "April 23, 2016";


    return (
        <div style={{minHeight: "100vh"}}>
            <div className="row home hero">
                <div className="col-md-6 col-xl-6 film-title">
                    <div className="w-100">
                        <h3 className="m-0">{AUTEUR}</h3>
                        <h1 className="my-5">{TITLE}</h1>
                        <h5 className="text-muted mt-1">
                            {RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}
                        </h5>
                    </div>
                </div>

                <div className="col-sm-6 col-xl-6 mt-4">
                    {/* <img src="https://api.time.com/wp-content/uploads/2016/11/lemonade.jpeg?" width="100%" alt="" /> */}
                    <img src="https://pyxis.nymag.com/v1/imgs/245/4b9/b4496eda47e6c7c641cc7fa774498cab82-25-beyonce-lemonade-cover.rsquare.w700.jpg" width="100%" alt="" />
                </div>
            </div>


            <div className="row py-5">
                <div className="col-sm-12">

                </div>
            </div>

        </div>
    )
}

export default BeyonceLemonade;