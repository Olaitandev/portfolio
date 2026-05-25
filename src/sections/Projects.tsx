"use client";
import sonic from "@/assets/images/sonic.png";
import brainwave from "@/assets/images/brainwave.png";
import hilink from "@/assets/images/hilink.png";
import veylo from "@/assets/images/veylo.png";
import proforma from "@/assets/images/proforma.png";
import nile from "@/assets/images/nile.png";
import village from "@/assets/images/village.png";
import dami from "@/assets/images/dami.png";
import ragenzi from "@/assets/images/ragenzi.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const portfolioProjects = [
  {
    company: "Damilola",
    year: "2026",
    title: "Freelance Coach Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 80%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.damifayanjuola.com/",
    github: "",
    image: dami,
  },
  {
    company: "Proforma",
    year: "2026",
    title: "Professional Invoice Generator",
    results: [{ title: "Supabase" }, { title: "NextJS" }, { title: "Redux" }],
    link: "https://proforma-invoice-generator.vercel.app/",
    github: "",
    image: proforma,
  },

  // {
  //   company: "Nile",
  //   year: "2026",
  //   title: "Nile Tech Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://www.damifayanjuola.com/",
  //   image: nile,
  // },
  {
    company: "Sonic Tech",
    year: "2025",
    title: "Sonic Tech Landing Page",
    results: [
      { title: "Enhanced user experience by 30%" },
      { title: "Improved site speed by 40%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://sonic-sundrive.vercel.app",
    github: "",
    image: sonic,
  },
  // {
  //   company: "Brain wave",
  //   year: "2024",
  //   title: "Brainwave AI Website",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "https://brainwave-nu-tawny.vercel.app",
  //   image: brainwave,
  // },
  // {
  //   company: "Ragenzi",
  //   year: "2025",
  //   title: "Ragenzi Marketing Website",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://agenzi.vercel.app/",
  //   image: ragenzi,
  // },
  {
    company: "Veylo",
    year: "2026",
    title: "veylo Marketing Website",
    results: [
      { title: "NextJS" },
      { title: "TailwindCSS, CSS3" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://veylo-sundrive.vercel.app/",
    github: "",
    image: veylo,
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
      <Card className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="lg:pb-16">
            <div className="inline-flex gap-2 text-sm font-bold tracking-widest text-transparent uppercase bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
            </div>

            <h3 className="mt-2 font-serif text-2xl md:text-4xl md:mt-5">
              {project.title}
            </h3>
            <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
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
              <button className="inline-flex items-center justify-center w-full h-12 gap-2 mt-8 font-semibold bg-white text-gray-950 rounded-xl md:w-auto md:px-6">
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
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          description="See how I transform concepts into engaging digital experiences"
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20" ref={container}>
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
