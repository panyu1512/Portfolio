"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div>
        <p className="mb-3">
          I am a dedicated{" "}
          <span className="text-[#9028A3] font-bold">software engineer</span>{" "}
          with more than two years of experience in full-stack web development,
          where I have honed my skills in{" "}
          <span className="text-[#9028A3] font-bold">JavaScript</span>,{" "}
          <span className="text-[#9028A3] font-bold">Python</span>,{" "}
          <span className="text-[#9028A3] font-bold">React</span>,{" "}
          <span className="text-[#9028A3] font-bold">Angular</span> and{" "}
          <span className="text-[#9028A3] font-bold">Django</span>.
        </p>
        <p className="mb-3">
          In addition to my web development expertise, I excel in{" "}
          <span className="text-[#9028A3] font-bold">data engineering</span>,
          particularly in{" "}
          <span className="text-[#9028A3] font-bold">Spark</span> and{" "}
          <span className="text-[#9028A3] font-bold">Apache Airflow</span> for
          efficient data processing and workflow management.
        </p>
        <p className="mb-3">
          I thrive in collaborative team environments and am committed to{" "}
          <span className="text-[#9028A3] font-bold">continuous learning</span>,
          always staying updated with the latest technologies to contribute
          effectively as a{" "}
          <span className="text-[#9028A3] font-bold">
            software and data engineer
          </span>
          .
        </p>
      </div>
    </motion.section>
  );
};
