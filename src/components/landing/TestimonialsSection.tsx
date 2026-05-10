import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

const content = {
  en: {
    badge: "Reviews",
    title: "Real Results, Real Students",
    subtitle: "See how our structured approach has helped students jump from failing grades to A's.",
    testimonials: [
      {
        id: "t1",
        name: "Ciksu",
        role: "Parent of SPM Student",
        text: "Alhamdulillah... Mampu buat pelajar dari dapat matematik G to A. Hebattt 👏👏👏",
        rating: 5,
      },
      {
        id: "t2",
        name: "Form 5 Student",
        role: "QTutor Seminar",
        text: "SAYA DPAT A UNEXPECTED SUMPAHH. Dari F1 sampai F4 asyik gagal... Tak sia-sia saya join kelas last minute miss! 😭😭",
        rating: 5,
      },
      {
        id: "t3",
        name: "SPM Candidate",
        role: "QTutor Class",
        text: "TQ miss kerana miss saya dapat melonjak daripada G kepada A. Tak expect pun dapat A 😭",
        rating: 5,
      },
      {
        id: "t4",
        name: "Ex-Student",
        role: "QTutor Class",
        text: "Tadi baru check result, masyaAllah tak sangka math saya tak pernah lulus jadi A-",
        rating: 5,
      },
    ]
  },
  ms: {
    badge: "Ulasan",
    title: "Hasil Nyata, Pelajar Sebenar",
    subtitle: "Lihat bagaimana pendekatan berstruktur kami telah membantu pelajar melonjak daripada gred gagal kepada A.",
    testimonials: [
      {
        id: "t1",
        name: "Ciksu",
        role: "Ibu Bapa Pelajar SPM",
        text: "Alhamdulillah... Mampu buat pelajar dari dapat matematik G to A. Hebattt 👏👏👏",
        rating: 5,
      },
      {
        id: "t2",
        name: "Pelajar Tingkatan 5",
        role: "Seminar QTutor",
        text: "SAYA DPAT A UNEXPECTED SUMPAHH. Dari F1 sampai F4 asyik gagal... Tak sia-sia saya join kelas last minute miss! 😭😭",
        rating: 5,
      },
      {
        id: "t3",
        name: "Calon SPM",
        role: "Kelas QTutor",
        text: "TQ miss kerana miss saya dapat melonjak daripada G kepada A. Tak expect pun dapat A 😭",
        rating: 5,
      },
      {
        id: "t4",
        name: "Bekas Pelajar",
        role: "Kelas QTutor",
        text: "Tadi baru check result, masyaAllah tak sangka math saya tak pernah lulus jadi A-",
        rating: 5,
      },
    ]
  }
};

const TestimonialsSection = () => {
  const { language } = useLanguage(); // Ask the app which language is active
  const currentText = content[language]; // Grab the correct text dictionary

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {currentText.testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-[15px] italic text-slate-700 leading-relaxed mb-6 font-medium">"{t.text}"</p>
              <div className="pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-primary font-semibold mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;