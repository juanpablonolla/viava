import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Fingerprint, 
  PenTool, 
  Smartphone, 
  MonitorPlay, 
  Store, 
  Mountain, 
  ArrowLeft 
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'about'>('home');

  return (
    <div className="min-h-screen w-full font-sans overflow-x-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        {currentView === 'home' && <HomeView key="home" onNavigate={setCurrentView} />}
        {currentView === 'services' && <ServicesView key="services" onNavigate={setCurrentView} />}
        {currentView === 'about' && <AboutView key="about" onNavigate={setCurrentView} />}
      </AnimatePresence>
    </div>
  );
}

function HomeView({ onNavigate }: { onNavigate: (view: 'home' | 'services' | 'about') => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen w-full bg-[#9b51e0] relative flex flex-col items-center justify-center p-6 overflow-hidden font-sans"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Bottom left rounded shape */}
         <div className="absolute -bottom-32 -left-24 w-[32rem] h-[32rem] bg-[#8a3fd6] rounded-[120px] transform rotate-12"></div>
         {/* Right diagonal shape */}
         <div className="absolute top-0 right-0 w-full h-full bg-[#8a3fd6] transform origin-bottom-right -skew-x-[15deg] translate-x-[55%]"></div>
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-md mt-[-8vh]">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center w-full px-4">
          <img 
            src="/logo.png" 
            alt="VAVA Design Logo" 
            className="w-full max-w-[380px] h-auto object-contain scale-125"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4 flex flex-col items-center mt-4">
          <button 
            onClick={() => onNavigate('services')}
            className="w-[88%] max-w-[320px] bg-white text-[#333333] font-bold py-3.5 rounded-full text-[17px] hover:scale-105 transition-transform duration-300"
          >
            Servicios
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="w-[88%] max-w-[320px] bg-white text-[#333333] font-bold py-3.5 rounded-full text-[17px] hover:scale-105 transition-transform duration-300"
          >
            Nosotros
          </button>
          <a 
            href="https://api.whatsapp.com/send?phone=54922161525&text=Hola%20Viava!%20quisera%20consultar%20por%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="w-[88%] max-w-[320px] bg-white/20 text-white font-bold py-3.5 rounded-full text-[17px] hover:bg-white/30 hover:scale-105 transition-all duration-300 block text-center"
          >
            Charlemos :)
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 text-white/70 text-sm tracking-widest font-light">
        {new Date().getFullYear()}
      </div>
    </motion.div>
  );
}

function ServicesView({ onNavigate }: { onNavigate: (view: 'home' | 'services' | 'about') => void }) {
  const services = [
    { icon: Fingerprint, title: "Identidad visual" },
    { icon: PenTool, title: "Diseño gráfico" },
    { icon: Smartphone, title: "UX/UI\nWeb apps" },
    { icon: MonitorPlay, title: "Diseño publicitario" },
    { icon: Store, title: "Diseño comercial" },
    { icon: Mountain, title: "Ilustración digital" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen w-full bg-[#fcfcfc] relative flex flex-col items-center py-20 px-6"
    >
      {/* Background diagonal shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f3f4f6] transform skew-x-[-15deg] translate-x-32"></div>
      </div>

      <button 
        onClick={() => onNavigate('home')}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-20 p-3 bg-white rounded-full shadow-md text-[#2D2438] hover:bg-gray-50 hover:scale-110 transition-all duration-300"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="z-10 w-full max-w-5xl mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#2D2438] flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:bg-[#4a3b5c] transition-all duration-300">
                <service.icon size={48} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#2D2438] font-bold text-xl md:text-2xl whitespace-pre-line group-hover:text-[#a65fec] transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AboutView({ onNavigate }: { onNavigate: (view: 'home' | 'services' | 'about') => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen w-full bg-[#fcfcfc] relative flex flex-col items-center py-20 px-6"
    >
      {/* Background diagonal shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f3f4f6] transform skew-x-[-15deg] translate-x-32"></div>
      </div>

      <button 
        onClick={() => onNavigate('home')}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-20 p-3 bg-white rounded-full shadow-md text-[#2D2438] hover:bg-gray-50 hover:scale-110 transition-all duration-300"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="z-10 w-full max-w-3xl mt-16 md:mt-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#2D2438] mb-8">
            Nosotros
          </h2>
          <div className="text-lg md:text-xl text-gray-600 leading-relaxed font-light space-y-6">
            <p>
              Somos un estudio de diseño enfocado en crear identidades visuales y experiencias digitales claras, atractivas y funcionales.
            </p>
            <p>
              Con más de 15 años de experiencia desarrollando proyectos de diseño, trabajamos junto a marcas y emprendedores para transformar ideas en soluciones visuales que conecten con las personas.
            </p>
            <p>
              Cada proyecto combina estrategia, creatividad y diseño para construir comunicación auténtica y consistente en diferentes plataformas.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
