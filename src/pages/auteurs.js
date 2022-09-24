import React from "react";
import { auteurs } from "../data/auteurs";

const Auteurs = () => {
  return (
    <section>
      <section style={{ backgroundColor: "#f5f5f5", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="container py-5 mb-5">
          <h1>black female auteur</h1>
          <p>
            <em>
              /blak ˈfēˌmāl ōˈtər/ <br />
              (noun)
            </em>
          </p>
          <p>
            a{" "}
            <strong>
              <em>black, female</em>
            </strong>{" "}
            filmmaker whose personal influence and artistic control over a movie
            are so great that the filmmaker is regarded as the author of the
            movie.
          </p>
        </div>
      </section>

      <div className="container">
        <h1>Auteurs</h1>
        <p>A list of many (not all) black female auteurs and their works.</p>
        <p>See this and understand, there has never been a lack of talent.</p>
        <div className="row my-5">
          {auteurs.map((a) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 h-100 my-5">
                <div className="text-center justify-content-center">
                  <div
                    className="mb-4"
                    style={{
                      backgroundImage: `url(${a.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "50%",
                      width: "60%",
                      paddingTop: "60%",
                      marginLeft: "25%",
                    }}
                  />

                  <p>
                    <b>{a.auteur}</b>
                  </p>
                </div>
                <ul>
                  {a.films.map((f) => (
                    <li>
                      <small>{f}</small>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Auteurs;
