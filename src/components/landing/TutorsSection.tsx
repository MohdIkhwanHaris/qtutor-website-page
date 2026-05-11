import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    badge: "Our Team",
    title: "Meet the Tutors",
    subtitle: "Passionate educators dedicated to your math excellence.",
    tutors: [
      {
        id: "t1",
        name: "Adam Aminuddin",
        specialty: "SPM Add Maths & Maths",
        experience: "8 years teaching experience",
        initials: "AA",
      },
      {
        id: "t2",
        name: "Puteri Aina",
        specialty: "PT3 Mathematics",
        experience: "5 years teaching experience",
        initials: "PA",
      },
      {
        id: "t3",
        name: "Siti Nur Aisyah",
        specialty: "Form 1-3 Mathematics",
        experience: "6 years teaching experience",
        initials: "SNA",
      },
    ]
  },
  ms: {
    badge: "Pasukan Kami",
    title: "Kenali Tutor Kami",
    subtitle: "Pendidik berdedikasi yang komited terhadap kecemerlangan matematik anda.",
    tutors: [
      {
        id: "t1",
        name: "Belum Ditetapkan",
        specialty: "Matematik Tambahan & Matematik SPM",
        experience: "8 tahun pengalaman mengajar",
        initials: "U",
      },
      {
        id: "t2",
        name: "Belum Ditetapkan",
        specialty: "Matematik PT3",
        experience: "5 tahun pengalaman mengajar",
        initials: "U",
      },
      {
        id: "t3",
        name: "Belum Ditetapkan",
        specialty: "Matematik Tingkatan 1-3",
        experience: "6 tahun pengalaman mengajar",
        initials: "U",
      },
    ]
  }
};

const TutorsSection = () => {
  const { language } = useLanguage(); 
  const currentText = content[language]; 

  return (
    <section id="tutors" className="py-16 md:py-24 bg-slate-50/50">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {currentText.tutors.map((tutor, i) => (
            <motion.div
              key={tutor.id}
              /* ADDED: flex, flex-col, and h-full to make the cards uniform height */
              className="flex flex-col h-full text-center rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 shrink-0">
                <span className="text-xl font-bold text-primary">{tutor.initials}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900">{tutor.name}</h3>
              <p className="text-sm text-primary font-medium mt-1">{tutor.specialty}</p>
              
              {/* ADDED: mt-auto to push this block to the absolute bottom of the card, and pt-4 for breathing room */}
              <div className="flex items-center justify-center gap-1 mt-auto pt-4 text-xs font-semibold text-slate-500">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                {tutor.experience}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;