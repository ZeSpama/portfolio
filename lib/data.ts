import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGamepad2, LuGraduationCap } from "react-icons/lu";
import { FaServer, FaCode } from "react-icons/fa"
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Paredes, Porto",
    description:
      "Comecei com o desenvolvimento front-end, com o objetivo de desenvolver um website para umca comunidade de cs:go que fundei na altura.",
    icon: React.createElement(FaCode),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "DankiCode",
    description:
      "Após vários meses com a necessidade de melhorar os meus projetos decidi dar mais uma passo e começar com o full stack.",
    icon: React.createElement(FaServer),
    date: "2022 - presente",
  },
  {
    title: "Redes e Segurança Informática",
    location: "IPCA, Famalicão",
    description:
      ".",
    icon: React.createElement(LuGraduationCap),
    date: "presente",
  },
  
] as const;

export const projectsData = [
  {
    title: "Paredes Community",
    description:
      "Website para uma comunidade de CSGO com o objetivo de melhorar a experiência do publico e dar a conhecer a mais jogadores.",
    tags: ["Html", "CSS", "JavaScript"],
    imageUrl: corpcommentImg,
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
  "MongoDB",
  "Express",
] as const;
