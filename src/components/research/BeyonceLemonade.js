import React from 'react';
import Tooltip from '../textTooltip';

import launchicon from "../../images/launch_icon.svg"
import holdup from "../../images/Lemonade/holdup.jpeg";


const BeyonceLemonade = () => {
    const TITLE = "LEMONADE";
    const AUTEUR = "Beyoncé Knowles-Carter";
    const RELEASE_YEAR = "2016";
    const FILM_TYPE = "Video Album"
    const RUNTIME = "1h 5m"


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
                    {/* <img src="https://cdn.vox-cdn.com/thumbor/kt3wfD7uUnHFVzR1eL7VQfHhhdQ=/6x50:1240x873/1200x800/filters:focal(6x50:1240x873)/cdn.vox-cdn.com/uploads/chorus_image/image/49387275/Screen_Shot_2016-04-23_at_9.54.53_PM.0.0.png" width="100%" /> */}
                    <img src="https://api.time.com/wp-content/uploads/2016/11/lemonade.jpeg?" width="100%" alt="" />
                    {/* <img src="https://pyxis.nymag.com/v1/imgs/245/4b9/b4496eda47e6c7c641cc7fa774498cab82-25-beyonce-lemonade-cover.rsquare.w700.jpg" width="100%" alt="" /> */}
                </div>
            </div>


            
            <div className="row py-5" style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className="col-lg-8">
                    <p><span className="first-letter">Q</span>ueen Bey! You guys didn't honestly think I would skip over Beyoncé, did you? The creative genius! The Queen! Don't be silly.</p>
                    <p>
                        Beyoncé’s sixth studio album is regarded as one of the 
                        <Tooltip label="most highly acclaimed"  text={`<p>And with good reason!</p>`}/> 
                        projects in music history and definitely most acclaimed in her career. 
                        It's hard to put into words the impact of the album, because it absolutely optimizes mental liberation by 
                        resisting hegemonic norms, showcasing the richness of black culture, and inspiring pride of black ancestry and survival. 
                        The 12-track project made several references to black history and music, and discussed sociopolitical issues facing black Americans, 
                        including the lasting affects of slavery, infidelity and truama in relationships, black feminism, and generational curses. 
                    </p>
                    <p>
                        Lemonade documents her personal experiences and attempts to resolve her own internal traumas that many black people can relate to. 
                        In a 2018 Vogue article, she writes, “I come from a lineage of broken male-female relationships, abuse of power, and mistrust. … 
                        Only when I saw that clearly was I able to resolve those conflicts in my own relationship. 
                        Connecting to the past and knowing our history makes us both bruised and beautiful”. 
                        In this, she acknowledges a struggle to liberate herself from prevailing ideologies of ethnic and cultural inferiority. 
                        With this project, she provides a captivating way for many black people, and especially black women, to unlearn and mentally overcome internal hatred and discrimination.
                    </p>
                    <p>
                        In an interview with Elle, published on April 4, 2016, Beyoncé said, "
                        <Tooltip 
                            label="I hope I can create art that helps people heal. Art that makes people feel proud of their struggle." 
                            text={`<p>And she definitely understood the assignment!</p>`}
                        />"
                    </p>
                    <p>
                    Beyoncé’s Lemonade contains 4 music videos, accompanied by a 65-minute mini-feature film of the same title on HBO. To further explain the ways in which the audiovisual is liberating, 
                    it best to dissect the meanings of both the lyrics and imagery within, both together and separately.
                    </p>
                </div>
            </div>

            {/* HOLD UP */}
            <div className='row my-5 pb-5'>
                <div className='col-12'>
                    <h1 style={{fontWeight: "900"}}>HOLD UP</h1>

                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/PeonBmeFR8o" allowfullscreen></iframe>
                    </div>
                </div>
            </div>


            {/* SORRY */}
            <div className='row my-5 py-5'>
                <div className='col-12'>
                    <h2 style={{fontWeight: "900"}}>SORRY</h2>

                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/QxsmWxxouIM" allowfullscreen></iframe>
                    </div>
                </div>
            </div>


            {/* ALL NIGHT */}
            <div className='row my-5 py-5'>
                <div className='col-12'>
                    <h2 style={{fontWeight: "900"}}>ALL NIGHT</h2>

                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/gM89Q5Eng_M" allowfullscreen></iframe>
                    </div>
                </div>
            </div>


            {/* FORMATION */}
            <div className='row my-5 py-5'>
                <div className='col-12'>
                    <h2 style={{fontWeight: "900"}}>FORMATION</h2>

                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/WDZJPJV__bQ" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='col-lg-8 my-5'>
                    <p>
                        Featured director of “Formation” Melina Matsoukas states that Beyoncé explained the concepted to her stating that she wanted to “She wanted to show the historical impact of slavery on black love, and what it has done to the black family, and black men and women—how we're almost socialized not to be together”. 
                    </p>
                </div>
            </div>

        </div>
    )
}

export default BeyonceLemonade;