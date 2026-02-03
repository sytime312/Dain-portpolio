
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { Cpu, BookOpen, Layers, Lightbulb, Zap, ArrowRight, Menu, X, Instagram, Mail, Linkedin } from 'lucide-react';
import { Service, Strength, CareerItem } from './types';

// --- Sub-components for better organization ---

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[1, 64, 64]} position={[2, -1, -2]}>
            <MeshDistortMaterial
              color="#0891b2"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Float>
        <Float speed={3} rotationIntensity={2} floatIntensity={2}>
          <Sphere args={[0.5, 64, 64]} position={[-3, 2, -5]}>
            <MeshDistortMaterial
              color="#7c3aed"
              attach="material"
              distort={0.6}
              speed={4}
              roughness={0}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-orbitron font-bold tracking-tighter text-cyan-400"
        >
          DAIN<span className="text-white">.AI</span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-300">
          {['About', 'Experience', 'Services', 'Strengths'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              {['About', 'Experience', 'Services', 'Strengths'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-orbitron"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> AI Transformation Architect
          </div>
          <h1 className="text-5xl md:text-8xl font-orbitron font-bold leading-tight mb-6">
            Hello, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-glow">DAIN</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            인공지능 교육 전문가 및 AI 트랜스포메이션 컨설턴트로서, 
            생성형 AI의 무한한 가능성을 비즈니스 실무에 연결합니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 transition-all rounded-lg font-bold flex items-center gap-2 group shadow-lg shadow-cyan-900/20">
              컨설팅 문의하기 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass hover:bg-white/5 transition-all rounded-lg font-bold">
              포트폴리오 보기
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="w-full aspect-square glass rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
             <motion.div 
               animate={{ 
                 rotate: [0, 360],
                 scale: [1, 1.1, 1] 
               }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-64 h-64 border-2 border-dashed border-cyan-500/30 rounded-full flex items-center justify-center"
             >
                <motion.div 
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center"
                >
                  <Cpu size={80} className="text-cyan-400" />
                </motion.div>
             </motion.div>
             <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-xl border-t border-white/10">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-xs uppercase tracking-tighter text-slate-400">AI Core Efficiency</span>
                   <span className="text-cyan-400 font-bold">99.8%</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "99.8%" }}
                     transition={{ duration: 2, delay: 1 }}
                     className="h-full bg-cyan-400"
                   />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const career: CareerItem[] = [
    { title: "생성형 AI 실무 교육 전문가", description: "다양한 기업 및 기관 대상 AI 툴(제미나이, 챗GPT 등) 활용 강의 수행" },
    { title: "AI 도입 전략 수석 컨설턴트", description: "조직 내 업무 효율 극대화를 위한 AI 워크플로우 설계" },
    { title: "AI 커뮤니티 및 콘텐츠 디렉터", description: "최신 AI 기술 동향 분석 및 실무 적용 사례 전파" }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">Career Summary</h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {career.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 glass rounded-2xl border border-white/5 flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                {idx === 0 ? <BookOpen /> : idx === 1 ? <Layers /> : <Zap />}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services: Service[] = [
    { id: 1, title: "생성형 AI 실무 워크숍", description: "프롬프트 엔지니어링 및 AI 툴 활용 능력 강화 교육", icon: "prompt" },
    { id: 2, title: "AI 기반 업무 자동화 컨설팅", description: "노코드 툴과 AI를 결합한 스마트 워크플레이스 구축", icon: "automation" },
    { id: 3, title: "AI 리터러시 강연", description: "비전공자도 쉽게 이해하는 인공지능 기술의 현재와 미래", icon: "literacy" },
    { id: 4, title: "기업 맞춤형 AI 가이드라인 수립", description: "효율적이고 안전한 AI 도입을 위한 전략 수립", icon: "guideline" }
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">My Solutions</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold">Expert Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: service.id * 0.1 }}
              className="group p-8 glass rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all cursor-default"
            >
              <div className="text-5xl font-orbitron font-bold text-white/5 mb-6 group-hover:text-cyan-500/20 transition-colors">
                0{service.id}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrengthsSection = () => {
  const strengths: Strength[] = [
    { title: "기술의 일상화", description: "복잡한 AI 기술을 누구나 바로 쓸 수 있는 실무 언어로 변환하는 능력" },
    { title: "실전형 커리큘럼", description: "이론을 넘어 즉각적인 결과물을 만들어내는 핸즈온(Hands-on) 중심 강의" },
    { title: "트랜드 분석력", description: "급변하는 AI 생태계에서 핵심 도구를 선별하고 적용하는 통찰력" },
    { title: "솔루션 중심 접근", description: "클라이언트의 업무 현장에 즉시 도입 가능한 실용적인 AI 해결책 제시" }
  ];

  return (
    <section id="strengths" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8">
              Why Choose <br />
              <span className="text-cyan-400">Dain?</span>
            </h2>
            <div className="space-y-12">
              {strengths.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center font-bold text-black">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                    <p className="text-slate-400 text-sm">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square relative">
               {/* Decorative floating elements */}
               <motion.div
                 animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="absolute top-0 right-0 w-48 h-48 glass rounded-2xl border border-cyan-500/30 p-6 flex flex-col justify-end"
               >
                 <div className="text-3xl font-bold text-cyan-400">100+</div>
                 <div className="text-xs uppercase text-slate-400">Lectures Completed</div>
               </motion.div>
               <motion.div
                 animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                 className="absolute bottom-0 left-0 w-48 h-48 glass rounded-2xl border border-purple-500/30 p-6 flex flex-col justify-end"
               >
                 <div className="text-3xl font-bold text-purple-400">95%</div>
                 <div className="text-xs uppercase text-slate-400">Client Satisfaction</div>
               </motion.div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500 rounded-full blur-[80px] opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 glass">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="text-3xl font-orbitron font-bold text-cyan-400 mb-4">DAIN</div>
          <p className="text-slate-400 max-w-sm mb-6">
            미래를 디자인하는 AI 트랜스포메이션의 동반자.
            실무 중심의 교육으로 당신의 가치를 높입니다.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="text-slate-400 text-sm">© 2024 DAIN. All Rights Reserved.</div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2"
          >
            Back to Top <Zap size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <Background3D />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <ExperienceSection />
        <ServicesSection />
        <StrengthsSection />
        
        {/* Simple Contact Banner */}
        <section className="py-24 px-6">
           <div className="max-w-4xl mx-auto glass p-12 rounded-[40px] text-center border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <h2 className="text-4xl font-orbitron font-bold mb-6">Ready to Transform?</h2>
              <p className="text-slate-400 mb-10 text-lg">
                지금 바로 AI 기술을 실무에 도입하여 혁신적인 성과를 만들어보세요.
              </p>
              <a 
                href="mailto:dain@example.com" 
                className="inline-flex px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                Let's Collaborate
              </a>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
