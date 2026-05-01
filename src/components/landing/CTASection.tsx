import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

const content = {
  en: {
    title: "Ready to Excel in Mathematics?",
    subtitle: "Join hundreds of students who have transformed their math grades with QTutor. Start your journey today!",
    btnText: "Join Now",
  },
  ms: {
    title: "Sedia untuk Cemerlang dalam Matematik?",
    subtitle: "Sertai ratusan pelajar yang telah mengubah gred matematik mereka bersama QTutor. Mulakan perjalanan anda hari ini!",
    btnText: "Sertai Sekarang",
  }
};

const CTASection = () => {
  const { language } = useLanguage(); // Ask the app which language is active
  const currentText = content[language]; // Grab the correct text dictionary

  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="relative rounded-3xl bg-hero-gradient p-10 md:p-16 text-center overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {currentText.title}
            </h2>
            <p className="text-white/90 max-w-md mx-auto mb-8 font-medium">
              {currentText.subtitle}
            </p>
            <Button
              size="xl"
              variant="secondary"
              className="font-bold text-[#800000] hover:bg-white/90 transition-colors shadow-sm"
              onClick={scrollToPricing}
            >
              {currentText.btnText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;