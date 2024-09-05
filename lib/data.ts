import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/ab.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/a.png";

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
    title: "Software Engineer ",
    location: "Noida, IN",
    company: "Karman Drone",
    description:
      "I work on c++ developement and get upto Fullstack Developement. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Web/ Product Intern ",
    location: "Bangalore,In",
    company: "DPDzero",
    description:
      "I'm worked on a full-stack developer . My stack includes React, VueJS, Fast Api, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "Dall -e Website",
    linkes:"https://dalle-clone-mern-ts.vercel.app/",
    description:"It utilizes the power of OpenAI s DALL-E API to generate images, and allows users to save and showcase their creations on a community gallery",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma","Docker","NodeJs","ExpressJs"],
    imageUrl: corpcommentImg,
    
  },
  {
    title: "Klass Payment App",
    linkes:"https://github.com/apurba-striker/klasspayment",
    description:
      "This project aims to replicate the basic functionality of the payment app",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "NodeJs","ExpressJs"],
    imageUrl: rmtdevImg,
    
  },
  {
    title: "Stack App",
    linkes:"https://github.com/apurba-striker/stack-clone-nextjs",
    description:
      "Real-time chat and messaging Channel-based communication Direct messaging between users File and media sharing Customizable notifications",
    tags: ["React", "MongodB", "ExpressJs", "Tailwind CSS" , "AWS Cloud Services" , "NodeJs"],
    imageUrl: wordanalyticsImg,
    
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
