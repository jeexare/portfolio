'use client';
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function Hero({ heroRef, showLogo }) {
  return (
    <div
      ref={heroRef}
      className="uppercase text-2xl md:text-4xl font-space h-[calc(100vh-100px)] md:h-[calc(100vh-50px)] relative z-10"
    >
      <div className="flex flex-col items-center justify-center gap-10 h-full">
      <h1 className="text-eng">Hello. I'm</h1>
      <h1 className="text-spa">Hola. Soy</h1>

      <div className="w-[200px] md:w-3/6 lg:h-1/2">
        <img
          src="/Portfolio2.webp"
          className="object-cover w-full h-full hero-image"
          alt="Hero image"
        />
      </div>

      <motion.h2
        layoutId="logo-name"
        className="cool-grad absolute w-[calc(100vw-50px)] md:w-5/6 md:text-7xl  lg:w-4/6 flex justify-between z-10 text-4xl font-space  font-bold"
        style={{
          transform: showLogo
            ? 'translateX(-50vw) translateY(-34vh) scale(0.2)'
            : 'translateX(0) translateY(0) scale(1)',
          transition: 'all .8s ease',
          
        }}
      >
        <span>Gabriela</span> <span>Rubio</span>
      </motion.h2>

      <p className="text-eng">I build digital worlds</p>
      <p className="text-spa">Creo mundos digitales</p>
      </div>
      <CTAButton />
    </div>

  );
}
