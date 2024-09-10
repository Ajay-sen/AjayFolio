import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import myPicture from '../assets/foliodp3.jpg';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Software Developer', 'Web Developer', 'Programmer'],
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // Check if the screen size is mobile
    const mediaQuery = window.matchMedia("(max-width: 760px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex flex-col items-start'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>AJAY</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Specialist in <span className="multiple-text"></span>
          </p>

          <div className='ml-5 mt-5 hero-img'>
            <img
              src={myPicture}
              alt="Ajay Sen"
              className='w-[200px] h-[200px] rounded-full object-cover'
            />
          </div>
        </div>
      </div>

      {/* Render ComputersCanvas only when it's not mobile */}
      {!isMobile && <ComputersCanvas />}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
