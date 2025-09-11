"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "#",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: aiStartupLandingPage,
  },
];

type Project = (typeof portfolioProjects)[0];

const ProjectCard = ({
  project,
  projectIndex,
  totalProjects,
  scrollYProgress,
}: {
  project: Project;
  projectIndex: number;
  totalProjects: number;
  scrollYProgress: any;
}) => {
  const targetScale = 1 - (totalProjects - projectIndex) * 0.05;

  const scale = useTransform(
    scrollYProgress,
    [projectIndex * 0.25, 1],
    [1, targetScale]
  );

  return (
    <motion.div
      style={{ scale, top: `calc(64px + ${projectIndex * 40}px)` }}
      className="sticky top-16"
    >
      <Card className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="lg:pb-16">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold tracking-widest uppercase gap-2 text-sm bg-clip-text text-transparent">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
            </div>

            <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
              {project.title}
            </h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li
                  key={result.title}
                  className="flex gap-2 text-sm text-white/50 md:text-base"
                >
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                <span>View Live Site</span> <ArrowUpRight />
              </button>
            </a>
          </div>
          <div className="relative">
            <Image
              src={project.image}
              alt={project.title}
              className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          description="See how I transform concepts into engaging digital experiences"
        />

        <div className="mt-10 flex flex-col gap-20 md:mt-20" ref={container}>
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              projectIndex={index}
              totalProjects={portfolioProjects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
