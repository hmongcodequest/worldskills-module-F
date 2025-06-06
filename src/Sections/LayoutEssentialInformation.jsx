import "bootstrap/dist/css/bootstrap.min.css";

import worldskills_2024 from "/latest-events-images/worldskills-2024-p.jpg";
import fda from "/latest-events-images/fda-p.jpg";
import lyon_kayak from "/latest-events-images/lyon-kayak-p-0.jpg";
import semaine_bleue from "/latest-events-images/semaine-bleue-2024-p.jpg";
import village from "/latest-events-images/village-des-metiers-p.jpg";
import journees_portes_ouvertes_entreprises_2023_p from "/latest-events-images/journees_portes_ouvertes_entreprises_2023_p.jpg";

export const LayoutEssentialInformation = () => {
  const Latest_Events = [
    {
      title: "Lyon accueille la finale mondiale des Worldskills 2024",
      img: worldskills_2024,
    },
    {
      title: "Forum des associations 2024",
      img: fda,
    },
    {
      title: "Lyon Kayak",
      img: lyon_kayak,
    },
    {
      title: "La semaine bleue 2024",
      img: semaine_bleue,
    },
    {
      title: "Le Village des Métiers",
      img: village,
    },
    {
      title: "Les Journées Portes Ouvertes des Entreprises",
      img: journees_portes_ouvertes_entreprises_2023_p,
    },
  ];

  return (
    <>
      <section className="container mb-3">
        <div className="row row-cols-2">
          <div className="col">
            <h1
              className="text-end fw-bold mb-5"
              tabIndex={4}
              aria-label="Essential Information"
            >
              Essential <br />
              Information
            </h1>
            <div className="d-flex justify-content-end align-items-center">
              <div>
                <p tabIndex={4}>Contact: 04 72 10 30 30</p>
                <p tabIndex={4}>Address: Mairie de Lyon, 69205 Lyon cedex 01</p>
                <button
                  tabIndex={4}
                  type="button"
                  className="btn btn-primary p-3"
                >
                  Read it Loud
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <h1
              className="text-center fw-bold mb-5"
              tabIndex={4}
              aria-label="Latest Events"
            >
              Latest Events
            </h1>
            <div className="card" style={{ width: "480px" }}>
              <div className="scroll-container d-flex overflow-x-auto gap-3 p-3">
                {Latest_Events.map((valus, i) => (
                  <div
                    className="event-card bg-white rounded p-2 flex-shrink-0"
                    key={i}
                    tabIndex={4}
                  >
                    <div className="effect-img">
                      <img
                        src={valus.img}
                        tabIndex={4}
                        className="img-fluid"
                        alt={valus.title}
                      />
                    </div>
                    <p className="mt-2" tabIndex={4}>
                      {valus.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
