import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "./Container";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="px-6 bg-[#0D1117] text-[#C9D1D9] flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl space-y-6 w-full md:w-1/2"
          >
            <motion.h2
              variants={textVariants}
              custom={0}
              className="text-4xl font-bold text-[#58A6FF]"
            >
              {t("about.me")}
            </motion.h2>

            <motion.p
              variants={textVariants}
              custom={1}
              className="text-lg leading-relaxed text-gray-300"
              dangerouslySetInnerHTML={{ __html: t("about.intro") }}
            ></motion.p>

            <motion.p
              variants={textVariants}
              custom={2}
              className="text-gray-400"
              dangerouslySetInnerHTML={{ __html: t("about.algo_thinking") }}
            ></motion.p>

            <motion.div
              variants={textVariants}
              custom={3}
              className="flex gap-3 pt-2 flex-wrap"
            >
              <a
                href="https://github.com/aliyarerbolatov12-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#58A6FF] text-[#0D1117] font-semibold rounded-lg hover:bg-[#79C0FF] transition-all"
              >
                {t("about.github")}
              </a>
              <a
                href="#projects"
                className="px-6 py-2 border border-[#58A6FF] text-[#58A6FF] font-semibold rounded-lg hover:bg-[#58A6FF] hover:text-[#0D1117] transition-all"
              >
                {t("about.projects")}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-3xl bg-[#161B22] shadow-[0_0_30px_#0E1623] flex flex-col items-center justify-center text-center w-full md:w-auto flex-shrink-0"
          >
            <div className="text-4xl font-bold tracking-wide text-[#58A6FF]">
              Aliyar <br /> Erbolatov
            </div>
            <p className="mt-3 text-gray-400">Frontend Developer</p>
            <div className="mt-4 h-0.5 w-16 bg-[#58A6FF] rounded-full"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
