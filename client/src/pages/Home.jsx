import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  slideAnimation,
  headTextAnimation,
} from "../config/motion.js";
import {CustomButton} from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  console.log("Home Component Loaded"); // Debugging line

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
          </motion.header>

          <motion.div className="home-content" {...headContentAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
              </motion.div>

              <motion.div {...headContainerAnimation} className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D customization tool.
                  <strong> Unleash your imagination</strong>{" "} andnd define your own style.
                </p>

                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  />

              </motion.div>
          </motion.div>
        </motion.section>

      )}
    </AnimatePresence>
  );
};

export default Home;