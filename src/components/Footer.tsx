import { motion } from 'motion/react';
import { Code2, Instagram, Youtube, Linkedin, Disc as Discord } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Discord, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 pt-20 pb-10 border-t border-white/10 bg-[#07090d] overflow-hidden">
      {/* Animated top border gradient */}
      <motion.div 
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent bg-[length:200%_auto]"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 group relative z-50 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px]">
                <div className="w-full h-full rounded-xl bg-[#07090d] flex items-center justify-center transition-colors group-hover:bg-[#07090d]/50">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Dev<span className="text-brand-purple">Club</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm">
              A maior comunidade de desenvolvedores do Brasil. Formações completas para quem quer liderar o mercado de tecnologia.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide uppercase text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Formações</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide uppercase text-sm">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 DevClub. Todos os direitos reservados. Conteúdo fictício para demonstração.
          </p>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-gray-500 font-mono">ALL SYSTEMS ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
