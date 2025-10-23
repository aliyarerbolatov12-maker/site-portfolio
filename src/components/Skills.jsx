import { motion } from "framer-motion";
import Container from "./Container";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGithub,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    color: "#58A6FF",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    color: "#3FB950",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Dev Tools",
    color: "#D29922",
    items: [
      { name: "Vite", icon: SiVite },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export default function Skills() {
  return (
    <section className="py-28 bg-[#0B0F15] text-[#E6EDF3] flex flex-col items-center overflow-hidden">
      <Container>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-16 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#58A6FF] to-[#79C0FF] text-center"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
        >
          {skills.map((group) => (
            <motion.div
              key={group.title}
              variants={sectionVariants}
              className="rounded-2xl bg-[#161B22] border border-[#2D333D] p-8 shadow-lg hover:shadow-[#58A6FF]/10"
            >
              <h3
                className="text-xl font-semibold mb-6 text-center"
                style={{ color: group.color }}
              >
                {group.title}
              </h3>

              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {group.items.map(({ name, icon: Icon }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-[#1C2128] rounded-xl border border-[#30363D]">
                      <Icon className="w-8 h-8 text-[#58A6FF]" />
                    </div>
                    <span className="mt-2 text-sm text-gray-400">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
