"use client";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import smoothScrollToElement from "../utils/SmoothScroll";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollToElement("studies");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null); // Reset error before submission

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.error || "Failed to send email. Please try again."
        );
      }

      const data = await res.json();
      console.log(data.message);
    } catch (error: any) {
      console.error("Error:", error);
      setError((error as { message: string }).message);
      setSubmitted(false); // Allow resubmission if there's an error
    }
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
                  href="#studies"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider text-white transition-colors duration-200 hover:text-amber-400"
                  onClick={handleSmoothScroll}
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
                    Want updates?
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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={submitted}
                        className="flex-grow w-full h-12 px-4 mb-2 text-black transition duration-200 bg-white border-black rounded shadow-sm appearance-none focus:border-emerald-600 focus:outline-none focus:shadow-outline"
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
                        {submitted ? (
                          <div className="flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                              stroke="green"
                              className="w-6 h-6 mr-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                            Sent
                          </div>
                        ) : (
                          "Join now"
                        )}
                      </button>
                      {error && (
                        <span className="bg-amber-100 flex items-center text-red-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mt-2 mb-1 mr-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                            />
                          </svg>
                          {error}
                        </span>
                      )}{" "}
                      {submitted && (
                        <span className="bg-emerald-100 flex items-center text-black text-xs font-bold mr-2 px-2.5 py-0.5 rounded ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mt-1 mb-1 mr-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                            />
                          </svg>
                          You will only be contacted in case of an update
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
      <div id="studies"></div>
    </>
  );
}
