import React from "react";
import Tooltip from "../textTooltip";
import angeladavis from "../../images/FreeAngelaDavis.jpeg";
import soledadbrothers from "../../images/soledadbrothers.jpeg";
import takeover1 from "../../images/takeover1.jpeg"
import takeover2 from "../../images/takeover2.jpeg"

const SholaLynch = () => {
    const TITLE = "FREE ANGELA DAVIS AND ALL POLITICAL PRISONERS";
    const AUTEUR = "Shola Lynch";
    const RELEASE_YEAR = "2013";
    const FILM_TYPE = "Documentary"
    const RUNTIME = "1h 22m"

    return (
        <div style={{minHeight: "100vh", paddingBottom: "40vh"}}>
            <div className="row home hero">
                <div className="col-md-6 col-xl-8 film-title">
                    <div className="w-100 pr-5">
                        <h3 className="m-0">{AUTEUR}</h3>
                        <h1 className="my-5"><em>{TITLE}</em></h1>
                        <h5 className="text-muted m-0">
                            {RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}
                        </h5>
                    </div>
                </div>

                <div className="col-sm-6 col-xl-4 mt-4">
                    <img src="https://m.media-amazon.com/images/I/41RM61QX2FL._AC_.jpg" width="100%" alt="" />
                </div>
            </div>



            {/* Body Content */}
            <div className="row py-5" style={{fontSize: "12pt", lineHeight:"3rem"}}>
                <div className="col-lg-8">
                    <p>
                        <span className="first-letter">T</span>his film <em>is</em> resistance, entirely! 
                        It clearly confronts racism, patriarchy, the US prison system, and perhaps the
                        <Tooltip label="indirect compliance of the US government to maintain these systems" text="<p className='m-0'>More on this later. Keep Reading!</p>"/>.
                    </p>
                    <p>
                        Let’s start with racism, shall we? 
                        The whole reason that Angela Davis was on trial was because of the events leading to the 
                        Marin County Courthouse Takeover (1970). 
                        We know that she was a strong supporter of the Soledad Brothers (not related), John W. Clutchette, Fleeta Drumgo and George Lester Jackson, 
                        who were accused of killing a prison guard after several other African American inmates were killed by another guard, Opie Miller, without consequence. 
                        Miller shot and killed 3 black prisoners at Soledad prison and was exonerated of all charges only days later by an all-white jury. 
                        None of the black inmates present for that shooting were asked to testify.
                        In the aftermath of the killings, incarcerated African Americans demanded answers. 
                        As a race war raged on behind Soledad’s walls, someone threw guard John Mills off the third level of the prison. 
                    </p>

                    <p>
                        Before the accusations, these men hadn’t even known each other, but Jackson became the primary suspect 
                        because of his well known revolutionary politics and affiliation with the Black Panther party. 
                        Drumgo and Clutchette were also targeted because of their political views <em>(Rebel Archives)</em>.
                    </p>

                    <figure className="figure my-5">
                        <img src={soledadbrothers} className="figure-img img-fluid rounded" alt="Soledad Brothers"/>
                        <figcaption className="figure-caption"><small>Soledad Brothers. Fleeta Drumgo (left), John W. Clutchette (center), George Lester Jackson (right).</small></figcaption>
                    </figure>

                    <p>
                        So, even with the lack of any convincing evidence, or any evidence at all, and strictly because of their affiliations with the Black Panther Party, they were charged immediately! 
                        The consequences based on race couldn’t be more blatant!
                        How is it that under the same law, a white man admittedly murdering 3 black men is innocent, yet, 3 black men <em>allegedly</em> murdering 1 white man, 
                        
                        <Tooltip 
                            label="guilty?"
                            text={`<p>The answer is simple. Racism.</p>`}
                        />
                    </p>

                    <p>
                        In a protest in support of the Soledad Brothers, members of the Black Panther Party, conducted the Marin County Courthouse Takeover with guns that were purchased in Davis’s name. 
                        On August 7, 1970, the younger brother of George Jackson, Jonathan attempted the kidnapping of Judge Haley during the court hearing of <Tooltip label="three inmates accused of stabbing a prison officer" text={`<p>William Christmas, James McClain, and Ruchell Magee</p>`} />.
                        In the attempt, 4 people, including Jackson, McClain, Christmas, and Haley, were killed, and 
                        <Tooltip label="Angela Davis is charged with 3 capital felonies." text={`
                            <p>
                                So they couldn't pin it on the black man responsible, so they found the next closest scapegoat, a black woman.
                            </p>
                            <p>
                                Just making sure I heard that correctly.
                            </p>
                        `} />
                    </p>
                </div>

                <div className="col-lg-12 mb-5">
                    <div className="row" style={{lineHeight: "1.5rem"}}>

                        <div className="col-6 col-md-4 my-3">
                            <figure className="figure">
                                <img src={takeover2} className="figure-img img-fluid rounded" alt="Takeover 1 1970"/>
                                <figcaption className="figure-caption text-right"><small>Marin County Courthouse Takeover. August 7, 1970.</small></figcaption>
                            </figure>
                        </div>

                        <div className="col-6 col-md-4 my-3">
                            <figure className="figure">
                                <img src={takeover1} className="figure-img img-fluid rounded" alt="Takeover 2 1970"/>
                                <figcaption className="figure-caption text-right"><small>17 year-old Johnathan Jackson holding 2 guns (on the left).</small></figcaption>
                            </figure>
                        </div>

                    </div>
                </div>


                {/* Shola And US PIC */}
                <div className="col-lg-8 mt-5">
                    <p>
                        Furthermore, both Lynch and Davis tackle the 
                        <Tooltip label="prison-industrial complex" text={`
                            <p>
                                the overlapping interests of government and industry that use surveillance, policing, and imprisonment 
                                as solutions to economic, social and political problems.
                            </p>
                        `} />
                        head on. 
                        Lynch, known to discuss monumentous black women in her work, captures Angela Davis as an international beacon of 
                        counterculture radicalism and liberation for all oppressed groups. The documentary is a snappily edited, 
                        archivally wallpapered recollection of fearless behavior in the face of an antsy establishment. 
                        But it’s equally significant as a pointed act of retelling <em>(Nicholas Rapoid)</em>. 
                        Shola Lynch explores the topic of bottom-line blackness and uses <b>teleological</b> techniques in her approach to 
                        decriminalize black skin and entice the audience to think about the way blackness is percieved in the justice system.
                    </p>

                    <div className="my-5">
                        <hr/>
                        <h3><b>tel·e·o·log·i·cal</b></h3>
                        <p>
                            relating to or involving the explanation of phenomena in terms of the purpose they serve rather than of the cause by which they arise.
                        </p>
                        <div style={{backgroundColor: "#9e6b6b", color: "white", padding: "10px 20px 3px 20px"}}>
                            <p>
                                Lynch's story-telling is unmatched and it is done so elegantly! 
                                She utilizes audio, interviews, and testimony to interpret and reenact these events, knowing the result, but not acknowledging the results as inevitable.
                                (Just a lot of Black Girl Magic!)
                            </p>
                        </div>
                        <hr/>
                    </div>

                    <p>
                        While reflecting, Davis says that she was held in jail for over a year before being acquitted of all charges in 1972. 
                        Although exonerated, she had to convince an all-white jury of her innocence 
                        <Tooltip label="during the opening statement" text={`
                            <p>
                                Done so intentionally so that (1) the prosecution couldn't cross-examine her to try and invalidate her and (2) so the jury could see
                                that she was nothing like the criminal the media made her out to be, but a scholar fighting for equality.
                            </p>
                        `}/>
                        of the trial, 
                        which prior to, had preconceived ideas about her intentions due to the harmful stereotypes projected in the media.
                        This media served as propaganda pushing the agenda of the FBI and US government which included building fear and hatred toward people of color, 
                        destroying the Black Panther Party, removal of the Communist Party, and undermining the integrity and intelligence of women. 
                        Who better, than Angela Davis, to check all these boxes?! Under the circumstances of this situation, 
                        the harmful images of black people in the media, and the given political tension, it was the government’s intention to maintain 
                        sociopolitical systems that disadvantage people of color by making an example out of Angela Davis.
                    </p>
                </div>

                {/* Full figure of Angela Davis */}
                <div className="col-lg-12 my-5">
                    <figure className="figure">
                        <img src={angeladavis} className="figure-img img-fluid rounded" alt="Angela Davis 1972"/>
                        <figcaption className="figure-caption text-right"><small>Angela Davis. March 1972.</small></figcaption>
                    </figure>
                </div>

                <div className="col-lg-8">
                    <p>
                        Today, both Shola Lynch and Angela Davis continue to push the black community forward in their work. 
                        Lynch continues her work in filmmaking as a champion for black people with a focus on black women and political history, 
                        while Davis focuses on efforts to combact mass incarceration in an organization she found, 
                        <Tooltip label="Critical Resistance." text={`
                            <p>
                                Critical Resistance works to create and find lasting alternatives to punishment and imprisonment. It considers the prison industrial 
                                complex to be a response to societal issues such as: homelessness, immigration, and gender nonconformity. 
                                CriticalResistance.org
                            </p>
                        `}/> 
                        These are huge milestones for black women, not only in film, but just in general. To see the perseverance of Angela Davis and 
                        Shola Lynch is inspiring and contributes to the progression of black women.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default SholaLynch;