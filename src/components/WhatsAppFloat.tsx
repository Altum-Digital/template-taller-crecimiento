import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";

export function WhatsAppFloat() {
  const { contact, business } = siteConfig;
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hola ${business.name}, me gustaría cotizar un servicio.`)}`;
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp"
          className="relative group w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#2EE670] hover:to-[#149B8B] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="transition-transform duration-300 group-hover:rotate-[8deg]">
            <Icon name="whatsapp" className="w-8 h-8" />
          </span>
        </a>
      </div>
    </div>
  );
}
