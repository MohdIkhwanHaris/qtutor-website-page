import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; 

const content = {
  en: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Got questions? We've got answers. Here is everything you need to know about learning with QTutor.",
    faqs: [
      {
        id: "q1",
        q: "Who is QTutor for?",
        a: "QTutor is designed for Form 1 to Form 5 students who want to improve their Mathematics. Whether a student is struggling with the basics, performing at an average level, or aiming for top academic results, our classes are structured to help them excel.",
      },
      {
        id: "q2",
        q: "How can students experience the class before joining?",
        a: "We offer a Free Trial Class! This allows students to experience our interactive teaching style, try out our gamified learning approach, and get comfortable with the class environment before making any commitments.",
      },
      {
        id: "q3",
        q: "What makes QTutor different from other tuition centres?",
        a: "We offer distinct benefits based on your chosen plan. For our Group Classes, we emphasize gamified learning where students and parents can easily track progress through weekly Quizizz results. For Personal Classes, we provide detailed, personalized progress reports tailored specifically to the individual student's growth.",
      },
      {
        id: "q4",
        q: "How are the classes conducted and how long are they?",
        a: "All classes are conducted live online via Google Meet. Each session typically lasts for 1 hour, which provides the perfect balance of focused learning and real-time Q&A without overwhelming the student.",
      },
      {
        id: "q5",
        q: "What will students receive every week?",
        a: "Every week, our students are provided with a complete learning kit: structured study notes, a live explanation session, session recordings, hands-on practice questions, and a weekly quiz or assessment to track their progress.",
      },
      {
        id: "q6",
        q: "Are the live classes recorded?",
        a: "Yes! All live classes are recorded. Students can rewatch the sessions anytime for revision or if they happen to miss a class.",
      },
      {
        id: "q7",
        q: "What payment methods do you accept?",
        a: "We accept DuitNow, and standard online banking through our secure payment gateway for simple and fast enrollments.",
      },
    ]
  },
  ms: {
    badge: "Soalan Lazim",
    title: "Soalan Kerap Ditanya",
    subtitle: "Ada soalan? Kami ada jawapannya. Berikut adalah semua yang anda perlu tahu tentang pembelajaran bersama QTutor.",
    faqs: [
      {
        id: "q1",
        q: "Siapakah yang sesuai menyertai QTutor?",
        a: "QTutor direka untuk pelajar Tingkatan 1 hingga Tingkatan 5 yang ingin meningkatkan penguasaan Matematik mereka. Sama ada pelajar masih lemah asas, berada pada tahap sederhana, atau menyasarkan keputusan cemerlang, kelas kami berstruktur untuk membantu mereka berjaya.",
      },
      {
        id: "q2",
        q: "Bagaimanakah pelajar boleh merasai pengalaman kelas sebelum mendaftar?",
        a: "Kami menawarkan Kelas Percubaan Percuma (Free Trial Class)! Ini membolehkan pelajar merasai sendiri gaya pengajaran interaktif kami, mencuba pendekatan pembelajaran gamifikasi, dan menyesuaikan diri dengan suasana kelas sebelum membuat sebarang komitmen.",
      },
      {
        id: "q3",
        q: "Apakah perbezaan QTutor berbanding pusat tuisyen lain?",
        a: "Kami menawarkan kelebihan tersendiri mengikut pelan pilihan anda. Untuk Kelas Berkumpulan, kami menggunakan pembelajaran gamifikasi di mana kemajuan boleh dijejaki dengan mudah melalui keputusan Quizizz mingguan. Untuk Kelas Personal pula, kami menyediakan laporan kemajuan peribadi yang terperinci khusus untuk perkembangan setiap pelajar.",
      },
      {
        id: "q4",
        q: "Bagaimanakah kelas dijalankan dan berapa lamakah tempohnya?",
        a: "Semua kelas dijalankan secara langsung atas talian melalui Google Meet. Setiap sesi kebiasaannya berlangsung selama 1 jam, memberikan keseimbangan sempurna untuk pembelajaran berfokus dan sesi soal jawab langsung tanpa membebankan pelajar.",
      },
      {
        id: "q5",
        q: "Apakah yang pelajar akan terima setiap minggu?",
        a: "Setiap minggu, pelajar kami disediakan dengan kit pembelajaran lengkap: nota kajian berstruktur, sesi penerangan langsung, rakaman sesi, soalan latihan praktikal, dan kuiz atau penilaian mingguan untuk menjejaki kemajuan mereka.",
      },
      {
        id: "q6",
        q: "Adakah kelas langsung ini dirakam?",
        a: "Ya! Semua kelas langsung dirakam. Pelajar boleh menonton semula sesi tersebut pada bila-bila masa untuk ulang kaji atau jika terlepas kelas.",
      },
      {
        id: "q7",
        q: "Apakah kaedah pembayaran yang diterima?",
        a: "Kami menerima DuitNow, dan perbankan atas talian standard melalui gerbang pembayaran selamat kami untuk pendaftaran yang mudah dan pantas.",
      },
    ]
  }
};

const FAQSection = () => {
  const { language } = useLanguage(); 
  const currentText = content[language]; 

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
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

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {currentText.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="group rounded-2xl bg-white border border-slate-200 px-6 py-2 shadow-sm transition-all duration-300 hover:bg-primary hover:border-primary data-[state=open]:bg-primary data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 text-[15px] hover:no-underline transition-colors duration-300 group-hover:text-white data-[state=open]:text-white [&>svg]:transition-colors [&>svg]:group-hover:text-white [&>svg]:data-[state=open]:text-white">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-slate-600 leading-relaxed pb-4 transition-colors duration-300 group-hover:text-white/90 group-data-[state=open]:text-white/90">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;