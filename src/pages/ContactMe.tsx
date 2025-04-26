import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
// import { toast } from "sonner";
import { toast } from "sonner";

function ContactMe() {
  const { t, i18n } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const defaultMessage = "Hello, I would like to get in touch with you!";

  const currentLang = i18n.language; // "en" or "fr"
  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/213553966675?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_sozntsf",
          "template_7hoqdiz",
          formRef.current,
          "e1psV6JjlidA0-rkv"
        )
        .then(() => {
          toast(currentLang === "fr" ? "Envoyé" : "Sent", {
            description:
              currentLang === "fr"
                ? "Votre message a été envoyé avec succès !"
                : "Your message has been sent successfully!",
          });
          formRef.current?.reset();
        })
        .catch((error) => {
          toast(currentLang === "fr" ? "Erreur" : "Error", {
            description: (
              <div className="flex flex-col gap-2">
                <span>
                  {currentLang === "fr"
                    ? "Erreur lors de l'envoi du message. Vous pouvez me contacter directement sur WhatsApp."
                    : "Failed to send the message. You can contact me directly on WhatsApp."}
                </span>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-4 py-2 text-sm font-medium transition"
                >
                  {currentLang === "fr"
                    ? "Contacter sur WhatsApp"
                    : "Contact on WhatsApp"}
                </button>
              </div>
            ),
            duration: 6000,
          });
        });
    }
  };

  return (
    <div className="mt-10 px-4 text-center">
      <h4 className="bg-primary text-primary-foreground rounded-md text-center py-2 px-4 w-fit m-auto text-sm uppercase tracking-wide">
        {t("contact")}
      </h4>

      <h2 className="text-3xl md:text-5xl font-bold my-4">
        {t("get-in-touch")}
      </h2>
      <p className="text-muted-foreground lg:text-lg font-base max-w-xl text-center m-auto mb-4">
        {t("want-to-chat")}{" "}
        <span
          className="cursor-pointer text-sky-600"
          onClick={handleWhatsAppClick}
        >
          {t("direct-question")}
        </span>{" "}
        {t("i-will-ignore-soliciting")}
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-8 space-y-5 text-left"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">
              {t("name-or-company")}
            </label>
            <Input
              name="name"
              type="text"
              placeholder={t("your-name")}
              required
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">
              {t("email")}
            </label>
            <Input
              name="user_email"
              type="email"
              placeholder={t("your-email")}
              required
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">
            {t("subject")}
          </label>
          <Input
            name="subject"
            type="text"
            placeholder={t("subject")}
            required
            className="focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">
            {t("message")}
          </label>
          <Textarea
            name="message"
            placeholder={t("your-message")}
            rows={8}
            required
            className="focus-visible:ring-2 focus-visible:ring-primary h-30 max-50"
          />
        </div>

        <Button type="submit" className="w-full mt-4 cursor-pointer">
          {t("send-message")}
        </Button>
      </form>
    </div>
  );
}

export default ContactMe;
