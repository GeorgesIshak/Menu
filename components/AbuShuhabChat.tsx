"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

/* --------------------------- helper: play Zaza voice --------------------------- */
function playZazaVoice() {
  const audio = new Audio("/zaza.mp3");
  audio.play().catch((err) =>
    console.warn("Audio playback blocked until user interacts:", err)
  );
}

/* ------------------------------- main component ------------------------------- */
export default function ZazaChat() {
  const [open, setOpen] = useState(false);

  // Play voice when the chat opens
  useEffect(() => {
    if (open) playZazaVoice();
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFB88A] text-black shadow-lg transition hover:scale-110"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-white/10 bg-[#141010]/95 text-[#FDF3EB] shadow-2xl">
          <div className="p-4 border-b border-white/10 text-sm font-bold text-[#FFB88A]">
            🤖 زازا – المساعد الذكي
          </div>

          <div className="p-4 space-y-4 text-sm leading-relaxed">
            <p>
              مرحبًا 👋  
              أنا زازا، المساعد الذكي.  
              كيف يمكنني مساعدتك اليوم؟
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "القائمة",
                "العروض",
                "أوقات العمل",
                "موقعنا",
                "تواصل معنا",
              ].map((label) => (
                <button
                  key={label}
                  className="px-3 py-1.5 rounded-full bg-[#FFB88A]/10 border border-[#FFB88A]/30 text-[#FFB88A] text-xs"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
