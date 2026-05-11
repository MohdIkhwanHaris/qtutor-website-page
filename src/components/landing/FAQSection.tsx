import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

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
        q: "What makes QTutor different from other tuition centres?",
        a: "We focus on clear, step-by-step explanations rather than just feeding students the final answers. Our classes prioritize active interaction and follow a structured weekly system—including notes, quizzes, and continuous guidance—all at a highly affordable price.",
      },
      {
        id: "q3",
        q: "How are the classes conducted and how long are they?",
        a: "All classes are conducted live online via Google Meet. Each session typically lasts for 1 hour, which provides the perfect balance of focused learning and real-time Q&A without overwhelming the student.",
      },
      {
        id: "q4",
        q: "What will students receive every week?",
        a: "Every week, our students are provided with a complete learning kit: structured study notes, a live explanation session, session recordings, hands-on practice questions, and a weekly quiz or assessment to track their progress.",
      },
      {
        id: "q5",
        q: "Are the live classes recorded?",
        a: "Yes! All live classes are recorded. Students can log in and rewatch the sessions anytime for revision or if they happen to miss a class.",
      },
      {
        id: "q6",
        q: "What payment methods do you accept?",
        a: "We accept DuitNow, and standard online banking through our secure payment gateway for simple and fast enrollments.",
      },
      {
        id: "q7",
        q: "What happens after my subscription expires?",
        a: "Your dashboard access will be temporarily paused. You can easily renew your plan at any time through your account to regain full access to all your class materials and recordings.",
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
        q: "Apakah perbezaan QTutor berbanding pusat tuisyen lain?",
        a: "Kami fokus kepada penerangan langkah demi langkah yang jelas, bukan sekadar memberikan jawapan akhir. Kelas kami mengutamakan interaksi aktif dan mengikuti sistem mingguan berstruktur—termasuk nota, kuiz, dan bimbingan berterusan—semuanya pada harga yang sangat berpatutan.",
      },
      {
        id: "q3",
        q: "Bagaimanakah kelas dijalankan dan berapa lamakah tempohnya?",
        a: "Semua kelas dijalankan secara langsung atas talian melalui Google Meet. Setiap sesi kebiasaannya berlangsung selama 1 jam, memberikan keseimbangan sempurna untuk pembelajaran berfokus dan sesi soal jawab langsung tanpa membebankan pelajar.",
      },
      {
        id: "q4",
        q: "Apakah yang pelajar akan terima setiap minggu?",
        a: "Setiap minggu, pelajar kami disediakan dengan kit pembelajaran lengkap: nota kajian berstruktur, sesi penerangan langsung, rakaman sesi, soalan latihan praktikal, dan kuiz atau penilaian mingguan untuk menjejaki kemajuan mereka.",
      },
      {
        id: "q5",
        q: "Adakah kelas langsung ini dirakam?",
        a: "Ya! Semua kelas langsung dirakam. Pelajar boleh log masuk dan menonton semula sesi tersebut pada bila-bila masa untuk ulang kaji atau jika terlepas kelas.",
      },
      {
        id: "q6",
        q: "Apakah kaedah pembayaran yang diterima?",
        a: "Kami menerima DuitNow, dan perbankan atas talian standard melalui gerbang pembayaran selamat kami untuk pendaftaran yang mudah dan pantas.",
      },
      {
        id: "q7",
        q: "Apakah yang terjadi selepas langganan saya tamat?",
        a: "Akses ke papan pemuka anda akan dihentikan sementara. Anda boleh memperbaharui pelan anda dengan mudah pada bila-bila masa melalui akaun anda untuk mendapatkan semula akses penuh kepada semua bahan kelas dan rakaman.",
      },
    ]
  }
};

const FAQSection = () => {
  const { language } = useLanguage(); 
  const currentText = content[language]; 

  return (
    // CHANGED: bg-slate-50/50 is now bg-white to alternate correctly!
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
                className="rounded-2xl bg-white border border-slate-200 px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 text-[15px] hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-slate-600 leading-relaxed pb-4">
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