import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next"; // <-- импорт i18n
import Container from "./Container";
import LanguageSelect from "./ui/LanguageSelect";

const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
  exit: { opacity: 0 },
};

const panel = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#161B22] text-[#C9D1D9] shadow">
      <Container className="flex items-center gap-6 px-6 py-4">
        <h1 className="text-xl font-bold whitespace-nowrap">
          Aliyar Erbolatov
        </h1>
        <div className="flex-1" />
        <nav className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[#58A6FF] transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <LanguageSelect />
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-[100] flex h-10 w-10 flex-col items-center justify-center"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="block h-1 w-7 rounded bg-[#C9D1D9]"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="my-1 block h-1 w-7 rounded bg-[#C9D1D9]"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="block h-1 w-7 rounded bg-[#C9D1D9]"
          />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={overlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 h-full w-72 bg-[#161B22] z-50 flex flex-col gap-8 p-8"
              variants={panel}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-semibold hover:text-[#58A6FF]"
                >
                  {l.label}
                </a>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
