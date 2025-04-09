import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import project1_img from "@/public/project1_img.png";
import project2_img from "@/public/project2_img.png";
import project3_img from "@/public/project3_img.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UX Designer",
    location: "Inselo, Stockholm",
    description:
      "Collaborated with cross-functional teams, developers and product managers to integrate design solutions.Executed content design initiatives for Inselo's website/partner app and conducted research to improve the overall user experience. Created wireframes, prototypes and high-fidelity designs to visualize and communicate design concepts.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Project Coordinator",
    location: "Lernia, Stockholm",
    description:
      "Primary contact person for system development efforts, communicator between end users and developers. Collaborated with various departments and teams to promote effective communication and ensure development for the organization's business goals. Identified opportunities for process improvements and implemented streamlined workflows. Trained staff, induction processes and continuous competence.",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2018",
  },
  {
    title: "Content Creator",
    location: "Esprit, London",
    description:
      "Create content and produce engaging and relevant content to increase brand visibility. Conducted market research and analysis to identify trends and business opportunities. Visual and multimedia content, maintaining a cohesive brand voice and style across all channels. Managed social media accounts and promoted community engagement. Collaborated with UX team to ensure content aligns with overall user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2009",
  },
] as const;

export const projectsData = [
  {
    title: "project 1",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: project1_img,
  },
  {
    title: "project 2",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: project2_img,
  },
  {
    title: "project 3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: project3_img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Figma",
  "Adobe",
  "Affinity",
] as const;
