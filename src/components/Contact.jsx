import Container from "./Container";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    name: "GitHub",
    icon: <FaGithub className="w-8 h-8" />,
    link: "https://github.com/aliyarerbolatov12-maker",
    color: "#58A6FF",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode className="w-8 h-8" />,
    link: "https://leetcode.com/u/aliyarerbolatov12-maker/",
    color: "#FFA116",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-8 h-8" />,
    link: "https://www.linkedin.com/in/aliyar-erbolatov-8a7386387/",
    color: "#0077B5",
  },
  {
    name: "Resume",
    icon: <FaFileAlt className="w-8 h-8" />,
    link: "https://almaty.hh.kz/resume/046e9bceff0f891d790039ed1f583859385649",
    color: "#D6001C",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0D1117] text-[#C9D1D9]">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#58A6FF]">
        Contact Me
      </h2>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {contacts.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-2xl bg-[#161B22] hover:bg-[#1C2128] transition-all duration-300 shadow-md"
              style={{ "--tw-shadow-color": item.color }}
            >
              <div
                className="p-4 rounded-full bg-opacity-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <span className="mt-3 text-sm font-medium text-[#C9D1D9] group-hover:text-[#58A6FF] transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </Container>

      <p className="mt-12 text-sm text-gray-400">
        © {new Date().getFullYear()} Aliyar Erbolatov — All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
