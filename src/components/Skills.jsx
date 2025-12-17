import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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

const iconsMap = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Vite: SiVite,
  GitHub: SiGithub,
};

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
  visible: { transition: { staggerChildren: 0.35 } },
};

export default function Skills() {
  const { t } = useTranslation();
  const skillsData = t("skills.groups", { returnObjects: true });

  return (
    <section
      id="skills"
      className="py-28 bg-[#0B0F15] text-[#E6EDF3] flex flex-col items-center overflow-hidden"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-16 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#58A6FF] to-[#79C0FF] text-center"
        >
          {t("skills.title")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
        >
          {skillsData.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              variants={sectionVariants}
              className="rounded-2xl bg-[#161B22] border border-[#2D333D] p-8 shadow-lg hover:shadow-[#58A6FF]/10"
            >
              <h3
                className="text-xl font-semibold mb-6 text-center"
                style={{ color: ["#58A6FF", "#3FB950", "#D29922"][gIdx] }}
              >
                {group.title}
              </h3>

              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {group.items.map((name, idx) => {
                  const Icon = iconsMap[name];
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="p-4 bg-[#1C2128] rounded-xl border border-[#30363D]">
                        <Icon className="w-8 h-8 text-[#58A6FF]" />
                      </div>
                      <span className="mt-2 text-sm text-gray-400">{name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
