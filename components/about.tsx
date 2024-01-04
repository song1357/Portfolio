"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Business Analytics in Lancaster University</span>, I decided to pursue my
        passion for analytics and programming. I enrolled in some coding MOOCs and learned{" "}
        <span className="font-medium">front-end web development and data analytics before I studied in the United Kingdom.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Python, R, Javascript, React, Next.js.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading books,playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. 
      </p>
    </motion.section>
  );
}
