import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PolarizationAnalysis from "@/public/PolarizationAnalysis.png";
import ExcelSheetsConverter from "@/public/ExcelSheetsConverter.png";
import PortfolioWebApp from "@/public/PortfolioWebApp.png";

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
    title: "Study in Qingdao University and MOOCs",
    location: "Qingdao, China",
    description:
      "I studied Internatioanl Business and Web development from Qingdao University and MOOCs.",
    icon: React.createElement(LuGraduationCap),
    date: "2012-2019",
  },
  {
    title: "Indie web developer and data analyst",
    location: "Shanghai, China",
    description:
      "I worked as an indie front-end developer and analyst for 3 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Student in Lancaster University",
    location: "Lancaster, UK",
    description:
      "I studied business analytics and programming and acquired master degree in Lancaster University.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Data Analyst/Freelancer/English Tutor",
    location: "Shanghai, China",
    description:
      "I worked as Data Analyst, Freelancer, and now I am an English Tutor.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Polarization Analysis of online reviews",
    description:
      "This project aimed to analyse the factors influencing the polarization of movie reviews.",
    tags: ["R", "Data Analytics", "Linear Regression",],
    imageUrl: PolarizationAnalysis,
  },
  {
    title: "Excel File Converter",
    description:
      "A converter made with Python and Streamit to promote the efficiency of working flows.",
    tags: ["Python", "Streamlit", "Excel"],
    imageUrl: ExcelSheetsConverter,
  },
  {
    title: "A portfolio web app",
    description:
      "A portfolio web app for showcasing projects and skills of a developer.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: PortfolioWebApp,
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
  "Python",
  "Streamlit",
  "Redux",
  "R",
  "Framer Motion",
] as const;
