import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, CalendarDays, Clock, Users, User, Target, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; 

const content = {
  en: {
    badge: "Pricing",
    title: "Simple, Affordable Plans",
    subtitle: "Choose the perfect learning environment to excel in your exams.",
    popularTag: "Most Popular",
    btnText: "Get Started",
    detailsBtn: "See Details",
    hideBtn: "Close Details",
    timetableTitle: "Class Timetable",
    timetableSubtitle: "Weekly schedule for QTutor Group Classes",
    plans: [
      {
        id: "group",
        name: "QTutor Math Class",
        badge: "Group Class",
        icon: <Users className="w-5 h-5 text-primary" />,
        prefix: "",
        price: "RM45",
        originalPrice: null,
        period: "/month",
        features: [
          "Math for Form 1 – Form 5",
          "8 hours per month",
          "Session recordings available",
          "WhatsApp Group support",
        ],
        popular: true,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Matematik Berkumpulan (RM45/bulan). Boleh saya dapatkan maklumat lanjut?",
      },
      {
        id: "personal",
        name: "Personal Class",
        badge: "1-on-1 Focus",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        prefix: "From ",
        price: "RM140",
        originalPrice: null,
        period: "/subject",
        features: [
          "Math, AddMath, or English",
          "1-on-1 personalized attention",
          "Flexible packaging (4, 8, 12 hrs)",
          "Detailed progress reports",
        ],
        extraDetails: [
          { label: "4 Hours / month", value: "RM140 / subject" },
          { label: "8 Hours / month", value: "RM260 / subject" },
          { label: "12 Hours / month", value: "RM380 / subject" }
        ],
        detailsText: "Our Personal Class is entirely customized to fit your child's unique learning pace. The tutor will focus specifically on your child's weak points with tailored notes, intensive exercises, and detailed progress reports.",
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Personal. Boleh saya dapatkan senarai harga penuh (Pakej 4, 8, dan 12 jam)?",
      },
      {
        id: "seminar",
        name: "Seminar Rescue Math",
        badge: "Exam Prep",
        icon: <Target className="w-5 h-5 text-muted-foreground" />,
        prefix: "",
        price: "RM39",
        originalPrice: "RM59",
        period: " (Early Bird)",
        features: [
          "Exam answering techniques",
          "Trial exam prep questions",
          "Access to full class recordings",
          "Interactive Quizizz sessions",
        ],
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk menyertai Seminar Rescue Matematik (RM39 Early Bird). Boleh saya dapatkan maklumat lanjut?",
      },
    ],
    timetable: [
      { form: "Form 1", days: "Thursday & Friday", time: "8:30 – 9:30 PM" },
      { form: "Form 2", days: "Monday & Tuesday", time: "8:30 – 9:30 PM" },
      { form: "Form 3", days: "Thursday & Friday", time: "8:30 – 9:30 PM" },
      { form: "Form 4", days: "Tuesday & Thursday", time: "8:30 – 9:30 PM" },
      { form: "Form 5", days: "Tuesday & Thursday", time: "9:40 – 10:40 PM" },
    ]
  },
  ms: {
    badge: "Maklumat Pakej",
    title: "Pelan Mudah & Berpatutan",
    subtitle: "Pilih persekitaran pembelajaran yang sempurna untuk cemerlang dalam peperiksaan anda.",
    popularTag: "Paling Popular",
    btnText: "Mula Sekarang",
    detailsBtn: "Lihat Butiran",
    hideBtn: "Tutup Butiran",
    timetableTitle: "Jadual Kelas",
    timetableSubtitle: "Jadual mingguan untuk Kelas Berkumpulan QTutor",
    plans: [
      {
        id: "group",
        name: "Kelas Math QTutor",
        badge: "Kelas Berkumpulan",
        icon: <Users className="w-5 h-5 text-primary" />,
        prefix: "",
        price: "RM45",
        originalPrice: null,
        period: "/bulan",
        features: [
          "Matematik Tingkatan 1 – 5",
          "8 jam sebulan",
          "Rakaman sesi disediakan",
          "Sokongan Group WhatsApp",
        ],
        popular: true,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Matematik Berkumpulan (RM45/bulan). Boleh saya dapatkan maklumat lanjut?",
      },
      {
        id: "personal",
        name: "Kelas Personal",
        badge: "Fokus 1-on-1",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        prefix: "Bermula ",
        price: "RM140",
        originalPrice: null,
        period: "/subjek",
        features: [
          "Matematik, AddMath, atau English",
          "Perhatian peribadi 1-on-1",
          "Pakej fleksibel (4, 8, 12 jam)",
          "Laporan kemajuan terperinci",
        ],
        extraDetails: [
          { label: "Pakej 4 Jam", value: "RM140 / subjek" },
          { label: "Pakej 8 Jam", value: "RM260 / subjek" },
          { label: "Pakej 12 Jam", value: "RM380 / subjek" }
        ],
        detailsText: "Kelas Personal kami direka khas untuk memenuhi rentak pembelajaran unik setiap pelajar. Tutor akan memberi tumpuan maksimum kepada kelemahan pelajar melalui nota khusus, latihan intensif, dan laporan kemajuan peribadi yang terperinci.",
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Personal. Boleh saya dapatkan senarai harga penuh (Pakej 4, 8, dan 12 jam)?",
      },
      {
        id: "seminar",
        name: "Seminar Rescue Math",
        badge: "Persediaan Peperiksaan",
        icon: <Target className="w-5 h-5 text-muted-foreground" />,
        prefix: "",
        price: "RM39",
        originalPrice: "RM59",
        period: " (Early Bird)",
        features: [
          "Teknik Menjawab Peperiksaan",
          "Soalan Persediaan Trial",
          "Akses Rakaman Kelas",
          "Kuiz Interaktif Quizizz",
        ],
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk menyertai Seminar Rescue Matematik (RM39 Early Bird). Boleh saya dapatkan maklumat lanjut?",
      },
    ],
    timetable: [
      { form: "Tingkatan 1", days: "Khamis & Jumaat", time: "8:30 – 9:30 PM" },
      { form: "Tingkatan 2", days: "Isnin & Selasa", time: "8:30 – 9:30 PM" },
      { form: "Tingkatan 3", days: "Khamis & Jumaat", time: "8:30 – 9:30 PM" },
      { form: "Tingkatan 4", days: "Selasa & Khamis", time: "8:30 – 9:30 PM" },
      { form: "Tingkatan 5", days: "Selasa & Khamis", time: "9:40 – 10:40 PM" },
    ]
  }
};

