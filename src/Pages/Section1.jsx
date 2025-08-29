import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Section1() {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero section entrance animation
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        }
      });

      heroTl.fromTo(titleRef.current, 
        { y: 100, opacity: 0, scale: 0.8, rotationX: 15 },
        { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 1.5, ease: "power3.out" }
      );

      heroTl.fromTo(subtitleRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // Parallax effect for background
      gsap.to(".parallax-bg", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Add pulsating animation to each word
      const words = document.querySelectorAll('[id^="word"]');
      words.forEach((word, index) => {
        gsap.to(word, {
          filter: 'drop-shadow(0 0 15px #fff27d) drop-shadow(0 0 30px #ffd700)',
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`min-h-[80vh] flex justify-center items-center w-full px-[24px] md:px-[60px] font-sans overflow-x-hidden relative transition-colors duration-300 bg-black text-black`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Hero */}
      <section className="h-[50vh] /py-[200px] flex flex-col justify-center items-center text-center p-6 relative z-10">
        <div ref={titleRef} className="mb-2">
          <h1 className="text-4xl md:text-[66.8px] font-bold leading-tight">
            {[
              { text: "The", id: "word1" },
              { text: "World's", id: "word2" },
              { text: "First", id: "word3" },
              { text: "Social", id: "word4" },
              { text: "Film-Sharing", id: "word5" },
              { text: "Network", id: "word6" }
            ].map((word) => (
              <span
                key={word.id}
                id={word.id}
                className="inline-block mx-2 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
                style={{
                  background: 'linear-gradient(45deg, #fff27d, #ffd700, #ffa500)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 0 transparent)',
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    filter: 'drop-shadow(0 0 25px #fff27d) drop-shadow(0 0 50px #ffd700) drop-shadow(0 0 75px #ffa500) drop-shadow(0 0 100px rgba(255, 215, 0, 0.5))',
                    scale: 1.15,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                  gsap.to(e.target, {
                    rotationY: 5,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    filter: 'drop-shadow(0 0 0 transparent)',
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                  gsap.to(e.target, {
                    rotationY: 0,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                }}
              >
                {word.text}
              </span>
            ))}
          </h1>
        </div>

        {/* Optional subtitle text */}
        <p ref={subtitleRef} className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-400">
          Spontaneous connection, powered by cinema.
        </p>
      </section>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-[#fff27d]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
  );
}
