import { MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  return (
    <div className="fixed right-5 bottom-4 z-50 flex flex-col items-end gap-1">
          <Link
                  href="/book_a_demo"
                  className="text-[17px] font-medium text-white bg-[#004B2D] shadow-lg shadow-white/20 hover:text-white rounded-full px-5 py-2.5 transition"
                >
                  Book a Consultation
                </Link>

      
    </div>
  );
}
