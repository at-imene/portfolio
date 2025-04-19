import {
  FolderGit,
  Github,
  Globe,
  Home,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";

function BottomNavbar() {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };
  const navClass: string =
    "cursor-pointer flexitems-center space-x-4 text-sm hover:-tansform-x-1/2 hover:bg-accent hover:text-accent-foreground rounded-full hover:mx-3 transition-all duration-400 ease-in-out";
  const iconSize : string = "size-4 md:size-5 m-3 md:m-4";

  return (
    <div className="fixed bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto bg-background-200  border rounded-4xl shadow-2xl flex justify-center align-center">
      <div className="flex flex-row justify-center items-center mx-1 my-1">
        <Link className={navClass} to={"/"} key={"home"}>
          <Home className={iconSize} />
        </Link>
        <Link className={navClass} to={"/projects"}>
          <FolderGit className={iconSize} />
        </Link>
        <div className="h-6 w-px bg-border mx-2" />
        <Link
          className={navClass}
          to={"https://github.com/at-imene"}
          target="_blank"
        >
          <Github className={iconSize} />
        </Link>
        <Link
          className={navClass}
          to={"https://www.linkedin.com/in/imene-atchi-629929214/"}
          target="_blank"
        >
          <Linkedin className={iconSize} />
        </Link>
        <Link className={navClass} to={"/contact-me"}>
          <Mail className={iconSize} />
        </Link>
        <div className="h-6 w-px bg-border mx-2" />
        <div className="relative">
        {open && (
          <div className="absolute top-[-6rem] left-1/2 transform -translate-x-1/2 bg-white dark:bg-primary text-black dark:text-secondary rounded-lg shadow-lg py-2 px-3 space-y-2 z-50 min-w-[120px]">
            <button
              onClick={() => changeLanguage("en")}
              className="flex items-center gap-2 w-full hover:bg-gray-100 dark:hover:bg-secondary/10 px-2 py-1 rounded-md transition cursor-pointer"
            >
              🇬🇧 <span>English</span>
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className="flex items-center gap-2 w-full hover:bg-gray-100 dark:hover:bg-secondary/10 px-2 py-1 rounded-md transition cursor-pointer"
            >
              🇫🇷 <span>Français</span>
            </button>
          </div>
        )}
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <Globe className={iconSize} />
        </div>

        </div>
        

        <div className={navClass} onClick={() => toggleTheme(theme)}>
          {theme === "dark" ? (
            <Sun className={iconSize} />
          ) : (
            <Moon className={iconSize} />
          )}
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
