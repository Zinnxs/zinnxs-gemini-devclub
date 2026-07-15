import { motion } from 'motion/react';
import { ExternalLink, Linkedin } from 'lucide-react';

const mentors = [
  {
    name: "Rodolfo Mori",
    role: "Fundador & Instrutor Chefe",
    quote: "Ensinar a pescar, não dar o peixe.",
    image: "https://i.pravatar.cc/400?img=15"
  },
  {
    name: "Andrey",
    role: "Especialista Back-End & Arquitetura",
    quote: "Código limpo, mente limpa.",
    image: "https://i.pravatar.cc/400?img=60"
  },
  {
    name: "George",
    role: "Front-End & UX Engineer",
    quote: "Design não é como parece, é como funciona.",
    image: "https://i.pravatar.cc/400?img=33"
  },
  {
    name: "Gabriel",
    role: "DevOps & Cloud",
    quote: "Infra é código, e código é poesia.",
    image: "https://i.pravatar.cc/400?img=59"
  },
  {
    name: "Fernanda Lima",
    role: "IA & Dados",
    quote: "Dados são o novo petróleo, e eu vou te ensinar a refinar.",
    image: "https://i.pravatar.cc/400?img=49"
  },
  {
    name: "Rafael Torres",
    role: "Mobile & Flutter",
    quote: "Um app bem feito cabe no bolso e no coração.",
    image: "https://i.pravatar.cc/400?img=12"
  }
];

export default function Mentors() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Aprenda com quem <span className="text-brand-cyan">faz acontecer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nossos mentores são engenheiros seniores que vivem o mercado todos os dias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-[400px] w-full [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden [backface-visibility:hidden]">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-[70%] object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-[40%]">
                    <h3 className="text-2xl font-bold text-white mb-1">{mentor.name}</h3>
                    <p className="text-brand-cyan font-medium text-sm">{mentor.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#121620] to-[#0a0c12] border border-white/10 rounded-3xl p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{mentor.name}</h3>
                    <div className="w-12 h-1 bg-brand-cyan rounded-full mb-6" />
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                      "{mentor.quote}"
                    </p>
                  </div>
                  
                  <button className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-medium">
                    <Linkedin size={18} />
                    <span>Ver LinkedIn</span>
                    <ExternalLink size={16} className="ml-1 text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
