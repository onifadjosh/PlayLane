import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mock1 from "../assets/alone.png";
import mock2 from "../assets/mock2.png";
import mock3 from "../assets/mock3.png";
import vid from "../assets/vid.mp4";

// Import a video file or use a URL
// import backgroundVideo from "../assets/background-video.mp4"; // Add your video file

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const phonesRef = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bounce in
      gsap.fromTo(
        phonesRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "bounce.out",
          stagger: 0.25,
        }
      );

      // Parallax on scroll
      phonesRef.current.forEach((phone, i) => {
        gsap.to(phone, {
          y: i % 2 === 0 ? 60 : -60,
          ease: "none",
          scrollTrigger: {
            trigger: phone,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleHover = (el) => {
    gsap.to(el, {
      scale: 1.08,
      rotateZ: 0, // straighten slightly on hover
      rotateY: 8, // little 3D tilt
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = (el, defaultRotate) => {
    gsap.to(el, {
      scale: 1,
      rotateZ: defaultRotate, // back to its original slant
      rotateY: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  const phoneImages = [
    {
      src: mock1,
      rotate: -10,
    },
    {
      src: mock2,
      rotate: 0,
    },
    {
      src: mock3,
      rotate: 10,
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center flex-col-reverse lg:flex-row justify-center pt-[120px] mg:pt-[0px] gap-[100px] px-[24px] md:px-12 overflow-hidden font-sans">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={vid} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Left Text Section */}
      <div className="relative z-10 max-w-xl basis-[40%]">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
          PlayLane: <br /> <span className="text-[#fff257]">Where Films Start…</span> and Friendships Take Over.
        </h1>
        <p className="text-white mb-6 text-xl">
          The world doesn't need another social app. It needs moments where you
          can feel seen, the kind that happens face-to-face. To share a sofa, a
          glass of wine, a laugh that echoes past the credits. This is where
          repeated small talks turn into real friendships. Where strangers
          become part of your story.
        </p>
        <button className="button mb-[30px] lg:mb-[0px] bg-white text-black hover:bg-gray-100">
          <span className="text-[16px] font-semibold">Join the waitlist</span>
          <span className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="20"
              viewBox="0 0 38 15"
              fill="none"
            >
              <path
                fill="black"
                d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.940l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.150-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.080-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.010.013-.010.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Phones Section */}
      <div className="relative z-10 flex space-x-[-120px] md:pr-12">
        {phoneImages.map((phone, i) => (
          <div
            key={i}
            ref={(el) => (phonesRef.current[i] = el)}
            className="w-[200px] md:w-[280px] h-[300px] md:h-[580px] rounded-[36px] overflow-hidden shadow-2xl bg-black cursor-pointer"
            style={{ transform: `rotate(${phone.rotate}deg)` }}
            onMouseEnter={() => handleHover(phonesRef.current[i])}
            onMouseLeave={() => handleLeave(phonesRef.current[i], phone.rotate)}
          >
            {/* Screenshot inside phone mockup */}
            <img
              src={phone.src}
              alt={`phone-${i}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}