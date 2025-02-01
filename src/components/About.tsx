"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import pic1 from "@/Sabre2_PCB.png"
import pic2 from "@/CentralPark.png"
import pic3 from "@/NASA_Lab.png"
import pic4 from "@/SetPicture.png"

import { motion } from "framer-motion";

export default function About() {
  const images = [
    {pic1},
    {pic2},
    {pic3},
    {pic4},
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {/*{images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              //width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}*/}
         
        <Image
          src={pic1}
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        />
        <Image
          src={pic2}
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        />
        <Image
          src={pic3}
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        />
        <Image
          src={pic4}
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        /> 
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hi, I&apos;m Matthew Bach &mdash; student, improviser, coder, and a tech geek.
          My time at UVA has allowed me to explore topics like machine learning, 
          web development, embedded devices, and more while pursuing an electrical 
          and computer engineering double major. Welcome to my portfolio!
        </Paragraph>

        <Paragraph className=" mt-4">
          I currently specialize in Python (NumPy, Matplotlib), C, C++, 
          and Java. I also have experience in several design tools like AutoCAD, SketchUp, 
          Bambu Lab, Altium Designer, Quartus Prime, and Multisim. My focus going forward 
          will be to improve my cloud development skills and explore more of electrical engineering.
        </Paragraph>

        <Paragraph className=" mt-4">
          Outside of programming, performing has been my great passion for several years. 
          Originally, I was an actor in several plays and musicals, finding enjoyment in 
          Shakespeare and Oscar Wilde. Through my acting experience, I also enjoyed hands-on 
          experience building sets! Now, I prefer improvisational performances through my 
          current improv group, The Whethermen.
        </Paragraph>

        <Paragraph className=" mt-4">
          The outdoors also drags me away from the keyboard; I cherish Shenandoah hikes 
          and mountain bike rides. Some of my favorite hikes have included Old Rag Mountain 
          and Black Rock Summit, and Pocahontas State Park has some amazing bike trails.
        </Paragraph>

        <Paragraph className=" mt-4">
          Academically, I love physics and space! My two visits to NASA have been extraordinarily 
          informative; NASA Langley&apos;s wind tunnel being one of the best places I visited. 
          While originally I wanted to pursue a double major with math, my physics interest 
          continues in my pursuit of RF engineering. 
        </Paragraph>

        <Paragraph className=" mt-4">
          I&apos;m excited to continue building my technical skills and apply them toward 
          passion projects!
        </Paragraph>
      </div>
    </div>
  );
}
