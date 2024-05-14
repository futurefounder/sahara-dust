"use client";
import { ReactTyped } from "react-typed";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you can add your logic to send the email or perform any other desired action
  };

  return (
    <>
      <div className="relative pt-16 bg-gray-800 bg-opacity-25 h-max">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full -z-10"
        >
          <source src="sahara-dust-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="relative ">
          {/* <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="#252323"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg> */}
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-10/12">
                <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Sahara Dust is{" "}
                  <ReactTyped
                    strings={[
                      "toxic",
                      "not dangerous",
                      "hazardous",
                      "just car dirt",
                      "a health risk",
                      "only bad sight",
                    ]}
                    loop
                    typeSpeed={80}
                    backSpeed={60}
                    className="italic"
                  />
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  The Sahara Dust Debate is confusing. <br />
                  Let&apos; look at science and research. <br />
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider text-white transition-colors duration-200 hover:text-amber-400"
                >
                  Dive in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className="ml-2"
                  >
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="rounded shadow-xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold opacity-100 sm:text-center sm:mb-6 sm:text-2xl">
                    Join the Dust Watch-List
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      ></label>
                      <input
                        placeholder="jane@dust.org"
                        required
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={submitted}
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none text-amber-950 focus:border-amber-600 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        disabled={submitted}
                        className="inline-flex items-center justify-center w-full h-12 px-6 mb-2 font-medium tracking-wide text-white transition duration-200 bg-black rounded shadow-md hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                      >
                        {submitted ? "Thank you!" : "Count Me In"}
                      </button>
                      {submitted && (
                        <span className="bg-amber-100 text-green-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded ml-2">
                          Success
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-300 sm:text-sm">
                      No spam. Only relevant updates. <br /> Unsubscribe at any
                      time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
