import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

const content = {
  en: {
    badge: "Online Mathematics Tuition for Form 1–5",
    titlePrefix: "Enhance Your IQ with ",
    subtitle: "Expert-led online math tuition for secondary school students. Learn at your pace, excel in your exams.",
    btnJoin: "Join Now",
    btnPlans: "View Plans",
    stats: [
      { id: "s1", icon: Users, value: "2000+", label: "Students Enrolled" },
      { id: "s2", icon: GraduationCap, value: "95%", label: "Pass Rate" },
      { id: "s3", icon: Trophy, value: "4.9★", label: "Student Rating" },
    ]
  },
  ms: {
    badge: "Tuisyen Matematik Online Tingkatan 1–5",
    titlePrefix: "Tingkatkan Minda Anda Bersama ",
    subtitle: "Tuisyen matematik online bimbingan pakar untuk pelajar sekolah menengah. Belajar mengikut rentak anda, cemerlang dalam peperiksaan.",
    btnJoin: "Sertai Sekarang",
    btnPlans: "Lihat Pakej",
    stats: [
      { id: "s1", icon: Users, value: "500+", label: "Pelajar Berdaftar" },
      { id: "s2", icon: GraduationCap, value: "95%", label: "Kadar Lulus" },
      { id: "s3", icon: Trophy, value: "4.9★", label: "Penilaian Pelajar" },
    ]
  }
};

const HeroSection = () => {
  const { language } = useLanguage(); // Ask the app which language is active
  const currentText = content[language]; // Grab the correct text dictionary

  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-gradient opacity-[0.03]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              {currentText.badge}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {currentText.titlePrefix}
            <span className="text-gradient">QTutor</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {currentText.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="hero" size="xl" onClick={scrollToPricing}>
              {currentText.btnJoin}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={scrollToPricing}>
              {currentText.btnPlans}
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {currentText.stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
            >
              <stat.icon className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;