import { useTranslation } from "react-i18next";
import Container from "./Container";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const iconsMap = {
  GitHub: FaGithub,
  LeetCode: SiLeetcode,
  LinkedIn: FaLinkedin,
  Resume: FaFileAlt,
};

const contactsLinks = {
  GitHub: "https://github.com/aliyarerbolatov12-maker",
  LeetCode: "https://leetcode.com/u/aliyarerbolatov12-maker/",
  LinkedIn: "https://www.linkedin.com/in/aliyar-erbolatov-8a7386387/",
  Resume: "https://almaty.hh.kz/resume/046e9bceff0f891d790039ed1f583859385649",
};

const contactsColors = {
  GitHub: "#58A6FF",
  LeetCode: "#FFA116",
  LinkedIn: "#0077B5",
  Resume: "#D6001C",
};

const Contact = () => {
  const { t } = useTranslation();
  const contactItems = t("contact.items", { returnObjects: true });

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0D1117] text-[#C9D1D9]"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-[#58A6FF]">
        {t("contact.title")}
      </h2>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {contactItems.map((item, idx) => {
            const Icon = iconsMap[item.key];
            if (!Icon) return null; // защита от undefined
            return (
              <a
                key={idx}
                href={contactsLinks[item.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-2xl bg-[#161B22] hover:bg-[#1C2128] transition-all duration-300 shadow-md"
                style={{ "--tw-shadow-color": contactsColors[item.key] }}
              >
                <div
                  className="p-4 rounded-full bg-opacity-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: contactsColors[item.key] }}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <span className="mt-3 text-sm font-medium text-[#C9D1D9] group-hover:text-[#58A6FF] transition-colors">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </Container>

      <p className="mt-12 text-sm text-gray-400">
        © {new Date().getFullYear()} Aliyar Erbolatov {t("contact.copyright")}
      </p>
    </section>
  );
};

export default Contact;
