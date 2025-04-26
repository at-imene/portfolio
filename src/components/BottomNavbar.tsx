import {
  FolderGit,
  Github,
  Globe,
  Home,
  Linkedin,
  MessageCircle,
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
    "cursor-pointer flex items-center space-x-4 text-sm hover:bg-accent hover:text-accent-foreground rounded-full transition-all duration-300 ease-in-out";
  const iconSize: string = "size-4 md:size-5 m-3 md:m-4";
  const defaultMessage = "Hello, I would like to get in touch with you!";

  const handleWhatsAppClick = () => {
    const whatsappURL :string = `https://wa.me/213553966675?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed z-100 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto border rounded-4xl shadow-2xl flex justify-center items-center">
      <div className="flex flex-row justify-center items-center mx-1 my-1 space-x-1">

        {/* Home */}
        <div className="relative group">
          <Link className={navClass} to={"/"}>
            <Home className={iconSize} />
          </Link>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 hidden group-hover:block whitespace-nowrap z-50">
            Home
          </span>
        </div>

        {/* Projects */}
        <div className="relative group">
          <Link className={navClass} to={"/projects"}>
            <FolderGit className={iconSize} />
          </Link>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 hidden group-hover:block whitespace-nowrap z-50">
            Projects
          </span>
        </div>

        <div className="h-8 md:h-10 w-[1px] bg-border mx-2" />

        {/* GitHub */}
        <div className="relative group">
          <Link
            className={navClass}
            to={"https://github.com/at-imene"}
            target="_blank"
          >
            <Github className={iconSize} />
          </Link>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 hidden group-hover:block whitespace-nowrap z-50">
            GitHub
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <Link
            className={navClass}
            to={"https://www.linkedin.com/in/imene-atchi-629929214/"}
            target="_blank"
          >
            <Linkedin className={iconSize} />
          </Link>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 hidden group-hover:block whitespace-nowrap z-50">
            LinkedIn
          </span>
        </div>

        {/* WhatsApp */}
        <div className="relative group">
          <div className={navClass} onClick={handleWhatsAppClick}>
            <MessageCircle className={iconSize} />
          </div>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 hidden group-hover:block whitespace-nowrap z-50">
            WhatsApp
          </span>
        </div>

        <div className="h-8 md:h-10 w-[1px] bg-border mx-2" />

        {/* Language */}
        <div className="relative group">
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <Globe className={iconSize} />
          </div>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 hidden group-hover:block whitespace-nowrap z-50">
            Language
          </span>

          {/* Dropdown for languages */}
          {open && (
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-white dark:bg-primary text-black dark:text-secondary rounded-lg shadow-lg py-2 px-3 space-y-2 z-50 min-w-[120px]">
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
        </div>

        {/* Theme */}
        <div className="relative group">
          <div className={navClass} onClick={() => toggleTheme(theme)}>
            {theme === "dark" ? (
              <Sun className={iconSize} />
            ) : (
              <Moon className={iconSize} />
            )}
          </div>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 hidden group-hover:block whitespace-nowrap z-50">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>

      </div>
    </div>
  );
}

export default BottomNavbar;
