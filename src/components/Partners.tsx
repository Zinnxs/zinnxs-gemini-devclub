import { motion } from 'motion/react';

const companies = [
  "Nubank", "iFood", "Mercado Livre", "Stone", "PicPay", "Uber", "Accenture", "IBM", "Deloitte", "Santander"
];

export default function Partners() {
  return (
    <section id="empresas" className="py-24 relative z-10 border-y border-white/5 bg-black/40 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Sua empresa precisa de <span className="text-brand-purple">devs de alto nível?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Temos um banco de talentos com milhares de desenvolvedores Full-Stack prontos para agregar valor ao seu time. Profissionais testados e validados na prática.
            </p>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/10">
              Quero contratar parceiros
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] rounded-full" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <p className="text-sm font-bold tracking-widest text-brand-purple uppercase mb-8 text-center">
                +500 empresas já confiam
              </p>
              
              <div className="flex overflow-hidden relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                <motion.div
                  className="flex gap-12 items-center w-max px-4"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {/* Double the array for seamless infinite scroll */}
                  {[...companies, ...companies].map((company, index) => (
                    <div 
                      key={index} 
                      className="text-xl md:text-2xl font-black text-white/20 grayscale hover:grayscale-0 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {company}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
