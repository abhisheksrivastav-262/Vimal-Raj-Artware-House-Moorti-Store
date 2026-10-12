import { MessageCircle } from "lucide-react";
import { BUSINESS } from "../config/business";
import { waLink } from "../utils/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(`Hello ${BUSINESS.name}, I want to enquire about your artware collection.`)}
      target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform p-3.5"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
