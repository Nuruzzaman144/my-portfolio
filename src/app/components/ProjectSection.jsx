"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/Project/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previwUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/Project/p-1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previwUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/Project/E-1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previwUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/Project/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previwUrl: "/",
  },
  {
    id: 5,
    title: "React Mongodb Template",
    description: "Authentication and CRUD operation",
    image: "/Project/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previwUrl: "/",
  },
  {
    id: 6,
    title: "My Full-Stack Learning Path",
    description: "Project 5 description",
    image: "/Project/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previwUrl: "/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProject=ProjectData.filter((project)=>
    project.tag.includes(tag)
)

  return (
    <>
      <h1 className=" text-center text-4xl font-bold text-white mt-4 py-4">
        My Project
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project}
            gitUrl={project.gitUrl}
            previwUrl={project.previwUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
