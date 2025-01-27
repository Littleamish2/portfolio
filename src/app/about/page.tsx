import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Matthew Bach",
  description:
    "Matthew Bach",
};

export default function AboutPage() {
  const images = [
    "@/Sabre2_PCB.png",
    "@/CentralPark.png",
    "@/NASA_Lab.png",
    "@/SetPicture.png",
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
