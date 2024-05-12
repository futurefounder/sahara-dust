"use client";
import { useState } from "react";

export default function Navigation() {
  return (
    <header className="text-gray-100 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto"></nav>
        <a className="flex items-center order-first mb-4 font-medium text-gray-300 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
          <span className="ml-3 text-xl">Sahara-Dust.com</span>
        </a>
        <div className="inline-flex ml-5 lg:w-2/5 lg:justify-end lg:ml-0"></div>
      </div>
    </header>
  );
}
