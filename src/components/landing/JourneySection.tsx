import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

const content = {
  en: {
    badge: "",
    title: "Why QTutor?",
    subtitle: "A complete learning journey designed for your success.",
    milestones: [
      {
        id: "m1",
        image: "feature-meet.jpeg",
        title: "2 Hrs / week",
        description: "2 hrs live Google Meet session class to learn, solve questions & QnA.",
      },
      {
        id: "m2",
        image: "feature-quiz.jpeg",
        title: "Weekly Quizzes",
        description: "Play Quizizz to track progress and compete with your classmates every week!",
      },
      {
        id: "m3",
        image: "feature-recording.jpeg",
        title: "Access to Recording",
        description: "Access past lessons anytime. Rewatch and revise at your own pace.",
      },
      {
        id: "m4",
        image: "feature-community.jpeg",
        title: "Study Community",
        description: "Join our WhatsApp group to discuss, share tips, and stay motivated.",
      },
    ]
  },
  ms: {
    badge: "",
    title: "Kenapa QTutor?",
    subtitle: "Perjalanan pembelajaran lengkap yang direka untuk kejayaan anda.",
    milestones: [
      {
        id: "m1",
        image: "feature-meet.jpeg",
        title: "2 Jam / minggu",
        description: "Sesi kelas Google Meet secara langsung selama 2 jam untuk belajar, menyelesaikan soalan & QnA.",
      },
      {
        id: "m2",
        image: "feature-quiz.jpeg",
        title: "Kuiz Mingguan",
        description: "Main Quizizz untuk menjejaki kemajuan dan bersaing dengan rakan sekelas setiap minggu!",
      },
      {
        id: "m3",
        image: "feature-recording.jpeg",
        title: "Akses Rakaman",
        description: "Akses sesi lepas bila-bila masa. Tonton semula dan ulang kaji mengikut rentak anda.",
      },
      {
        id: "m4",
        image: "feature-community.jpeg",
        title: "Komuniti Pembelajaran",
        description: "Sertai group WhatsApp kami untuk berbincang, kongsi tip, dan kekal bermotivasi.",
      },
    ]
  }
};

const JourneySection = () => {
  const { language } = useLanguage(); // Ask the app which language is active
  const currentText = content[language]; // Grab the correct text dictionary

  return (
    // CHANGED: bg-card is now bg-slate-50/50 for a subtle contrast
    <section id="journey" className="py-16 md:py-24 bg-slate-50/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge is hidden if empty, but kept for structure */}
          {currentText.badge && (
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {currentText.badge}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-slate-900">
            {currentText.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            {currentText.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {currentText.milestones.map((m, i) => (
            <motion.div
              key={m.id}
              className="flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image Container */}
              <div className="w-full h-40 sm:h-48 bg-slate-100 overflow-hidden relative">
                <img 
                  src={`${import.meta.env.BASE_URL}${m.image}`} 
                  alt={m.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* A subtle gradient overlay to make it look premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Text Container */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="font-bold text-lg mb-2 text-slate-900">{m.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;