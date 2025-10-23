import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const panelVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.5 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.5 } },
  };

  const topBar = { closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } };
  const middleBar = { closed: { opacity: 1 }, open: { opacity: 0 } };
  const bottomBar = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <header className="bg-[#161B22] text-[#C9D1D9] sticky top-0 z-50 shadow-md">
      <Container className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Aliyar Erbolatov</h1>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#58A6FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[100]"
        >
          <motion.span
            className="block w-8 h-1 bg-[#C9D1D9] mb-1 rounded"
            animate={isOpen ? "open" : "closed"}
            variants={topBar}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-8 h-1 bg-[#C9D1D9] mb-1 rounded"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span
            className="block w-8 h-1 bg-[#C9D1D9] rounded"
            animate={isOpen ? "open" : "closed"}
            variants={bottomBar}
            transition={{ duration: 0.3 }}
          />
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-90"
              onClick={() => setIsOpen(false)}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <motion.div
              className="fixed inset-0 bg-[#161B22] flex flex-col justify-center items-center space-y-10 z-[95] p-6"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-bold hover:text-[#58A6FF]"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
