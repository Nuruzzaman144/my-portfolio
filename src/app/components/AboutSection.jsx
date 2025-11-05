"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        <li><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS</li>
        <li><strong>Frontend:</strong> React.js, Next.js, Redux, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Databases:</strong> MongoDB, MySQL, NoSQL</li>
        <li><strong>Tools:</strong> Git, GitHub, Postman, VS Code</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        <li><strong>Degree:</strong> B.E. in Computer Science and Engineering (CSE)</li>
        <li><strong>Institution:</strong> Chandigarh University</li>
        <li><strong>Focus:</strong> Software Development, Web Technologies, and Data Structures</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        <li>React Native - Coursera</li>
        <li>Full Stack Web Development - Udemy</li>
        <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition([]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/about-me.png"
          alt="hero image"
          width={500}
          height={500}
          priority
          className="w-full h-auto max-w-md md:max-w-full object-cover rounded-2xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full " >
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I’m Md Nuruzzaman, a passionate learner and aspiring Software
            Engineer who loves solving real-world problems through code. I enjoy
            exploring new technologies, building creative projects, and
            continuously improving my programming skills. With hands-on
            experience in Java, IoT, and web development, I aim to design
            efficient and scalable solutions that make life easier and smarter.
            Currently, I’m focused on mastering Data Structures, Algorithms, and
            full-stack development to become a strong problem solver and
            developer ready for the industry.
          </p>
          <div className="flex  flex-row justify-start  mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div >
          <div className="mt-8" >
            {TAB_DATA.find((t)=>t.id === tab).content}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
