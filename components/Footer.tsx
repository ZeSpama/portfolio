import React from "react";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs flex items-center justify-center space-between">
        Feito com{" "}
        <span className="ml-1 mr-1">
          {" "}
          <AiFillHeart className="text-red-500" />{" "}
        </span>{" "}
        por{" "}
        <a href="https://zespama.pt" target="_blank" className="ml-1">
          ZeSpama
        </a>
      </small>
    </footer>
  );
}
