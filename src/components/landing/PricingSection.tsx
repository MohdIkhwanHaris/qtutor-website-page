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
        actionLink: "https://docs.google.com/forms/d/e/1FAIpQLScVQhnvXGEe6uv1e_yXOkq6hWhrKn2qVhB5yMCwXVL1bXPGuA/viewform",
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
        popular: false,
        actionLink: "https://docs.google.com/forms/d/e/1FAIpQLScr8CIVoNFoQK1rTU55zPmSsNc6pT-24mkzdv00d77jtuElGA/viewform",
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
        actionLink: "https://wa.me/601137087872?text=" + encodeURIComponent("Hai QTutor! Saya berminat untuk menyertai Seminar Rescue Matematik (RM39 Early Bird). Boleh saya dapatkan maklumat lanjut?"),
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
        actionLink: "https://docs.google.com/forms/d/e/1FAIpQLScVQhnvXGEe6uv1e_yXOkq6hWhrKn2qVhB5yMCwXVL1bXPGuA/viewform",
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
        popular: false,
        actionLink: "https://docs.google.com/forms/d/e/1FAIpQLScr8CIVoNFoQK1rTU55zPmSsNc6pT-24mkzdv00d77jtuElGA/viewform",
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
        actionLink: "https://wa.me/601137087872?text=" + encodeURIComponent("Hai QTutor! Saya berminat untuk menyertai Seminar Rescue Matematik (RM39 Early Bird). Boleh saya dapatkan maklumat lanjut?"),
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
  
  const [isPersonalExpanded, setIsPersonalExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPersonalExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleActionClick = (link: string) => {
    window.open(link, "_blank");
  };

  // THE MAGIC: Apple-style fluid layout transition (0 bounce, perfectly damped)
  const smoothAppleTransition = { 
    type: "spring", 
    bounce: 0, 
    duration: 0.5 
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/50 relative overflow-hidden">
      
      {/* Invisible overlay */}
      <AnimatePresence>
        {isPersonalExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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

        {/* The Cards Layout */}
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mb-20 items-stretch justify-center relative gap-4 lg:gap-6">
          {currentText.plans.map((plan) => {
            const isPersonalCard = plan.id === "personal";
            const isExpanded = isPersonalCard && isPersonalExpanded;

            // Fluid Flexbox sizing ensures perfectly smooth expanding/collapsing
            let flexWidth = "";
            if (!isPersonalExpanded) {
              flexWidth = plan.id === "group" ? "lg:flex-[1.1]" : plan.id === "personal" ? "lg:flex-[1.3]" : "lg:flex-[1.1]";
            } else {
              flexWidth = isPersonalCard ? "lg:flex-[3]" : "lg:flex-[0.6]";
            }

            return (
              <motion.div
                layout
                transition={smoothAppleTransition}
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col bg-white w-full ${flexWidth} ${
                  isExpanded 
                    ? "z-40 shadow-2xl lg:scale-[1.02] border-2 border-primary ring-4 ring-primary/10" 
                    : isPersonalExpanded 
                      ? "z-10 opacity-60 lg:scale-[0.98] border border-slate-200" 
                      : plan.popular 
                        ? "border-2 border-primary shadow-lg lg:-translate-y-2 z-20" 
                        : "border border-slate-200 shadow-sm z-10"
                }`}
              >
                {/* Popular Badge */}
                <AnimatePresence>
                  {plan.popular && !isPersonalExpanded && (
                    <div className="absolute -top-3 inset-x-0 flex justify-center pointer-events-none z-30">
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-1 bg-[#800000] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap pointer-events-auto"
                      >
                        <Star className="w-3 h-3 fill-current" /> {currentText.popularTag}
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>

                {/* Close 'X' Button */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setIsPersonalExpanded(false)}
                      className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-50"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  )}
                </AnimatePresence>

                <motion.div layout transition={smoothAppleTransition} className="flex flex-col lg:flex-row gap-0">
                  
                  {/* LEFT COLUMN */}
                  <motion.div layout transition={smoothAppleTransition} className="flex flex-col flex-1 min-w-0">
                    <motion.div layout transition={smoothAppleTransition} className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <motion.h3 layout className="text-lg font-bold text-slate-900 leading-tight">
                          {plan.name}
                        </motion.h3>
                        <motion.span layout className="text-sm font-semibold text-primary mt-1 block">
                          {plan.badge}
                        </motion.span>
                      </div>
                      <motion.div layout className={`p-2 bg-slate-50 rounded-lg shrink-0 ${isExpanded ? "mr-6" : ""}`}>
                        {plan.icon}
                      </motion.div>
                    </motion.div>

                    <motion.div layout transition={smoothAppleTransition} className="flex flex-col flex-1">
                      <div className="mb-6 pb-6 border-b border-slate-100 flex flex-col">
                        {plan.prefix && (
                          <span className="text-sm font-semibold text-slate-500 mb-1">{plan.prefix}</span>
                        )}
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-slate-900 whitespace-nowrap">{plan.price}</span>
                          <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                        </div>
                        
                        {plan.originalPrice && (
                          <div className="mt-1 text-sm text-slate-400 font-medium">
                            <span className="line-through">{plan.originalPrice}</span> Normal Price
                          </div>
                        )}
                      </div>

                      <ul className="space-y-4 mb-6">
                        {plan.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="leading-tight">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>

                  {/* RIGHT COLUMN (The Sliding Folder Table) */}
                  <AnimatePresence>
                    {isExpanded && plan.extraDetails && (
                      <motion.div
                        layout
                        initial={{ opacity: 0, flex: 0, padding: 0 }}
                        animate={{ opacity: 1, flex: 1, padding: 24 }}
                        exit={{ opacity: 0, flex: 0, padding: 0 }}
                        transition={smoothAppleTransition}
                        className="flex flex-col bg-slate-50 rounded-xl border border-slate-200 justify-start overflow-hidden lg:ml-8"
                      >
                        {/* Minimum width prevents the text from awkwardly squishing while it slides open/shut */}
                        <div className="min-w-[280px]">
                          <h4 className="font-extrabold text-slate-900 mb-5 text-lg">Package Pricing</h4>
                          <div className="flex flex-col gap-3">
                            {plan.extraDetails.map((detail, idx) => (
                              <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{detail.label}</span>
                                <span className="text-base font-extrabold text-primary">{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>

                {/* BOTTOM BUTTONS */}
                <motion.div layout transition={smoothAppleTransition} className="mt-auto pt-2 flex flex-col gap-3">
                  {isPersonalCard && !isExpanded && (
                    <button 
                      onClick={() => setIsPersonalExpanded(true)} 
                      className="text-sm text-primary font-bold flex items-center justify-center gap-1 hover:underline w-full py-2 bg-primary/5 hover:bg-primary/10 rounded-lg mb-1 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      {currentText.detailsBtn}
                    </button>
                  )}
                  
                  <Button 
                    variant={plan.popular && !isExpanded ? "default" : "outline"}
                    className={`w-full font-bold h-12 shadow-sm ${(!isExpanded && plan.popular) || isExpanded ? "bg-[#800000] hover:bg-[#600000] text-white border-0" : "border-slate-300 text-slate-700 hover:bg-slate-50"}`} 
                    onClick={() => handleActionClick(plan.actionLink)}
                  >
                    {currentText.btnText}
                  </Button>
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