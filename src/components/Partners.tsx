import { motion } from 'motion/react';

const companies = [
  "Nubank", "iFood", "Mercado Livre", "Stone", "PicPay", "Uber", "Accenture", "IBM", "Deloitte", "Santander"
];

export default function Partners() {
  return (
    <section id="empresas" className="py-16 relative z-10 border-y border-white/5 bg-brand-bg/80 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-gray-400 uppercase"
        >
          +500 empresas confiam nos profissionais formados pelo DevClub
        </motion.p>
      </div>

      <div className="flex overflow-hidden relative">
        {/* Gradient Masks for fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 items-center w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...companies, ...companies].map((company, index) => (
            <div 
              key={index} 
              className="text-2xl md:text-3xl font-extrabold text-white/30 grayscale hover:grayscale-0 hover:text-white transition-all duration-300 cursor-default"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
