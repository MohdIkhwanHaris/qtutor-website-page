import { motion } from "framer-motion";
import { BookOpen, Video, Award, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

const content = {
  en: {
    badge: "Our Journey",
    title: "The QTutor Experience",
    subtitle: "A complete learning journey designed for your success.",
    milestones: [
      {
        id: "m1",
        icon: BookOpen,
        title: "Interactive Classes",
        description: "Live Google Meet sessions with real-time problem solving and Q&A.",
      },
      {
        id: "m2",
        icon: Video,
        title: "Recorded Lessons",
        description: "Access past lessons anytime. Rewatch and revise at your own pace.",
      },
      {
        id: "m3",
        icon: Users,
        title: "Study Community",
        description: "Join our WhatsApp group to discuss, share tips, and stay motivated.",
      },
      {
        id: "m4",
        icon: Award,
        title: "Weekly Quizzes",
        description: "Regular assessments to track progress and ensure exam readiness.",
      },
    ]
  },
  ms: {
    badge: "Perjalanan Kami",
    title: "Pengalaman QTutor",
    subtitle: "Perjalanan pembelajaran lengkap yang direka untuk kejayaan anda.",
    milestones: [
      {
        id: "m1",
        icon: BookOpen,
        title: "Kelas Interaktif",
        description: "Sesi Google Meet secara langsung dengan penyelesaian masalah dan Q&A.",
      },
      {
        id: "m2",
        icon: Video,
        title: "Kelas Rakaman",
        description: "Akses sesi lepas bila-bila masa. Tonton semula dan ulang kaji mengikut rentak anda.",
      },
      {
        id: "m3",
        icon: Users,
        title: "Komuniti Pembelajaran",
        description: "Sertai group WhatsApp kami untuk berbincang, kongsi tip, dan kekal bermotivasi.",
      },
      {
        id: "m4",
        icon: Award,
        title: "Kuiz Mingguan",
        description: "Penilaian berkala untuk menjejaki kemajuan dan memastikan persediaan peperiksaan.",
      },
    ]
  }
};

const JourneySection = () => {
  const { language } = useLanguage(); // Ask the app which language is active
  const currentText = content[language]; // Grab the correct text dictionary

  return (
    <section id="journey" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {currentText.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-slate-900">
            {currentText.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            {currentText.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {currentText.milestones.map((m, i) => (
            <motion.div
              key={m.id}
              className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-slate-900">{m.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{m.description}</p>
              {i < currentText.milestones.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;