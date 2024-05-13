export default function Quotes() {
  return (
    <section className="text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <p className="italic leading-relaxed">
                "Saharan dust can be harmful to your health.{" "}
                <span className="font-bold">
                  {" "}
                  The particles can be breathed in and enter your lungs and
                  blood stream,
                </span>{" "}
                potentially triggering asthma attacks in people who have asthma
                and aggravating other respiratory conditions. Saharan dust
                worsens air quality and increases the levels of particulate
                matter in the air."
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 rounded bg-amber-500"></span>
              <p className="text-gray-100">
                U.S. Department <br /> Centers for Desease Control and
                Prevention
              </p>
            </div>
          </div>
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <p className="leading-relaxed">
                "Sharp increase of Saharan dust intrusions over the Western
                Mediterranean and Euro-Atlantic region in winters 2020–2022."
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 rounded bg-amber-500"></span>
              <p className="text-gray-100">
                Cuevas-Agulló, E., et al. <br />
                <a href="https://doi.org/10.5194/egusphere-2023-1749">
                  EGUsphere [preprint], 2023.
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <p className="italic leading-relaxed">
                "Our results provide evidence of: (1) the role of Saharan Dust
                as an independent risk factor for adverse respiratory effect in
                The Canary Islands; (2) the existence of a short-term
                association between Sahara Dust Days and the risk of emergency
                hospital admissions, that spreads over successive days."
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 rounded bg-amber-500"></span>
              <p className="text-gray-100">Elena López–Villarrubia et al.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
