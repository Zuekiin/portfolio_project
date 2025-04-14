"use client";

import Image from "next/image";
import React from "react";
import aboutme_img from "@/public/aboutme_img.png";
import { infoList, toolsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-[100%] sm:px-12 md:px-[12%] py-10 scroll-mt-20 mx-auto ">
      <h2 className="text-center text-4xl">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image src={aboutme_img} alt="user potrait" className="w-full" />
        </motion.div>
        <motion.div
          className="flex-1 max-w-[25rem]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          <p className="mb-10 max-w-2xl">
            I am an experienced UX Designer with Frontend Dev knowledge.
            Throughout my career, I have had the privilege of collaborating with
            various organizations, contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-500 rounded-xl p-3 cursor-pointer hover:bg-amber-50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]"
                key={index}
              >
                <span className="mt-3 text-2xl">{icon}</span>
                <h3 className="text-xs my-4 font-semibold">{title}</h3>
                <p className="text-gray-600 text-xs">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className=" border-[0.5px] border-gray-500 rounded-xl p-3 cursor-pointer hover:bg-amber-50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]"
                key={index}
              >
                <span className="text-4xl">{tool}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
