import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { use, useEffect, useRef } from "react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const App = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);

  const containerRef = useRef(null);
  const isInview = useInView(containerRef, { once: true });

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
          />
          <motion.div className="w-20 h-20 bg-stone-100 rounded-lg" />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          {/*rose second animation*/}
          <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          {/*rose second motion ends*/}
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          {/* button animation*/}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 front-light tracking-wid"
          >
            subscribe
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          {/* drag animations*/}

          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
          />
        </motion.div>
        {/*drag animations over*/}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          {/*scroll animation*/}
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>

      <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          className="text-5xl tracking-wide text-slate-100 text-center"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.3 }}
        >
          Just keep Scrolling
        </motion.h1>

        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A hic, ipsam
          rerum quibusdam cupiditate soluta dolorum voluptatem dicta earum nemo.
          Repellat eius dignissimos quis nisi eaque rerum in reprehenderit vero?
        </p>
        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          commodi optio nulla ut beatae modi amet odit provident nobis adipisci
          consectetur assumenda cumque maiores. Excepturi blanditiis,
          reiciendis, sunt eius tempore tenetur, natus dignissimos totam eveniet
          vitae harum maiores minima obcaecati.
        </p>
      </section>
    </div>
  );
};

export default App;
