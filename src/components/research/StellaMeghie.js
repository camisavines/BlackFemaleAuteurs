import React from 'react';
import Tooltip from '../textTooltip';

const StellaMeghie = () => {
    const TITLE = "THE PHOTOGRAPH";
    const AUTEUR = "Stella Meghie";
    const RELEASE_YEAR = "2020";
    const FILM_TYPE = "Drama"
    const RUNTIME = "1h 46m"

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
                    <img src="https://images.moviesanywhere.com/40f09324712d744051c8a68a816c4164/c2a593f8-5a9d-4350-97ac-1837de8d11eb.jpg" width="100%" alt="" />
                </div>
            </div>

            <div className='row py-5 my-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <p>
                        <span className='first-letter'>W</span>e are so here for black love!!!
                        This is such a beautiful and revolutionary film! <br/> Let me tell you why. <br/>
                    </p>
                    <p>But first, <Tooltip label="the meet cute and brief summary." text={`<p>If you haven't seen this movie, what are you waiting for?</p>`}/></p>

                    <p>
                        Stella Meghie chronicles a brewing love story between the daughter of a famous photographer, Mae, and an investigative reporter, Michael. 
                        While Michael is interviewing a man named Issac about his life after hurricane Katrina, he takes interest in a photo of the late Christina Eames. 
                        Presently, Christina’s daughter, Mae, has a copy of the same photo and two letters from her mother. Michael, following the story, sets up a meeting with Mae. 
                        Attracted to each other, they both decide to go on their first date, ending the night with a kiss. 
                        Throughout the film, their attraction grows into a passionate connection. 
                        Complications arise when Micheal accepts a job offer in London. 
                        Mae explains that long-distance relationships aren’t practical, but while helping Michael complete his research, she takes advice from one of her mother’s letters saying she wished she were better at love. 
                        The 
                        <Tooltip label="couple" text={`<p>Shoutout to Issa Rae and LaKeith Stanfield for their performance</p>`} />
                        meet in London at a Kendrick Lamar concert and promise each other to give long-distance a try.
                    </p>

                    <p>
                        Ok, so typical hallmark romcom storyline, but this is different! 
                        Although unlike films such as <em>Free Angela Davis and All Political Prisoners</em> and <em>Queen and Slim</em> where there is a very clear, and somewhat political, statement being made, this is 
                        <Tooltip label="counter hegemonic" text={`<p>an attempt to critique or dismantle hegemonic power.</p> <p>In other words, it is a confrontation and/or opposition (<b>or resistance</b>) to existing status quo.</p>`}/> 
                        because <b>Black love is revolutionary in itself.</b>
                    </p>

                    <p>I have to quote writer, photographer, and influencer Reginald Cunningham from Huff Post on this. <Tooltip label="He says:" text={`<p>And I literally could not have said this any better</p>`}/></p>
                    <figure className="p-3">
                        <blockquote className="blockquote">
                            <p className="pb-2">
                                Black love literally shouldn’t exist in America, in any form. 
                                Familial, heterosexual, trans, queer, community, etc. Everything was done to prevent it. It is the purest form and most glaring example in American History to me, of resistance. The structure of slavery was such that love, as well as many other ideologies, would not develop. Families were separated several times over, mothers and fathers were killed, men, women, and children raped. Marriage was forbidden among blacks unless sponsored by a white person, and even then, that was only in certain states.
                            </p>
                            <p>
                            White supremacy tried to kill the notion of black love, because it was a threat to oppression. White supremacy did its best to make “black love” an oxymoron. A figment of our imagination. For many, it still is.
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0">Reginald Cunningham, Contributor, Writer. Photographer. Creator. Influencer.</figcaption>
                    </figure>

                    <p>
                        Like I mentioned before, the project lacks a clear political statement, but it's another step toward normalizing black love as ‘whole’. 
                        In a society that was structured and aimed to keep black men and women from each other, this film is liberating because it illustrates that black love does exist and is allowed to exist freely, without confines. 
                    </p>

                    <figure className="figure my-5">
                        <img src="https://variety.com/wp-content/uploads/2019/11/the-photograph-lakieth-stanfield-issa-rae.jpg" className="figure-img img-fluid rounded" alt="Takeover 2 1970"/>
                        <figcaption className="figure-caption text-right"><small>The Photograph (2020).</small></figcaption>
                    </figure>

                    <p>We love to see it!</p>
                </div>
            </div>



            
        </div>
    )
}

export default StellaMeghie;