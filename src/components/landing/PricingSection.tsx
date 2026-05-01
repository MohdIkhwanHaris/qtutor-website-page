import { Button } from "@/components/ui/button";
import { Check, Star, CalendarDays, Clock, Users, User } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

const content = {
  en: {
    badge: "Pricing",
    title: "Simple, Affordable Plans",
    subtitle: "Choose the perfect learning environment to excel in your exams.",
    popularTag: "Most Popular",
    btnText: "Get Started",
    timetableTitle: "Class Timetable",
    timetableSubtitle: "Weekly schedule for QTutor Group Classes",
    plans: [
      {
        id: "group",
        name: "QTutor Math Class",
        badge: "Group Class",
        icon: <Users className="w-5 h-5 text-primary" />,
        price: "RM45",
        period: "/month",
        features: [
          "Math for Form 1 – Form 5",
          "8 hours per month",
          "Session recordings available",
          "WhatsApp Group support",
          "Study notes provided",
        ],
        popular: true,
        whatsappMessage: "Hi QTutor! I am interested in registering for the Group Math Class (RM45/month). Can I get more details?",
      },
      {
        id: "personal-4",
        name: "Personal Class",
        badge: "4 Hours",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        price: "RM140",
        period: "/subject",
        features: [
          "4 hours of 1-on-1 focus",
          "Math, AddMath, or English",
          "Custom notes & exercises",
        ],
        popular: false,
        whatsappMessage: "Hi QTutor! I am interested in registering for the 4-Hour Personal Class (RM140/subject). Can I get more details?",
      },
      {
        id: "personal-8",
        name: "Personal Class",
        badge: "8 Hours",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        price: "RM260",
        period: "/subject",
        features: [
          "8 hours of 1-on-1 focus",
          "Math, AddMath, or English",
          "Custom notes & exercises",
        ],
        popular: false,
        whatsappMessage: "Hi QTutor! I am interested in registering for the 8-Hour Personal Class (RM260/subject). Can I get more details?",
      },
      {
        id: "personal-12",
        name: "Personal Class",
        badge: "12 Hours",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        price: "RM380",
        period: "/subject",
        features: [
          "12 hours of 1-on-1 focus",
          "Math, AddMath, or English",
          "Custom notes & exercises",
        ],
        popular: false,
        whatsappMessage: "Hi QTutor! I am interested in registering for the 12-Hour Personal Class (RM380/subject). Can I get more details?",
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
    plans: [
      {
        id: "group",
        name: "Kelas Math QTutor",
        badge: "Kelas Berkumpulan",
        icon: <Users className="w-5 h-5 text-primary" />,
        price: "RM45",
        period: "/bulan",
        features: [
          "Matematik Tingkatan 1 – 5",
          "8 jam sebulan",
          "Rakaman sesi disediakan",
          "Sokongan Group WhatsApp",
          "Nota pembelajaran disediakan",
        ],
        popular: true,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Matematik Berkumpulan (RM45/bulan). Boleh saya dapatkan maklumat lanjut?",
      },
      {
        id: "personal-4",
        name: "Kelas Personal",
        badge: "4 Jam",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        price: "RM140",
        period: "/subjek",
        features: [
          "4 jam fokus 1-on-1",
          "Matematik, AddMath, atau English",
          "Nota & latihan khusus",
        ],
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Personal 4 Jam (RM140/subjek). Boleh saya dapatkan maklumat lanjut?",
      },
      {
        id: "personal-8",
        name: "Kelas Personal",
        badge: "8 Jam",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        price: "RM260",
        period: "/subjek",
        features: [
          "8 jam fokus 1-on-1",
          "Matematik, AddMath, atau English",
          "Nota & latihan khusus",
        ],
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Personal 8 Jam (RM260/subjek). Boleh saya dapatkan maklumat lanjut?",
      },
      {
        id: "personal-12",
        name: "Kelas Personal",
        badge: "12 Jam",
        icon: <User className="w-5 h-5 text-muted-foreground" />,
        price: "RM380",
        period: "/subjek",
        features: [
          "12 jam fokus 1-on-1",
          "Matematik, AddMath, atau English",
          "Nota & latihan khusus",
        ],
        popular: false,
        whatsappMessage: "Hai QTutor! Saya berminat untuk mendaftar Kelas Personal 12 Jam (RM380/subjek). Boleh saya dapatkan maklumat lanjut?",
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
  const { language } = useLanguage(); // Ask the app which language is active
  const currentText = content[language]; // Grab the correct text dictionary

  // Function to handle the WhatsApp redirect
  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "601137087872"; // Your number formatted for the API
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/50">
      <div className="container px-4 md:px-6">
        {/* Header */}
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {currentText.plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl p-6 flex flex-col bg-white ${
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

              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className={`w-full font-bold ${plan.popular ? "bg-[#800000] hover:bg-[#600000] text-white" : ""}`}
                onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
              >
                {currentText.btnText}
              </Button>
            </motion.div>
          ))}
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
    </section>
  );
};

export default PricingSection;