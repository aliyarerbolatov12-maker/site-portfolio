import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="appearance-none bg-neutral-800 text-neutral-200 text-sm px-3 py-1.5 rounded-md text-center hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700 transition-colors"
    >
      <option value="ru">Русский</option>
      <option value="kz">Қазақша</option>
      <option value="en">English</option>
    </select>
  );
}
