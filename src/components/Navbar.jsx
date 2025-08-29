"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position
      const scrollPosition = window.scrollY;
      
      // Change navbar color after scrolling 100px (adjust as needed)
      if (scrollPosition > 1300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById("navbar");
      const menu = document.querySelector(".navMenu");

      if (
        isOpen &&
        nav &&
        !nav.contains(event.target) &&
        menu &&
        !menu.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`font-[600] text-[20px] leading-[28px] mt-[20px] flex w-full justify-center fixed left-0 right-0 text-[#FFFFFF] z-[80] transition-all duration-300 ${
          isScrolled ? "/bg-[#0A8A58] md:py-[10px]" : "bg-transparent py-0"
        }`}
      >
        <div
          id="navbar"
          className={`mx-auto barbar pl-[24px] md:pl-[32px] border-[1.77px] border-[#FFFFFF1A] pr-[10px] md:pr-[16px] flex justify-between items-center backdrop-blur-[20px] w-fit /md:py-[10px] md:py-[10px] gap-[64px] rounded-[4000px] ${
            isOpen ? "active" : ""
          } ${
            isScrolled
              ? "scrolled bg-black"
              : "unscrolled bg-gradient-to-b from-[#FFFFFF1F] to-[#FFFFFF1F]"
          }`}
        >
          <Link
            href={"/"}
            className="flex items-center gap-[11.76px] cursor-pointer"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt=""  className="object-cover w-[48px] height-[48px]" />
          </Link>

          <div className="hidden md:flex items-center justify-between gap-[12px]">
            <span className="flex flex-col md:flex-row justify-center items-center">
              <Link
                href={"/"}
                className="px-[20px] py-[10px] hover:opacity-80 transition-opacity cursor-pointer"
              >
                Blog
              </Link>

              <Link
                href={"/"}
                className="px-[20px] py-[10px] hover:opacity-80 transition-opacity cursor-pointer"
              >
                Help Center
              </Link>

              <button class="button" onClick={toggleModal}>
                <span class="text ">Get the app</span>
                <span class="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="20"
                    viewBox="0 0 38 15"
                    fill="none"
                  >
                    <path
                      fill="black"
                      d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                    ></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>

          <button
            type="button"
            className={`hamburger bg-[#1E2F28] flex flex-col justify-center items-center w-12 h-12 rounded-full md:hidden ${
              isOpen ? "active" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="hamburger-bar top w-6 h-0.5 bg-white my-1 transition-transform"></div>
            <div className="hamburger-bar middle w-6 h-0.5 bg-white my-1 transition-opacity"></div>
            <div className="hamburger-bar bottom w-6 h-0.5 bg-white my-1 transition-transform"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#1E2F28] bg-opacity-95 backdrop-blur-md transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 pt-20 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link
            href={"/"}
            className="px-[20px] py-[10px] w-full max-w-xs text-center border-b-[1px] border-[#FFFFFF33] hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            Blog
          </Link>

          <Link
            href={"/"}
            className="px-[20px] py-[10px] w-full max-w-xs text-center border-b-[1px] border-[#FFFFFF33] hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            Help Center
          </Link>

          <button
            class="button"
            onClick={() => {
              toggleModal();
              closeMobileMenu();
            }}
          >
            <span class="text">Get the app</span>
            <span class="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="20"
                viewBox="0 0 38 15"
                fill="none"
              >
                <path
                  fill="black"
                  d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                ></path>
              </svg>
            </span>
          </button>

          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
      </div>

      {modal && (
        <div className="modal fixed inset-0 flex items-center justify-center z-[90]">
          <div
            onClick={toggleModal}
            className="overlay absolute inset-0 bg-black bg-opacity-70"
          ></div>
          <div className="modal-content w-[90%] max-w-[560px] rounded-[24px] flex flex-col gap-[32px] justify-center items-center py-[48px] bg-white relative z-10">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-2xl text-[#333333] hover:opacity-70"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="font-[700] text-[36px] leading-[52px] text-[#333333] text-center">
              Get the Playlane app
            </h2>
            {/* <Image src={'/QR.png'} alt='' height={216} width={216}></Image> */}

            <p className="font-[600] text-[20px] leading-[30px] text-[#5C5C5C] text-center w-[90%] max-w-[402px]">
              Scan the QR code with your phone camera to download the Playlane
              app.
            </p>
          </div>
        </div>
      )}
    </>
  );
}