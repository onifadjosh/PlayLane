"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phone from "../assets/phonee.png";

export default function Section2() {
  const containerRef = useRef(null);
  const phoneWrapRef = useRef(null);
  const phoneInnerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return; 

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(phoneWrapRef.current, { perspective: 1400 });
      gsap.set(phoneInnerRef.current, {
        transformStyle: "preserve-3d",
        transformOrigin: "50% 40%",
        willChange: "transform",
        y: -600,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-10% top",
          end: "+=500",
          scrub: true,
          pin: phoneWrapRef.current,
          anticipatePin: 1,
          pinSpacing: false,
        },
      });

      tl.fromTo(
        phoneInnerRef.current,
        { y: -20, rotateY: -30, rotateX: 10, scale: 0.95, autoAlpha: 0 },
        { y: 0, rotateY: -10, rotateX: 5, scale: 1, autoAlpha: 1, duration: 1 }
      )
        .to(phoneInnerRef.current, {
          y: 150,
          rotateY: 25,
          rotateX: -12,
          scale: 1.03,
          duration: 2,
          ease: "power2.inOut",
        })
        .to(phoneInnerRef.current, {
          y: 200,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        });
    }, containerRef);

    return () => ctx.revert();
  }, [isLargeScreen]);

  return (
    <section ref={containerRef} className="min-h-[100vh] bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* LEFT SIDE TEXTS */}
          <div className="w-full lg:w-1/2 max-w-3xl flex flex-col justify-between">
            {/* TOP BLOCK */}
            <div className="space-y-6 mt-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 leading-snug">
                We go live when the{" "}
                <span className="text-black">
                  100,000<sup>th</sup>
                </span>{" "}
                person claims the #
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                Spontaneous connection, powered by cinema.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">
                Claim your number. Become a founding member. Unveil the
                movement.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-xl shadow-lg text-base md:text-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
                Join the waitlist
              </button>
            </div>

            {/* Show phone inline between blocks only on small/medium */}
            {!isLargeScreen && (
              <div className="flex justify-center my-10">
                <div className="w-[250px] sm:w-[280px] md:w-[300px] h-[500px] sm:h-[560px] md:h-[620px] rounded-[28px] overflow-hidden shadow-2xl bg-black">
                  <img
                    src={phone}
                    alt="phone mock"
                    className="w-full h-full object-cover block"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>
            )}

            {/* Spacer ensures scroll room (only needed for large screen animation) */}
            {isLargeScreen && <div className="h-[60vh] md:h-[60vh]" />}

            {/* BOTTOM BLOCK */}
            <div className="space-y-6 mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 leading-snug">
                No algorithms. No endless scroll.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">
                Just your human essence felt through your tiles, the film, and
                the people you connect to.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-xl shadow-lg text-base md:text-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
                Claim your seat
              </button>
            </div>
          </div>

          {/* PHONE (pinned + animated only on lg+) */}
          {isLargeScreen && (
            <div
              ref={phoneWrapRef}
              className="w-[300px] shrink-0 self-stretch flex items-start lg:mb-[800px]"
              style={{ pointerEvents: "none" }}
            >
              <div
                ref={phoneInnerRef}
                className="w-full h-[620px] rounded-[28px] overflow-hidden shadow-2xl bg-black"
              >
                <img
                  src={phone}
                  alt="phone mock"
                  className="w-full h-full object-cover block"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
