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
        {currentView === 'home' ? (
          <HomeView key="home" onNavigate={setCurrentView} />
        ) : currentView === 'services' ? (
          <ServicesView key="services" onNavigate={setCurrentView} />
        ) : (
          <AboutView key="about" onNavigate={setCurrentView} />
        )}
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
      className="min-h-screen w-full bg-gradient-to-br from-[#a65fec] to-[#8b3dff] relative flex flex-col items-center justify-center p-6"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl"></div>
         <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-black/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
         {/* Diagonal overlay like in the image */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 transform skew-x-12 translate-x-20"></div>
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-2xl px-6">
        {/* Logo */}
        <div className="mb-32 mt-20 flex flex-col items-center">
          <img
            src="/logo.png"
            alt="VAVA Design Logo"
            className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Buttons */}
        <div className="w-full space-y-6 flex flex-col items-center mb-auto">
          <button
            onClick={() => onNavigate('services')}
            className="w-full max-w-sm bg-white text-[#2D2438] font-bold py-5 rounded-full text-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Servicios
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="w-full max-w-sm bg-white text-[#2D2438] font-bold py-5 rounded-full text-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Sobre mi
          </button>
          <a
            href="https://api.whatsapp.com/send?phone=54922161525"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm bg-white/25 text-white font-bold py-5 rounded-full text-xl backdrop-blur-md shadow-lg hover:bg-white/35 hover:scale-105 transition-all duration-300 border border-white/40 text-center block"
          >
            Charlemos :)
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 text-white/80 text-sm tracking-widest font-light">
        custonex
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
      className="min-h-screen w-full bg-[#fcfcfc] relative flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f3f4f6] transform skew-x-[-15deg] translate-x-32"></div>
      </div>

      <button
        onClick={() => onNavigate('home')}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-20 p-3 bg-white rounded-full shadow-md text-[#2D2438] hover:bg-gray-50 hover:scale-110 transition-all duration-300"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="z-10 w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2438] mb-8">
            Valeria Margheritis
          </h1>
          <p className="text-lg md:text-xl text-[#2D2438] leading-relaxed">
            ¡Hola! Soy Diseñadora e Ilustradora con más de 15 años de experiencia. Me apasiona coordinar proyectos de diseño, desde la idea inicial hasta la ejecución final. A lo largo de mi carrera he liderado proyectos para diversas marcas y plataformas, brindando soluciones creativas que generan conexiones auténticas y duraderas.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
