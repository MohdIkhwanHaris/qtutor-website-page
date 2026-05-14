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
    viewPlanBtn: "View Plan",
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
        extraDetails: [
          { label: "Frequency", value: "2 sessions/week (1 hr each)" },
          { label: "Activities", value: "Weekly Quizizz leaderboards" },
          { label: "Support", value: "Active peer community" }
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
        extraDetails: [
          { label: "Focus", value: "Question traps & time management" },
          { label: "Materials", value: "Full recordings & modules included" },
          { label: "Target", value: "Intensive crash course for Trials" }
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
    viewPlanBtn: "Lihat Pelan Ini",
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
        extraDetails: [
          { label: "Kekerapan", value: "2 sesi/minggu (1 jam setiap sesi)" },
          { label: "Aktiviti", value: "Papan pendahulu Quizizz mingguan" },
          { label: "Sokongan", value: "Komuniti rakan sebaya yang aktif" }
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
        extraDetails: [
          { label: "Fokus", value: "Perangkap soalan & pengurusan masa" },
          { label: "Bahan", "value": "Rakaman & modul penuh disertakan" },
          { label: "Target", value: "Kelas intensif pantas untuk Trial" }
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
  
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  // Close details when hitting ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedPlan(null);
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
        {expandedPlan && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-slate-900/10 backdrop-blur-[2px]"
            onClick={() => setExpandedPlan(null)}
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
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mb-20 items-stretch justify-center relative">
          {currentText.plans.map((plan) => {
            const isExpanded = expandedPlan === plan.id;
            const isAnotherExpanded = expandedPlan !== null && !isExpanded;

            return (
              <motion.div
                layout
                key={plan.id}
                onClick={() => {
                  if (isAnotherExpanded) setExpandedPlan(plan.id);
                }}
                className={`relative rounded-2xl p-6 flex flex-col bg-white overflow-hidden transition-all duration-500 w-full lg:w-1/3
                  ${
                    isExpanded 
                      ? "z-40 shadow-2xl lg:scale-105 lg:mx-4 border-2 border-primary ring-4 ring-primary/10" 
                      : isAnotherExpanded 
                        ? "z-10 opacity-60 lg:scale-95 lg:-mx-8 cursor-pointer hover:opacity-100 border border-slate-200" 
                        : plan.popular 
                          ? "border-2 border-primary shadow-lg lg:-translate-y-2 z-20 lg:mx-2" 
                          : "border border-slate-200 shadow-sm z-10 lg:mx-2"
                  }
                `}
              >
                {/* Popular Badge */}
                <AnimatePresence>
                  {plan.popular && !isAnotherExpanded && (
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
                      onClick={(e) => { e.stopPropagation(); setExpandedPlan(null); }}
                      className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>

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

                {/* Main Content (Fades out when tucked away) */}
                <AnimatePresence mode="wait">
                  {!isAnotherExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col flex-1"
                    >
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

                      {/* EXTRA DETAILS SECTION (Sleek Table) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="bg-slate-50 rounded-xl border border-slate-200 mb-6 overflow-hidden"
                          >
                            <div className="p-4 flex flex-col gap-3">
                              {plan.extraDetails.map((detail, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{detail.label}</span>
                                  <span className="text-sm font-semibold text-slate-900 sm:text-right">{detail.value}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons */}
                <motion.div layout className="mt-auto pt-4 flex flex-col gap-3">
                  {isAnotherExpanded ? (
                    <Button 
                      variant="ghost" 
                      className="w-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 whitespace-nowrap h-12" 
                      onClick={(e) => { e.stopPropagation(); setExpandedPlan(plan.id); }}
                    >
                      {currentText.viewPlanBtn}
                    </Button>
                  ) : isExpanded ? (
                    <Button 
                      className="w-full bg-[#800000] hover:bg-[#600000] text-white font-bold h-12 shadow-md" 
                      onClick={(e) => { e.stopPropagation(); handleWhatsAppClick(plan.whatsappMessage); }}
                    >
                      {currentText.btnText}
                    </Button>
                  ) : (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setExpandedPlan(plan.id); }} 
                        className="text-sm text-primary font-bold flex items-center justify-center gap-1 hover:underline w-full py-2 bg-primary/5 rounded-lg mb-1"
                      >
                        <Info className="w-4 h-4" />
                        {currentText.detailsBtn}
                      </button>
                      <Button 
                        variant={plan.popular ? "default" : "outline"} 
                        className={`w-full font-bold h-12 ${plan.popular ? "bg-[#800000] hover:bg-[#600000] text-white" : "border-slate-300 text-slate-700"}`} 
                        onClick={(e) => { e.stopPropagation(); handleWhatsAppClick(plan.whatsappMessage); }}
                      >
                        {currentText.btnText}
                      </Button>
                    </>
                  )}
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