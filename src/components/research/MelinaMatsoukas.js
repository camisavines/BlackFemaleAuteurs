import React from 'react';
import Tooltip from '../textTooltip';

import trafficestop from "../../images/QueenSlim/trafficstop.jpeg";
import junior from "../../images/QueenSlim/junior.jpeg";
import end from "../../images/QueenSlim/unequaltreatment.jpeg";
import snitch from "../../images/QueenSlim/snitch.png";
import loves from "../../images/QueenSlim/lovescene.jpeg"


const MelinaMatsoukas = () => {
    const TITLE = "QUEEN & SLIM";
    const AUTEUR = "Melina Matsoukas";
    const RELEASE_YEAR = "2019";
    const FILM_TYPE = "Romance/Drama"
    const RUNTIME = "2h 12m"

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
                    <img src="https://picfiles.alphacoders.com/339/339823.jpg" width="100%" alt="" />
                </div>
            </div>

            <div className='row my-5 py-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <p>
                        <span className="first-letter">N</span>o need to grab the tissue<Tooltip label="this time." text={`<p>Just keep some nearby the next time you watch this</p>`}/> 
                        I'll try to keep the emotional triggers to a minimum. <br/> Even for myself, this is such a difficult film to watch but its resistance is crucial given the state of political tension and police brutality in the country, then and now. 
                        It was huge for the<Tooltip label="BLM" text={`<p>#BlackLivesMatter</p>`}/> movement, and today, still one of the most intentional and successfully executed forms of media by any artist, filmmaker, musician, etc. 
                        It is also one of the greatest examples of resistance and black experience pedagogy, in my personal opinion.
                    </p>

                    <p>
                        The 2019 romantic crime drama follows the story of a young black couple on the run following the death of a police officer during a traffic stop. 
                        In it, director Melina Matsoukas and playwright Lena Waithe discuss (amongst other things):
                        <ol>
                            <li>the media’s criminalization of black skin</li>
                            <li>the mental colonization of young black men to desire glorified deaths</li>
                            <li>the unequal treatment of blacks within the justice system</li>
                            <li>the mental impact of colonization that influences self-inflicted division amongst people of color</li>
                        </ol>
                    </p>
                    <p><b><em>*Note:</em></b> Although Queen & Slim is <b>not based on a true story</b>, it was inspired by real headlines, including the fatal shooting of Trayvon Martin.</p>
                    <p>Again, a pretty difficult ending and there's a lot covered, but let's dive right in.</p>
                </div>
            </div>

            <div className='row py-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <h3>Criminalization of Black Skin</h3>
                    <p>
                        The modern police force started in the early 1900s, but its origins date back to the colonies. 
                        In the South in the 1700s, patrol groups were created to stop runaway slaves. 
                        Now police departments across the country are facing accusations of brutality and racial profiling, frogetting that the very reason for its existence is rooted in just that!
                    </p>
                    <p>Insider has a great summary of <Tooltip label="this." text={`<p>Find links to all of my sources, downloadable on the About page</p>`} /> Here’s what you need to know.</p>
                    <figure className="p-3">
                        <blockquote className="blockquote">
                            <p className="pb-2">
                                The first form of policing in the South was known as slave patrol, which began in the colonies of Carolina in 1704. 
                                The patrol was usually made up of three to six men riding horseback and carrying whips, ropes, and even guns.
                            </p>
                            <p>
                                The group's main duties included chasing and hunting escaped slaves, releasing terror on slave communities to prevent riots, and to keep plantation owners in check, according to Ben Fountain's book, "Beautiful Country Burn Again."
                            </p>
                            <p>
                                The slave patrols lasted until the Civil War and eventually gave way to the Ku Klux Klan.
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0">Frank Olito, Insider, Updated Apr 26, 2021, 4:00 PM.</figcaption>
                    </figure>

                    <p>Read that again!</p>

                    <p>
                        In the film, during the traffic stop, Slim is first asked to step out of the vehicle, and then coerced into an agreement of an illegal search of his car, for no reason at all. 
                        We see the officer completely neglect his responsibility to conduct legal and probable business, both with Queen and Slim, and with the 911 receptionist by assuming the couple must have been guilty of something. 
                        Would we have seen the same reaction and irresponsibility if a white couple were in question? 
                        According to the Proceedings of the National Academy of Sciences of the United States of America (PNAS), hell no. 
                        While black people make up only 13% of the US population, Black men are twice as likely to be killed by police use of force than any other group on the basis of age, race, ethnicity, and sex.
                    </p>

                    <div className='my-5'>
                        <img src={trafficestop} width="100%" alt="" />
                    </div>

                    <p>
                        Part of mental liberation is knowing the history of colonization and the current impact it has on <Tooltip label="all of us." text={`<p>Not just black people. or people of color.</p><p>ALL of us</p>`} /> 
                        Although we cannot expect one film to completely dismantle all of hegemonic power, we can hope the education of black experiences in the US will inspire the change needed to legalize black skin and promote the end of racial profiling. 
                    </p>
                </div>
            </div>


            <div className='row my-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8 offset-lg-4'>
                    <hr/>

                    <div className='py-5'>
                        <p><b>Side Note:</b> More Resistance to Hegemony</p>

                        <div style={{backgroundColor: "#9e6b6b", color: "white", padding: "10px 20px 3px 20px"}}>
                            <p>
                                One thing that I love and am always interested to see in films by <b>Lena Waithe</b> is the incluscion and visibility of the LGBTQ community on the big screen. 
                                In many of their films, there is almost always a nod to this community, and rightfully so. In this film, we get the pleasure of seeing transgender actor Indya Moore play the character Goddess.
                            </p>
                            <p>This is also resistance! In American history, there is some erasure of every group, but the <b>intersectionality of being black, gay, <em>and</em> a woman</b>, amplifies this.</p>
                            <p>So yeah, resistance! We love it! I couldn't talk about resistance of this film and not mention that.</p>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>


            <div className='row py-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <h3>Mental colonization in young black men to desire glorified deaths</h3>

                    <div className='my-5'>
                        <img src={junior} width="100%" alt="" />
                    </div>

                    <p>In the film, while Junior is talking with Queen and Slim about their current situation, he explains that if he were in their shoes, he’d die right now and become ‘immortal’.</p>
                    <p>And when I saw that for the first time, I realized how he made it seem like he was not only willing to die for the cause, but wanting to. And this is something that I think is not as widely discussed as many other issues facing black Americans because of how deeply ingrained it is within us.</p>

                    <p>
                        While reading an article called “Colonialism: Why Write Back?” by George Sefa Dei and Chizoba Imoka, I came across the term “intellectual colonization”, which I thought was very similar to mental colonization. 
                        In it, they explain that <em>“intellectual colonization”</em> is defined as “a sum of acquired habits, of uncontrollable behavior, a way of life, a way of thinking of which the whole constitutes a sort of “second nature” that really seems to have destroyed the original personality of the colonized” (p.8). Undergirding intellectual colonization is a “colonized complex that blemishes our evolution and even marks our reflexes” (p.8), to the extent that the colonized learn to proclaim their inferiority and justify their domination. In the colonized, intellectual colonization manifests like what Wa Thiong’o describes as a “cultural bomb”
                    </p>
                    
                    {/* <figure className="p-3">
                        <blockquote className="blockquote">
                            <p className="pb-2">
                                The first form of policing in the South was known as slave patrol, which began in the colonies of Carolina in 1704. 
                                The patrol was usually made up of three to six men riding horseback and carrying whips, ropes, and even guns.
                            </p>
                            <p>
                                The group's main duties included chasing and hunting escaped slaves, releasing terror on slave communities to prevent riots, and to keep plantation owners in check, according to Ben Fountain's book, "Beautiful Country Burn Again."
                            </p>
                            <p>
                                The slave patrols lasted until the Civil War and eventually gave way to the Ku Klux Klan.
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0">Frank Olito, Insider, Updated Apr 26, 2021, 4:00 PM.</figcaption>
                    </figure> */}


                </div>
            </div>

            <div className='row my-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8 offset-lg-4'>
                    <hr/>

                    <div className='py-5'>
                        <p><b>Side Note #2:</b> More Resistance to Hegemony</p>

                        <div style={{backgroundColor: "#9e6b6b", color: "white", padding: "10px 20px 3px 20px"}}>
                            <p>Black Love is revolutionary!</p>
                            <img src={loves} width="100%" alt="" className='mt-2 mb-3'/>
                            <p>But I'll dive deep into this a bit later.</p>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>

            <div className='row py-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <h3>Unequal treatment</h3>

                    <div className='my-5'>
                        <img src={end} width="100%" alt="" />
                    </div>


                </div>
            </div>



            <div className='row py-5' style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className='col-lg-8'>
                    <h3>Mental impact of colonization that influences self-inflicted division amongst people of color</h3>

                    <div className='my-5'>
                        <img src={snitch} width="100%" alt="" />
                    </div>

                    <p>Just in case you didn’t get the ending, dude snitched on them for money! <br/> 
                    <Tooltip label="Smh." text={`
                        <p>For the folks up there:</p>
                        <ul>
                            <li>SMH = shaking my head</li>
                            <li>RME = rolling my eyes</li>
                            <li>OMFG = oh my f*cking gosh</li>
                            <li>MAD AF = mad as f*ck</li>
                        </ul>
                        <p>Understand how I felt the first time I saw this!</p>
                    `}/> But let's talk about it.
                    </p>



                </div>
            </div>
        </div>
    )
}

export default MelinaMatsoukas;