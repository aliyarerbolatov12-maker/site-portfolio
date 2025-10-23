import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Container from "./Container";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";

const projects = [
  {
    id: 1,
    title: "Clothing Store",
    description: "E-commerce mockup. React, Tailwind, Cart, Filters.",
    img: img1,
    link: "#",
    tags: ["Next", "Ts", "Tailwind"],
  },
  {
    id: 2,
    title: "Clone Trello",
    description:
      "Creating boards, lists, and cards with drag & drop and Kanban systems.",
    img: img2,
    link: "#",
    tags: ["React", "Ts", "Tailwind"],
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Coming soon.",
    img: img2,
    link: "#",
    tags: ["React", "Tailwind", "CMS"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-accent mb-16">
          Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={cardVariants}
              className="bg-card rounded-3xl p-4 md:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.03)] flex flex-col"
            >
              <div className="rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="mt-4 flex flex-col md:flex-row items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-textMain">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-base text-[rgba(201,209,217,0.85)] mt-2">
                    {p.description}
                  </p>
                </div>

                <a
                  href={p.link}
                  className="mt-3 md:mt-0 ml-0 md:ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] hover:bg-accent hover:text-page transition-all"
                  aria-label="Open project"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-3 text-[12px] md:text-[13px] text-[rgba(201,209,217,0.6)]">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block mr-2 px-2 py-1 rounded bg-[rgba(255,255,255,0.02)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
