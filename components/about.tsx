"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Olá, sou o José Marques tenho 19 anos nasci no Porto em Portugal.
        Conclui o 9º ano no ensino normal, e depois o 12º ano em ensino
        profissional como Técnico de Manutenção Industrial. Desde sempre quis
        ser programador de jogos e com os meus 16 anos iniciei a minha jornada
        no mundo da tecnologia, quando criei uma comunidade de CSGO. Essa
        experiência despertou ainda mais o meu interesse e com algumas
        necessidades para melhorar o projeto, decidi aprender HTML e CSS e por
        aí fora. Atualmente, aos 19 anos, estou no Instituto Politécnico do
        Cávado e do Ave a tirar o TeSP de Redes e Segurança Informática.
      </p>

      <p></p>
    </motion.section>
  );
}
