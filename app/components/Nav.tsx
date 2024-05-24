"use client";

import { useState, useRef } from "react";
import StudyModal from "../utils/StudyModal";
import smoothScrollToElement from "../utils/SmoothScroll";

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const newsRef = useRef<HTMLAnchorElement>(null);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollToElement("studies");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="fixed left-0 z-50 w-full top-4">
      <nav className="h-16 flex bg-zinc-800 z-0 backdrop-blur-md text-foreground px-4 mx-auto shadow-lg max-w-[1000px] rounded-lg">
        <div className="mx-auto z-10 w-full flex items-center justify-between max-w-[1000px]">
          <a
            className="text-2xl hover:opacity-80"
            aria-label="homepage"
            href="/"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold text-white">
                Sahara-<span className="font-light">Dust</span>
                <span className="text-base"> .com</span>
              </h2>
            </div>
          </a>
          <ul className="items-center hidden gap-6 md:flex">
            <li>
              <a
                onClick={handleSmoothScroll}
                aria-label="studies"
                href="studies"
              >
                <span className="flex items-center text-gray-200 hover:text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                  Studies
                </span>
              </a>
            </li>
            <li>
              <span onClick={toggleModal} aria-label="post">
                <span className="relative flex items-center text-gray-200 cursor-pointer hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                    />
                  </svg>
                  Post
                </span>
              </span>
            </li>
            <li></li>
            <li></li>
          </ul>
          <div className="flex gap-8 md:hidden">
            <button className="block lg:hidden">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="nav-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div className="hidden absolute bg-background p-4 mt-[60px] right-0 w-full lg:relative lg:w-auto lg:bg-transparent lg:p-0 lg:mt-0 lg:flex text-white">
              <ul className="flex flex-col items-center justify-center gap-4">
                <li>
                  <a aria-label="how it works" href="#how-it-works">
                    How It Works
                  </a>
                </li>
                <li>
                  <a aria-label="blog" href="/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/fashn-AI"
                    aria-label="github"
                    className="flex items-center"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 mr-1"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a aria-label="frequently-asked-questions" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <StudyModal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}
