import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
   const background = useTransform(
     scrollYProgress,
     [0, 1],
     ["rgb(06,1 , 567)", "rgb(1,1 , 1)"]
   );
    return (
      <div style={{ overflowX: "clip"}}>
        <motion.div
          style={{
            scaleX,
            background,
            transformOrigin: "left",
            position: "sticky",
            top: 0,
            width: "100%",
            height: "10px",
          }}
        />
        <div style={{ padding: "1.2rem" }}>
          <div style={{ maxWidth: "700px", margin: "auto" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae? Molestiae cumque iusto nesciunt expedita
              necessitatibus odit maiores iste consequatur totam dolor aperiam
              ab doloribus aspernatur perspiciatis, temporibus aliquid culpa!
            </p>
            <p>
              Optio expedita ducimus cum quas repudiandae velit voluptate ab
              repellat temporibus laboriosam! Ut mollitia dolor, ab quam dolores
              unde accusantium asperiores iusto sunt similique sequi nihil ea.
              Adipisci, earum eveniet!
            </p>
            <p>
              Totam suscipit quaerat voluptate harum doloremque natus maxime
              excepturi molestiae odit quam nesciunt tempora, eaque sint soluta
              error nisi nemo earum numquam accusamus voluptas doloribus?
              Consectetur impedit enim perspiciatis rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae? Molestiae cumque iusto nesciunt expedita
              necessitatibus odit maiores iste consequatur totam dolor aperiam
              ab doloribus aspernatur perspiciatis, temporibus aliquid culpa!
            </p>
            <p>
              Optio expedita ducimus cum quas repudiandae velit voluptate ab
              repellat temporibus laboriosam! Ut mollitia dolor, ab quam dolores
              unde accusantium asperiores iusto sunt similique sequi nihil ea.
              Adipisci, earum eveniet!
            </p>
            <p>
              Totam suscipit quaerat voluptate harum doloremque natus maxime
              excepturi molestiae odit quam nesciunt tempora, eaque sint soluta
              error nisi nemo earum numquam accusamus voluptas doloribus?
              Consectetur impedit enim perspiciatis rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae? Molestiae cumque iusto nesciunt expedita
              necessitatibus odit maiores iste consequatur totam dolor aperiam
              ab doloribus aspernatur perspiciatis, temporibus aliquid culpa!
            </p>
            <p>
              Optio expedita ducimus cum quas repudiandae velit voluptate ab
              repellat temporibus laboriosam! Ut mollitia dolor, ab quam dolores
              unde accusantium asperiores iusto sunt similique sequi nihil ea.
              Adipisci, earum eveniet!
            </p>
            <p>
              Totam suscipit quaerat voluptate harum doloremque natus maxime
              excepturi molestiae odit quam nesciunt tempora, eaque sint soluta
              error nisi nemo earum numquam accusamus voluptas doloribus?
              Consectetur impedit enim perspiciatis rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae? Molestiae cumque iusto nesciunt expedita
              necessitatibus odit maiores iste consequatur totam dolor aperiam
              ab doloribus aspernatur perspiciatis, temporibus aliquid culpa!
            </p>
            <p>
              Optio expedita ducimus cum quas repudiandae velit voluptate ab
              repellat temporibus laboriosam! Ut mollitia dolor, ab quam dolores
              unde accusantium asperiores iusto sunt similique sequi nihil ea.
              Adipisci, earum eveniet!
            </p>
            <p>
              Totam suscipit quaerat voluptate harum doloremque natus maxime
              excepturi molestiae odit quam nesciunt tempora, eaque sint soluta
              error nisi nemo earum numquam accusamus voluptas doloribus?
              Consectetur impedit enim perspiciatis rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae? Molestiae cumque iusto nesciunt expedita
              necessitatibus odit maiores iste consequatur totam dolor aperiam
              ab doloribus aspernatur perspiciatis, temporibus aliquid culpa!
            </p>
            <p>
              Optio expedita ducimus cum quas repudiandae velit voluptate ab
              repellat temporibus laboriosam! Ut mollitia dolor, ab quam dolores
              unde accusantium asperiores iusto sunt similique sequi nihil ea.
              Adipisci, earum eveniet!
            </p>
            <p>
              Totam suscipit quaerat voluptate harum doloremque natus maxime
              excepturi molestiae odit quam nesciunt tempora, eaque sint soluta
              error nisi nemo earum numquam accusamus voluptas doloribus?
              Consectetur impedit enim perspiciatis rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae? Molestiae cumque iusto nesciunt expedita
              necessitatibus odit maiores iste consequatur totam dolor aperiam
              ab doloribus aspernatur perspiciatis, temporibus aliquid culpa!
            </p>
            <p>
              Optio expedita ducimus cum quas repudiandae velit voluptate ab
              repellat temporibus laboriosam! Ut mollitia dolor, ab quam dolores
              unde accusantium asperiores iusto sunt similique sequi nihil ea.
              Adipisci, earum eveniet!
            </p>
            <p>
              Totam suscipit quaerat voluptate harum doloremque natus maxime
              excepturi molestiae odit quam nesciunt tempora, eaque sint soluta
              error nisi nemo earum numquam accusamus voluptas doloribus?
              Consectetur impedit enim perspiciatis rem?
            </p>
          </div>
        </div>
      </div>
    );
};

export default ScrollAnimation;
