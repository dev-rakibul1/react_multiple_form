import React from "react";
import HomeLeft from "../../components/homeComp/homeLeft/HomeLeft";
import HomeRight from "../../components/homeComp/homeRight/HomeRight";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:gird-cols-2 gap-7">
        {/* home left */}
        <div className="bg-blue-700 h-screen left-section">
          <div className="full-width-container">
            <div className="">
              <HomeLeft />

              {/* image */}
              <div className="pt-12 mx-auto flex justify-center items-center">
                <img
                  src="https://www.ansonika.com/wilio/img/info_graphic_1.svg"
                  alt=""
                  className=""
                />
              </div>

              {/* article */}
              <article className="text-center">
                <h2 className="text-center font-normal text-4xl text-gray-300 py-5">
                  Satisfaction Survey
                </h2>
                <p className="text-gray-300">
                  Tation argumentum et usu, dicit viderer evertitur te has. Eu
                  dictas concludaturque usu, facete detracto patrioque an per,
                  lucilius pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas
                  dolorum ullamcorper qui.
                </p>
                <div className="py-12">
                  <button className="px-7 py-2 rounded-full bg-blue-600 text-gray-300 font-semibold hover:bg-pink-600 transition-all duration-300	">
                    Purchase this template
                  </button>
                </div>
              </article>
            </div>
          </div>

          {/* footer */}
          <footer className="text-center text-gray-300">
            <span>&copy; 2023 Wilio</span>
          </footer>
        </div>
        {/* home right or form area */}
        <div className=" h-screen py-2">
          <div className="full-width-container">
            <div className="">
              <HomeRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
