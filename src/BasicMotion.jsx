import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: ".8rem",
      }}>
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        layout>
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [ 0 , 150, -150 ,-150, 0],
            }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
              duration: 5,
              // type: "spring",
              // damping: 2,
              ease: "backInOut",
              times:[0 , 0.25 , .5 , .85 , 1]
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicMotion;
