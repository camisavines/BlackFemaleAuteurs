import { images } from "../data/adornphotos";

const Adornment = () => {
  const newImgTag = (url, w = "100%") => {
    return <img width={w} src={url} alt="" />;
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        paddingTop: "5rem",
        minHeight: "88vh",
      }}
    >
      <section>
        <div className="container mb-5 pb-5">
          <h1>Adornment</h1>
          <p>
            While the main objectives of the course were to be able to analyze
            and think critically about everything the auteur trying is say
            during the film, I also quite enjoy the way that color, sound,
            fashion, and visual representations help tell the story.
          </p>
          <p>
            It's art and I love art. So adore and embellish these stills from my favorite
            films.
          </p>
        </div>
      </section>

      <div style={{ background: "black" }}>
        {images.map((photo) => newImgTag(photo.src, photo.width))}
      </div>
    </div>
  );
};

export default Adornment;
