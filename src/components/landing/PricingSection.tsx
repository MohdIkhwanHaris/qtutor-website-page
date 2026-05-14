import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, CalendarDays, Clock, Users, User, TrendingUp, X, Info } from "lucide-react";
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
        detailsText: "Our structured group class offers the perfect balance of affordability and quality. With live sessions twice a week, students benefit from step-by-step explanations, weekly progress monitoring via Quizizz, and a supportive community of peers to keep them motivated.",
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
        detailsText: "Our Personal Class is entirely customized to fit your child's unique learning pace. Whether you choose the 4, 8, or 12-hour monthly package, the tutor will focus specifically on your child's weak points. Students receive tailored notes, intensive exercises, and detailed progress reports to guarantee optimal grade improvement.",
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Personal. Boleh saya dapatkan senarai harga penuh (Pakej 4, 8, dan 12 jam)?",
      },
      {
        id: "seminar",
        name: "Seminar Rescue Math",
        badge: "Exam Prep",
        icon: <TrendingUp className="w-5 h-5 text-muted-foreground" />,
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
        detailsText: "This intensive seminar is your shortcut to being fully prepared for Trial Exams! We will expose tested answering techniques, common question traps, and time management strategies. Registration includes full access to the session recording and our interactive Quizizz modules.",
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
        detailsText: "Kelas kumpulan berstruktur kami menawarkan keseimbangan sempurna antara harga berpatutan dan kualiti. Dengan sesi secara langsung dua kali seminggu, pelajar mendapat manfaat daripada penerangan langkah demi langkah, pemantauan kemajuan mingguan melalui Quizizz, dan komuniti rakan sebaya yang menyokong.",
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
        detailsText: "Kelas Personal kami direka khas untuk memenuhi rentak pembelajaran unik setiap pelajar. Sama ada anda memilih pakej 4, 8, atau 12 jam sebulan, tutor akan memberi tumpuan maksimum kepada kelemahan pelajar. Pelajar akan menerima nota yang disesuaikan, latihan intensif, dan laporan kemajuan peribadi untuk menjamin peningkatan gred.",
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Personal. Boleh saya dapatkan senarai harga penuh (Pakej 4, 8, dan 12 jam)?",
      },
      {
        id: "seminar",
        name: "Seminar Rescue Math",
        badge: "Persediaan Peperiksaan",
        icon: <TrendingUp className="w-5 h-5 text-muted-foreground" />,
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
        detailsText: "Seminar komprehensif ini adalah 'shortcut' anda untuk bersedia menghadapi peperiksaan percubaan! Kami akan mendedahkan teknik menjawab yang diuji, perangkap soalan lazim, dan strategi pengurusan masa. Pendaftaran termasuk akses penuh kepada rakaman sesi dan modul Quizizz interaktif kami.",
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
  
  // State for handling the popup modal
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "601137087872"; 
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/50 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

        {/* Custom Flexbox layout for the 1.5x sizing effect */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto mb-20 items-stretch">
          {currentText.plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              /* Group card is flex-[0.8], the other two are flex-[1.2], giving exactly a 1.5x width ratio on large screens! */
              className={`relative rounded-2xl p-6 flex flex-col bg-white w-full ${
                plan.id === "group" ? "lg:flex-[0.8]" : "lg:flex-[1.2]"
              } ${
                plan.popular
                  ? "border-2 border-primary shadow-lg lg:-translate-y-2 z-10"
                  : "border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  <Star className="w-3 h-3 fill-current" /> {currentText.popularTag}
                </div>
              )}

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <span className="text-sm font-medium text-primary mt-1 block">
                    {plan.badge}
                  </span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">{plan.icon}</div>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-100 flex flex-col">
                {plan.prefix && (
                  <span className="text-sm font-medium text-slate-500 mb-1">{plan.prefix}</span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                </div>
                
                {/* Seminar original price strike-through */}
                {plan.originalPrice && (
                  <div className="mt-1 text-sm text-slate-400 font-medium">
                    <span className="line-through">{plan.originalPrice}</span> Normal Price
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-6 flex-1">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="text-sm text-primary font-semibold flex items-center justify-center gap-1 hover:underline w-full py-1"
                >
                  <Info className="w-4 h-4" />
                  {currentText.detailsBtn}
                </button>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full font-bold ${plan.popular ? "bg-[#800000] hover:bg-[#600000] text-white" : ""}`}
                  onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                >
                  {currentText.btnText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timetable remains identical below */}
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

          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden">
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

      {/* The "See Details" Modal Overlay */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-100 rounded-xl">{selectedPlan.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedPlan.name}</h3>
                  <span className="text-sm font-semibold text-primary">{selectedPlan.badge}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
                  {selectedPlan.detailsText}
                </p>
              </div>

              <Button
                className="w-full bg-[#800000] hover:bg-[#600000] text-white font-bold h-12"
                onClick={() => {
                  handleWhatsAppClick(selectedPlan.whatsappMessage);
                  setSelectedPlan(null); // Close modal when they click WhatsApp
                }}
              >
                {currentText.btnText}
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PricingSection;