const PricingSection = () => {
  const { language } = useLanguage(); 
  const currentText = content[language]; 
  
  // State specifically for expanding the Personal Class
  const [isPersonalExpanded, setIsPersonalExpanded] = useState(false);

  // Close details when hitting ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPersonalExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "601137087872"; 
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/50 relative overflow-hidden">
      
      {/* Invisible overlay to close details when clicking outside */}
      <AnimatePresence>
        {isPersonalExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-slate-900/10 backdrop-blur-[2px]"
            onClick={() => setIsPersonalExpanded(false)}
          />
        )}
      </AnimatePresence>

      <div className="container px-4 md:px-6 relative z-30">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            {currentText.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-slate-900">
            {currentText.title}
          </h2>
          <p className="text-slate-600 mt-3 max-w-md mx-auto">
            {currentText.subtitle}
          </p>
        </motion.div>

        {/* The Stacking Cards Layout */}
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mb-20 items-stretch justify-center relative gap-4 lg:gap-6">
          {currentText.plans.map((plan) => {
            const isPersonalCard = plan.id === "personal";
            const isExpanded = isPersonalCard && isPersonalExpanded;

            // Mathematical calculation for the side-to-side widths
            let desktopWidth = "";
            if (!isPersonalExpanded) {
              // Default state: Group is slightly smaller, Personal & Seminar are slightly wider
              desktopWidth = plan.id === "group" ? "lg:w-[28%]" : "lg:w-[36%]";
            } else {
              // Expanded state: Personal dominates, the others shrink to the sides
              desktopWidth = isPersonalCard ? "lg:w-[56%]" : "lg:w-[22%]";
            }

            return (
              <motion.div
                layout
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col bg-white overflow-hidden transition-all duration-500 w-full ${desktopWidth} ${
                  isExpanded 
                    ? "z-40 shadow-2xl lg:scale-105 border-2 border-primary ring-4 ring-primary/10" 
                    : isPersonalExpanded 
                      ? "z-10 opacity-60 lg:scale-95 border border-slate-200" 
                      : plan.popular 
                        ? "border-2 border-primary shadow-lg lg:-translate-y-2 z-20" 
                        : "border border-slate-200 shadow-sm z-10"
                }`}
              >
                {/* Popular Badge */}
                <AnimatePresence>
                  {plan.popular && !isPersonalExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap"
                    >
                      <Star className="w-3 h-3 fill-current" /> {currentText.popularTag}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Close 'X' Button when expanded */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsPersonalExpanded(false)}
                      className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors z-50"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* INNER HORIZONTAL LAYOUT (Splits side-by-side when expanded) */}
                <motion.div layout className="flex flex-col lg:flex-row h-full gap-0 lg:gap-6">
                  
                  {/* Left Side (Main Content) */}
                  <motion.div layout className="flex flex-col flex-1 min-w-0">
                    <motion.div layout className="mb-4 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 pr-6">
                      <div>
                        <motion.h3 layout className="text-lg font-bold text-slate-900 leading-tight">
                          {plan.name}
                        </motion.h3>
                        <motion.span layout className="text-sm font-medium text-primary mt-1 block">
                          {plan.badge}
                        </motion.span>
                      </div>
                      <motion.div layout className="p-2 bg-slate-50 rounded-lg shrink-0">
                        {plan.icon}
                      </motion.div>
                    </motion.div>

                    <motion.div layout className="flex flex-col flex-1">
                      {/* Price Section */}
                      <div className="mb-6 pb-6 border-b border-slate-100 flex flex-col">
                        {plan.prefix && (
                          <span className="text-sm font-semibold text-slate-500 mb-1">{plan.prefix}</span>
                        )}
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-slate-900 whitespace-nowrap">{plan.price}</span>
                          <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                        </div>
                        
                        {/* Seminar Normal Price Strikethrough */}
                        {plan.originalPrice && (
                          <div className="mt-1 text-sm text-slate-400 font-medium">
                            <span className="line-through">{plan.originalPrice}</span> Normal Price
                          </div>
                        )}
                      </div>

                      {/* Standard Features */}
                      <ul className="space-y-4 mb-6 flex-1">
                        {plan.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="leading-tight">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Buttons Layer */}
                    <motion.div layout className="mt-auto pt-4 flex flex-col gap-3">
                      {isPersonalCard ? (
                        <>
                          {!isExpanded && (
                            <button 
                              onClick={() => setIsPersonalExpanded(true)} 
                              className="text-sm text-primary font-bold flex items-center justify-center gap-1 hover:underline w-full py-2 bg-primary/5 rounded-lg mb-1"
                            >
                              <Info className="w-4 h-4" />
                              {currentText.detailsBtn}
                            </button>
                          )}
                          <Button 
                            variant="outline"
                            className={`w-full font-bold h-12 ${isExpanded ? "border-slate-300 text-slate-700" : "bg-[#800000] hover:bg-[#600000] text-white"}`} 
                            onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                          >
                            {currentText.btnText}
                          </Button>
                        </>
                      ) : (
                        <Button 
                          variant={plan.popular ? "default" : "outline"} 
                          className={`w-full font-bold h-12 ${plan.popular ? "bg-[#800000] hover:bg-[#600000] text-white" : "border-slate-300 text-slate-700"}`} 
                          onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                        >
                          {currentText.btnText}
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Right Side (Only renders inside the expanded Personal Class) */}
                  <AnimatePresence>
                    {isExpanded && plan.extraDetails && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, display: "none" }}
                        animate={{ opacity: 1, x: 0, display: "flex" }}
                        exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                        className="lg:flex-1 flex-col mt-8 lg:mt-0 bg-slate-50 p-6 rounded-xl border border-slate-200 justify-center"
                      >
                        <h4 className="font-extrabold text-slate-900 mb-5 text-lg">Package Pricing</h4>
                        <div className="flex flex-col gap-3">
                          {plan.extraDetails.map((detail, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-slate-200/80 pb-3 last:border-0 last:pb-0">
                              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{detail.label}</span>
                              <span className="text-base font-extrabold text-primary">{detail.value}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[14px] text-slate-600 mt-6 leading-relaxed font-medium">
                          {/* @ts-ignore - We know detailsText exists for Personal Class */}
                          {plan.detailsText}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Timetable Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold flex items-center justify-center gap-2 text-slate-900">
              <CalendarDays className="w-7 h-7 text-primary" />
              {currentText.timetableTitle}
            </h3>
            <p className="text-slate-600 mt-2 text-sm">
              {currentText.timetableSubtitle}
            </p>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden relative z-10">
            <div className="divide-y divide-slate-100">
              {currentText.timetable.map((session, index) => (
                <div 
                  key={index} 
                  className="flex flex-col sm:flex-row items-center justify-between p-4 sm:px-8 sm:py-5 hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto mb-3 sm:mb-0">
                    <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg min-w-[100px] text-center border border-primary/20">
                      {session.form}
                    </div>
                    <div className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {session.days}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-600 font-semibold w-full sm:w-auto justify-start sm:justify-end bg-slate-100/50 px-4 py-2 rounded-lg">
                    <Clock className="w-4 h-4 text-primary" />
                    {session.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;