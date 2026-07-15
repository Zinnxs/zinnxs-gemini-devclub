import { motion } from 'motion/react';
import { Database, FileCode2, Globe, Layout, Server, Settings, Smartphone, TerminalSquare } from 'lucide-react';

const techs = [
  { name: 'React', icon: Layout, color: 'text-[#61DAFB]' },
  { name: 'Node.js', icon: Server, color: 'text-[#339933]' },
  { name: 'TypeScript', icon: FileCode2, color: 'text-[#3178C6]' },
  { name: 'Python', icon: TerminalSquare, color: 'text-[#3776AB]' },
  { name: 'Docker', icon: Globe, color: 'text-[#2496ED]' },
  { name: 'PostgreSQL', icon: Database, color: 'text-[#4169E1]' },
  { name: 'React Native', icon: Smartphone, color: 'text-[#61DAFB]' },
  { name: 'AWS', icon: Settings, color: 'text-[#FF9900]' },
];

export default function Technologies() {
  return (
    <section className="py-24 relative z-10 bg-brand-bg/50">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-12"
        >
          O que você vai dominar
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {techs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ y: -10, rotate: 5 }}
                className="group relative flex flex-col items-center justify-center p-6 w-32 h-32 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer"
              >
                <div className={`transition-transform duration-500 group-hover:scale-110 group-hover:rotate-y-180 ${tech.color}`}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <span className="absolute bottom-4 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
