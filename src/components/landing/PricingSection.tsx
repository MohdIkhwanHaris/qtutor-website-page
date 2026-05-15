import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, CalendarDays, Clock, Users, User, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; 

const content = {
  en: {
    badge: "Pricing",
    title: "Simple, Affordable Plans",
    subtitle: "Choose the perfect learning environment to excel in your exams.",
    popularTag: "Most Popular",
    btnText: "Get Started",
    timetableTitle: "Class Timetable",
    timetableSubtitle: "Weekly schedule for QTutor Group Classes",
    seminar: {
      name: "Seminar Rescue Math",
      badge: "Exam Prep",
      icon: <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />,
      price: "RM39",
      originalPrice: "RM59",
      period: " (Early Bird)",
      features: [
        "Exam answering techniques",
        "Trial exam prep questions",
        "Access to full class recordings",
        "Interactive Quizizz sessions",
      ],
      actionLink: "https://wa.me/601137087872?text=" + encodeURIComponent("Hai QTutor! Saya berminat untuk menyertai Seminar Rescue Matematik (RM39 Early Bird). Boleh saya dapatkan maklumat lanjut?"),
    },
    plans: [
      {
        id: "group",
        name: "QTutor Math Class",
        badge: "Group Class",
        icon: <Users className="w-5 h-5 text-primary" />,
        prefix: "",
        price: "RM45",
        period: "/month",
        features: [
          "Math for Form 1 – Form 5",
          "8 hours per month",
          "Session recordings available",
          "WhatsApp Group support",
          "Interactive Quizizz sessions",
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
        period: "/subject",
        features: [
          "Math, AddMath, or English",
          "1-on-1 personalized focus",
          "Flexible packaging (4, 8, 12 hrs)",
          "Custom notes & exercises",
        ],
        extraDetails: [
          { label: "4 Hours / month", value: "RM140 / subject" },
          { label: "8 Hours / month", value: "RM260 / subject" },
          { label: "12 Hours / month", value: "RM380 / subject" }
        ],
        popular: false,
        actionLink: "https://docs.google.com/forms/d/e/1FAIpQLScr8CIVoNFoQK1rTU55zPmSsNc6pT-24mkzdv00d77jtuElGA/viewform",
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
    timetableTitle: "Jadual Kelas",
    timetableSubtitle: "Jadual mingguan untuk Kelas Berkumpulan QTutor",
    seminar: {
      name: "Seminar Rescue Math",
      badge: "Persediaan Peperiksaan",
      icon: <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />,
      price: "RM39",
      originalPrice: "RM59",
      period: " (Early Bird)",
      features: [
        "Teknik Menjawab Peperiksaan",
        "Soalan Persediaan Trial",
        "Akses Rakaman Kelas",
        "Kuiz Interaktif Quizizz",
      ],
      actionLink: "https://wa.me/601137087872?text=" + encodeURIComponent("Hai QTutor! Saya berminat untuk menyertai Seminar Rescue Matematik (RM39 Early Bird). Boleh saya dapatkan maklumat lanjut?"),
    },
    plans: [
      {
        id: "group",
        name: "Kelas Math QTutor",
        badge: "Kelas Berkumpulan",
        icon: <Users className="w-5 h-5 text-primary" />,
        prefix: "",
        price: "RM45",
        period: "/bulan",
        features: [
          "Matematik Tingkatan 1 – 5",
          "8 jam sebulan",
          "Rakaman sesi disediakan",
          "Sokongan Group WhatsApp",
          "Kuiz Interaktif Quizizz",
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
        period: "/subjek",
        features: [
          "Matematik, AddMath, atau English",
          "Fokus peribadi 1-on-1",
          "Pakej fleksibel (4, 8, 12 jam)",
          "Nota dan latihan khusus",
        ],
        extraDetails: [
          { label: "Pakej 4 Jam", value: "RM140 / subjek" },
          { label: "Pakej 8 Jam", value: "RM260 / subjek" },
          { label: "Pakej 12 Jam", value: "RM380 / subjek" }
        ],
        popular: false,
        actionLink: "https://docs.google.com/forms/d/e/1FAIpQLScr8CIVoNFoQK1rTU55zPmSsNc6pT-24mkzdv00d77jtuElGA/viewform",
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

  const strictLayoutTransition = { 
    type: "tween", 
    ease: "easeInOut", 
    duration: 0.35 
  } as const;

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/50 relative overflow-hidden">
      
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
        
        {/* --- SEMINAR HIGHLIGHT BANNER --- */}
        <motion.div 
          className="max-w-6xl mx-auto mb-24 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Text Side */}
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                  {currentText.seminar.name}
                </h3>
                <span className="text-sm font-bold text-primary mt-1 block uppercase tracking-wide">
                  {currentText.seminar.badge}
                </span>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 shrink-0">
                {currentText.seminar.icon}
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-slate-900">{currentText.seminar.price}</span>
                <span className="text-slate-500 font-bold">{currentText.seminar.period}</span>
              </div>
              <div className="mt-2 text-slate-400 font-semibold">
                <span className="line-through mr-1">{currentText.seminar.originalPrice}</span> Normal Price
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {currentText.seminar.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full font-bold h-14 text-base bg-[#800000] hover:bg-[#600000] text-white shadow-md transition-transform hover:-translate-y-0.5" 
              onClick={() => handleActionClick(currentText.seminar.actionLink)}
            >
              {currentText.btnText}
            </Button>
          </div>

          {/* Poster Side */}
          <div className="lg:w-1/2 bg-[#2d0a11] flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-slate-200">
            <img 
              src={`${import.meta.env.BASE_URL}SeminarPoster.jpeg`}
              alt="Seminar Rescue Math" 
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* --- PRICING PLANS HEADER --- */}
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

        {/* --- STATIC PRICING CARDS --- */}
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mb-20 items-stretch justify-center gap-6">
          
          {/* GROUP CLASS (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl p-6 md:p-8 flex flex-col bg-white w-full lg:w-[35%] border-2 border-primary shadow-xl lg:-translate-y-2 z-20"
          >
            <div className="absolute -top-3.5 inset-x-0 flex justify-center pointer-events-none z-30">
              <div className="inline-flex items-center gap-1.5 bg-[#800000] text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide">
                <Star className="w-3.5 h-3.5 fill-current" /> {currentText.popularTag}
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {currentText.plans[0].name}
                </h3>
                <span className="text-sm font-semibold text-primary mt-1 block">
                  {currentText.plans[0].badge}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl shrink-0 border border-slate-100">
                {currentText.plans[0].icon}
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="mb-8 pb-8 border-b border-slate-100 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900 whitespace-nowrap">{currentText.plans[0].price}</span>
                  <span className="text-slate-500 font-semibold">{currentText.plans[0].period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {currentText.plans[0].features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Button 
                className="w-full font-bold h-14 text-base bg-[#800000] hover:bg-[#600000] text-white shadow-md transition-transform hover:-translate-y-0.5" 
                onClick={() => handleActionClick(currentText.plans[0].actionLink)}
              >
                {currentText.btnText}
              </Button>
            </div>
          </motion.div>

          {/* PERSONAL CLASS (Right Side - Static Wide Layout) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative rounded-3xl p-6 md:p-8 flex flex-col bg-white w-full lg:w-[65%] border border-slate-200 shadow-md z-10"
          >
            <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 h-full">
              
              <div className="flex flex-col flex-1 min-w-0">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {currentText.plans[1].name}
                    </h3>
                    <span className="text-sm font-semibold text-primary mt-1 block">
                      {currentText.plans[1].badge}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl shrink-0 border border-slate-100">
                    {currentText.plans[1].icon}
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="mb-8 pb-8 border-b border-slate-100 flex flex-col">
                    <span className="text-sm font-semibold text-slate-500 mb-1">{currentText.plans[1].prefix}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-slate-900 whitespace-nowrap">{currentText.plans[1].price}</span>
                      <span className="text-slate-500 font-semibold">{currentText.plans[1].period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {currentText.plans[1].features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-700 font-medium">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Personal Class Static Pricing Table */}
              <div className="w-full xl:w-[380px] shrink-0">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 md:p-6 h-full flex flex-col justify-center">
                  <h4 className="font-extrabold text-slate-900 mb-4 md:mb-6 text-lg">Package Pricing</h4>
                  <div className="flex flex-col gap-3 md:gap-4">
                    {currentText.plans[1].extraDetails?.map((detail, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 sm:px-6 sm:py-4 rounded-xl shadow-sm border border-slate-100 gap-1 sm:gap-4 transition-colors hover:border-primary/30">
                        {/* Price (Top on Mobile, Right on Desktop) */}
                        <span className="text-base sm:text-[15px] font-black text-primary whitespace-nowrap shrink-0 order-1 sm:order-2">{detail.value}</span>
                        {/* Label (Bottom on Mobile, Left on Desktop) */}
                        <span className="text-[11px] sm:text-xs font-black text-slate-500 uppercase tracking-wider leading-tight order-2 sm:order-1">{detail.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <Button 
                variant="outline"
                className="w-full font-bold h-14 text-base border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors" 
                onClick={() => handleActionClick(currentText.plans[1].actionLink)}
              >
                {currentText.btnText}
              </Button>
            </div>
          </motion.div>

        </div>

        {/* --- TIMETABLE SECTION --- */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold flex items-center justify-center gap-2 text-slate-900">
              <CalendarDays className="w-7 h-7 text-primary" />
              {currentText.timetableTitle}
            </h3>
            <p className="text-slate-600 mt-2 text-sm font-medium">
              {currentText.timetableSubtitle}
            </p>
          </div>

          <div className="bg-white border border-slate-200 shadow-md rounded-3xl overflow-hidden relative z-10">
            <div className="divide-y divide-slate-100">
              {currentText.timetable.map((session, index) => (
                <div 
                  key={index} 
                  className="flex flex-col sm:flex-row items-center justify-between p-5 sm:px-8 sm:py-6 hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto mb-3 sm:mb-0">
                    <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-xl min-w-[100px] text-center border border-primary/20">
                      {session.form}
                    </div>
                    <div className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {session.days}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-700 font-bold w-full sm:w-auto justify-start sm:justify-end bg-slate-100/50 px-4 py-2.5 rounded-xl border border-slate-100">
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