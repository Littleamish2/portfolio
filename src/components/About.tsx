"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";


import { motion } from "framer-motion";

export default function About() {
  const images = [
    "@/Sabre2_PCB.png",
    "@/CentralPark.png",
    "@/NASA_Lab.png",
    "@/SetPicture.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
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
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hi, I&apos;m Matthew Bach &mdash; student, improviser, coder, and a tech geek.
          My time at UVA has allowed me to explore topics like machine learning, 
          web development, embedded devices, and more while pursuing an electrical 
          and computer engineering double major. Welcome to my portfolio!
        </Paragraph>

        <Paragraph className=" mt-4">
          I currently specialize in Python (NumPy, matplotlib), C, C++, 
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
