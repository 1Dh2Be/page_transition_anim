import { Outlet, useLocation } from "react-router";
import Container from "../components/Container";
import Nav from "../components/Nav";
import { AnimatePresence, motion } from "framer-motion";

const RootLayout = () => {
  const location = useLocation();
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const transitionPage = {
    initial: { top: 0 },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: 0.1 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: 0.4,
        delay: 0.1 * i,
      },
    }),
  };

  const nbOfCulumns = 5;

  return (
    <Container>
      <Nav />
      <main className="flex justify-center items-center h-[90%] text-6xl">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none flex">
              {[...Array(nbOfCulumns)].map((_, i) => {
                return (
                  <motion.div
                    {...anim(transitionPage, nbOfCulumns - i)}
                    key={i}
                    className="h-full w-full relative bg-zinc-950"
                  />
                );
              })}
            </div>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </Container>
  );
};

export default RootLayout;
