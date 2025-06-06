import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LayoutMapAttraction.css";

import bgImg from "/images/lyon-map.jpg";
import bgImgLow from "/images/lyon-map-low-res.jpg"

import attraction_a from "/images/attraction-a.jpg";
import attraction_a_low from "/images/attraction-a-low-res.jpg";
import all_attraction from "/images/all-attractions.jpg";
import all_attraction_low from "/images/all-attractions-low-res.jpg";
import attraction_b from "/images/attraction-b.jpg";
import attraction_b_low from "/images/attraction-b-low-res.jpg";
import attraction_c from "/images/attraction-c.jpg";
import attraction_c_low from "/images/attraction-c-low-res.jpg";
export const LayoutMapAttraction = () => {
  const [imageMedia, setImageMedia] = useState(false);
  useEffect(() => {
    const ReSize = () => {
      const media = window.innerWidth;
      if (media < 768) {
        setImageMedia(true);
      } else {
        setImageMedia(false);
      }
    };
    ReSize();
    window.addEventListener("resize", ReSize);
    return () => {
      window.removeEventListener("resize", ReSize);
    };
  }, []);

  const MapAfttraction = [
    {
      img: imageMedia ? attraction_a_low : attraction_a,
      tilte: "Parc de la Téte d'Or",
    },
    {
      img: imageMedia ? all_attraction_low : all_attraction,
      tilte: "Street",
    },
    {
      img: imageMedia ? attraction_b_low : attraction_b,
      tilte: "River",
    },
    {
      img: imageMedia ? attraction_c_low : attraction_c,
      tilte: "All Attractions",
    },
  ];
  return (
    <>
      <section
        className="d-flex flex-column mt-5 mb-3 justify-content-center align-items-center"
        tabIndex={3}
      >
        <h1 tabIndex={3} aria-label="Map Attrations" className="fw-bold">
          Map Attrations
        </h1>
        <div className="mt-5 position-relative overflow-hidden">
          <img
            className="img-fluid w-100 bg-image"
            tabIndex={3}
            src={imageMedia ? bgImgLow :bgImg}
            alt="Lyon map"
          />
          <div
            className="row row-cols-2 position-absolute top-0 card-row"
            tabIndex={3}
          >
            {MapAfttraction.map((value, i) => (
                <div className="col mb-3" key={i}>
                <div className="card p-1" id="cardHover" tabIndex={3}>
                  <div className="effect-img">
                    <img
                      src={value.img}
                      tabIndex={3}
                      className="img-fluid"
                      alt={value.tilte}
                    />
                  </div>
                  <p tabIndex={3}>{value.tilte}</p>
                </div>
              </div>
            ))}
          </div>
          <span
            className="map-a"
            tabIndex={3}
            data-label="A"
            aria-label="A"
          ></span>
          <span
            className="map-b"
            tabIndex={3}
            data-label="B"
            aria-label="B"
          ></span>
          <span
            className="map-c"
            tabIndex={3}
            data-label="C"
            aria-label="B"
          ></span>
        </div>
      </section>
    </>
  );
};
