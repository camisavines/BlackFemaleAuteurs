import React from "react";
import Tooltip from "../textTooltip";

import floodgates from "../../images/Lemonade/floodgate.gif";

const BeyonceLemonade = () => {
  const TITLE = "LEMONADE";
  const AUTEUR = "Beyoncé Knowles-Carter";
  const RELEASE_YEAR = "2016";
  const FILM_TYPE = "Video Album";
  const RUNTIME = "1h 5m";

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "20vh" }}>
      <div className="row home hero">
        <div className="col-md-6 film-title">
          <div className="w-100">
            <h3 className="m-0">{AUTEUR}</h3>
            <h1 className="my-5">
              <em>{TITLE}</em>
            </h1>
            <h5 className="text-muted m-0">
              {RELEASE_YEAR} • {FILM_TYPE} • {RUNTIME}
            </h5>
          </div>
        </div>

        <div className="col-sm-6 mt-4">
          <img
            src="https://api.time.com/wp-content/uploads/2016/11/lemonade.jpeg?"
            width="100%"
            alt=""
          />
        </div>
      </div>

      <div
        className="row py-5 my-5"
        style={{ fontSize: "12pt", lineHeight: "3rem" }}
      >
        <div className="col-lg-8">
          <p>
            <span className="first-letter">Q</span>ueen Bey! You guys didn't
            honestly think I would skip over Beyoncé, did you? The creative
            genius! The Queen! Don't be silly.
          </p>
          <p>
            Beyoncé’s sixth studio album is regarded as one of the
            <Tooltip
              label="most highly acclaimed"
              text={`<p>And with good reason!</p>`}
            />
            projects in music history and definitely most acclaimed in her
            career. It's hard to put into words the impact of the album, because
            it absolutely optimizes mental liberation by resisting hegemonic
            norms, showcasing the richness of black culture, and inspiring pride
            of black ancestry and survival. The 12-track project made several
            references to black history and music, and discussed sociopolitical
            issues facing black Americans, including the lasting affects of
            slavery, infidelity and truama in relationships, black feminism, and
            generational curses.
          </p>
          <p>
            Lemonade documents her personal experiences and attempts to resolve
            her own internal traumas that many black people can relate to. In a
            2018 Vogue article, she writes, “I come from a lineage of broken
            male-female relationships, abuse of power, and mistrust. … Only when
            I saw that clearly was I able to resolve those conflicts in my own
            relationship. Connecting to the past and knowing our history makes
            us both bruised and beautiful”. In this, she acknowledges a struggle
            to liberate herself from prevailing ideologies of ethnic and
            cultural inferiority. With this project, she provides a captivating
            way for many black people, and especially black women, to unlearn
            and mentally overcome internal hatred and discrimination regarding
            love, sex, and beauty.
          </p>
          <p>
            In an interview with Elle, published on April 4, 2016, Beyoncé said,
            "
            <Tooltip
              label="I hope I can create art that helps people heal. Art that makes people feel proud of their struggle."
              text={`<p>And she definitely understood the assignment!</p>`}
            />
            "
          </p>
          <p>
            Beyoncé’s Lemonade contains 4 music videos, accompanied by a
            65-minute mini-feature film of the same title on HBO. To further
            explain the ways in which the audiovisual is liberating, it best to
            dissect the meanings of both the lyrics and imagery within, both
            together and separately.
          </p>
        </div>
      </div>

      {/* HOLD UP */}
      <div
        className="row my-5 pb-5"
        style={{ fontSize: "12pt", lineHeight: "3rem" }}
      >
        <div className="col-12">
          <h1 style={{ fontWeight: "900" }}>HOLD UP</h1>

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/PeonBmeFR8o"
              title="HOLD UP"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="col-lg-8 my-5">
          <figure className="p-4">
            <blockquote className="blockquote">
              <p className="pb-2">
                I tried to change <br />
                Closed my mouth more <br />
                Tried to be soft, prettier <br />
                Less... awake <br />
                Fasted for 60 days <br />
                Wore white <br />
                Abstained from mirrors <br />
                Abstained from sex <br />
                Slowly did not speak another word <br />
                ...
              </p>
            </blockquote>
            <figcaption className="blockquote-footer mb-0">
              Warsan Shire
            </figcaption>
          </figure>

          <p>
            The opening poem is called ‘Denial', written by Warsan Shire. In it,
            Beyoncé emphasizes the lengths she went in order to save her
            <Tooltip
              label="marriage."
              text={`
                            <p>because of her <em>husband's infidelity</em>.</p>
                            <p>And because of the phallocentrism ingrained within our society, the burden to save relationships is often placed on women.</p>
                        `}
            />
            The author of the poem, Shire, is alluding to the Islamic religion,
            during Ramadan, to cleanse one's self of sin and become pure.
            Beyoncé draws parallels throughout the poem alluding to the struggle
            of black women to be desired both physically and emotionally, due to
            the harmful stereotypes about black women that are deeply rooted in
            early Hollywood cinema.
          </p>
          <p>
            Notice the imagery while this poem is being recited. The symbolism
            of drowning is representative of the suffocating expectations for
            <Tooltip
              label="black women."
              text={`<p>in society <br/>in relationships <br/>in the media <br/>in the family <br/>in the workplace <br/> etc.<p>`}
            />
            But then! She opens the floodgates, asserting that no black woman
            should bear the burden of others and the{" "}
            <Tooltip
              label="joy that comes with that liberation."
              text={`<p>Period, sis.</p>`}
            />
          </p>
          <div className="my-5">
            <img src={floodgates} width="100%" alt="drowning gif" />
          </div>
        </div>
      </div>

      {/* SORRY */}
      <div
        className="row my-5 py-5"
        style={{ fontSize: "12pt", lineHeight: "3rem" }}
      >
        <div className="col-12">
          <h2 style={{ fontWeight: "900" }}>SORRY</h2>

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/QxsmWxxouIM"
              title="SORRY"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="col-lg-8 my-5">
          <p>
            The biggest thing that is perhaps not so clear, but stands out to
            me, is the girls, dressed in tribal or indigenous makeup, on the
            school bus. I think that its a statement about the amount of missing
            indigenous women and girls, and the unequal opportunity for
            education between boys and girls in the US.{" "}
          </p>
          <p>
            Another thing that is so mentally liberating is the representation
            of hair in the video (and all these videos). None of the dancers
            have long, straight hair. They are all beautifully rocking afros and
            braids.
          </p>
        </div>
      </div>

      {/* ALL NIGHT */}
      <div
        className="row my-5 py-5"
        style={{ fontSize: "12pt", lineHeight: "3rem" }}
      >
        <div className="col-12">
          <h2 style={{ fontWeight: "900" }}>ALL NIGHT</h2>

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/gM89Q5Eng_M"
              title="ALL NIGHT"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="col-lg-8 my-5">
          <h3>
            Black love is revolutionary! It is the highest form of resistance in
            the United States!
          </h3>
          <p>
            There is such a beautiful representation of black love, in every
            form, present in this video! And it inspires the learning of black
            history and the unlearning that black love only exists within the
            ideologies of white supremacy. Beyoncé uses Warsan Shire’s
            ‘Redemption’ to express the survival of black people and to claim
            optimism, prosperity, and healing.
          </p>
          <p>
            Within the 65-minute visual album, “Redemption” is the last chapter,
            following Intuition, Denial, Anger, Apathy, Emptiness,
            Accountability, Reformation, Forgiveness, Resurrection, and Hope. It
            is in this chapter that the audience understands that true
            liberation comes from within. Somehow, against all odds, black
            people have managed to survive. In the clip, the black-and-white
            switches abruptly to color, which, at this point in the film, we see
            a shift in imagery from what feels slow and careful to vibrant
            freedom. We see women gathering, working, planting and harvesting.
          </p>
        </div>
      </div>

      {/* FORMATION */}
      <div
        className="row my-5 py-5"
        style={{ fontSize: "12pt", lineHeight: "3rem" }}
      >
        <div className="col-12">
          <h2 style={{ fontWeight: "900" }}>FORMATION</h2>

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/WDZJPJV__bQ"
              title="FORMATION"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="col-lg-8 my-5">
          <p>
            There is so much symbolism in this video and Beyoncé pays homage to
            the city of New Orleans, her parents’ hometown, creole culture, and
            to{" "}
            <Tooltip
              label="other artists"
              text={`<p>Messy Mya and Big Freedia</p>`}
            />{" "}
            from the city.
          </p>
          <ol>
            <li>Sitting on top of a sunken police car</li>
            <ul>
              <li>
                Not only is this a clear message of an antipolice movement, it
                also acknowledges the people and culture that survived hurricane
                Katrina.
              </li>
            </ul>
            <li>
              Imagery of BLM movement, young boy dressed in a black hoodie with
              his hands up.
            </li>
            <ul>
              <li>
                Referencing BLM movement and the criminalization of black boys
                from a young age
              </li>
            </ul>
            <li>
              Transgender hip hop artist, Big Freedia, featured on the song
            </li>
            <li>Black Cowboy seen riding a horse.</li>
            <li>Dancers are standing in an empty pool</li>
            <ul>
              <li>
                When black athletes were finally able to compete in collegiate
                sports, they were still discriminated against. At swimming
                meets, facilities that were also occupied by predominantly white
                teams, would drain the pool after having black students swim in it.
              </li>
            </ul>
          </ol>
        </div>
      </div>

      <div>
        <h3>Needless to say, Beyoncé is the Queen for many reasons.</h3>
      </div>
    </div>
  );
};

export default BeyonceLemonade;
