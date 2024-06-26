import React from "react";
import { motion, useAnimationControls } from "framer-motion";
const AnimationControls = () => {
  const flipControls = useAnimationControls();
  const handleClick = () => {
    flipControls.start("flip");
  };
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: ".8rem",
      }}>
      <motion.button onClick={handleClick} className="example-button">
        Flip it!
      </motion.button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        // whileHover="flip"
        initial="initial"
        animate={flipControls}
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}></motion.div>
    </div>
  );
};

export default AnimationControls;
