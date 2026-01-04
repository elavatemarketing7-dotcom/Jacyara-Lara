
import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { DATA, QUIZ_QUESTIONS } from './constants';
import { 
  ChevronRight, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Instagram, 
  MapPin, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Star, 
  Users, 
  Zap, 
  XCircle 
} from 'lucide-react';

// --- Sub-components ---

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-card border-b border-white/20">
    <div className="flex flex-col">
      <span className="font-serif text-xl tracking-widest font-bold uppercase">JACYARA LARA</span>
      <span className="text-[10px] uppercase tracking-widest opacity-70 font-medium">Harmonização Facial</span>
    </div>
    <a href={DATA.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-black text-white rounded-full">
      <Instagram size={18} />
    </a>
  </header>
);

const QuizOverlay = ({ onComplete, onSkip }: { onComplete: (answers: string[]) => void, onSkip: () => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const progress = ((step + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    if (step < QUIZ_QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-900/60 backdrop-blur-md flex flex-col items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 -z-10 opacity-20">
        <img src={DATA.mainPhoto} alt="" className="w-full h-full object-cover grayscale blur-sm" />
      </div>

      <div className="w-full max-w-sm bg-white rounded-[2.5rem] premium-shadow overflow-hidden flex flex-col border border-white/20 my-auto">
        <div className="relative h-40 bg-neutral-900 flex flex-col items-center justify-center pt-2">
            <span className="text-white/40 text-[9px] uppercase tracking-[0.4em] mb-1 font-bold">Avaliação Exclusiva</span>
            <span className="text-white text-xs font-serif tracking-widest uppercase mb-10">Dra. Jacyara Lara</span>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-neutral-100 shadow-xl">
                <img src={DATA.mainPhoto} alt="Dra. Jacyara" className="w-full h-full object-cover" />
            </div>
        </div>
        
        <div className="pt-14 pb-6 px-6 flex flex-col items-center">
          <div className="w-full h-1 bg-neutral-100 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-emerald-600 transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
          
          <h2 className="text-lg font-serif text-center mb-6 leading-relaxed px-2 text-neutral-800">
            {QUIZ_QUESTIONS[step].question}
          </h2>
          
          <div className="grid grid-cols-1 gap-2 w-full">
            {QUIZ_QUESTIONS[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(opt)}
                className="w-full py-3 px-5 text-xs text-left border border-neutral-100 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] transition-all flex justify-between items-center group bg-neutral-50/50"
              >
                <span className="font-semibold text-neutral-700">{opt}</span>
                <ChevronRight size={14} className="text-neutral-300 group-hover:text-black" />
              </button>
            ))}
          </div>

          <button onClick={onSkip} className="mt-6 text-[9px] text-neutral-400 uppercase tracking-widest underline underline-offset-4 font-bold">
            Pular e ver o site
          </button>
        </div>
      </div>
    </div>
  );
};

const AnalyzingView = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col p-6 items-center justify-center text-center">
      <div className="w-full max-w-sm space-y-8">
        <div className="w-20 h-20 rounded-full border-2 border-emerald-500/30 mx-auto overflow-hidden animate-pulse shadow-2xl">
          <img src={DATA.mainPhoto} alt="Dra. Jacyara" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="space-y-4">
          <span className="text-emerald-500 text-[9px] uppercase tracking-[0.5em] font-bold block">Dra. Jacyara Lara</span>
          <h2 className="text-xl font-serif tracking-[0.2em] uppercase opacity-90">Analisando Perfil</h2>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden max-w-[160px] mx-auto">
            <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuizResult = ({ onNext, answers }: { onNext: () => void, answers: string[] }) => {
  const buildWhatsappUrl = () => {
    const baseText = "Oii Dra. Jacyara! Acabei de finalizar o quiz no seu site e gostaria de uma avaliação personalizada.\n\nMinhas respostas:\n";
    const answersText = QUIZ_QUESTIONS.map((q, i) => `- ${q.question}: ${answers[i]}`).join('\n');
    const encodedText = encodeURIComponent(baseText + answersText);
    return `https://api.whatsapp.com/send/?phone=5537998613910&text=${encodedText}&type=phone_number&app_absent=0`;
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col p-4 items-center justify-center text-center overflow-y-auto">
      <div className="w-full max-w-sm py-4">
        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-5 overflow-hidden mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-white/30 mx-auto mb-3 overflow-hidden shadow-2xl">
            <img src={DATA.mainPhoto} alt="Dra. Jacyara" className="w-full h-full object-cover" />
          </div>
          <span className="inline-block py-0.5 px-3 bg-emerald-500/20 text-emerald-400 rounded-full text-[8px] font-bold tracking-[0.3em] uppercase mb-2">
            Perfil Compatível
          </span>
          <h2 className="text-xl font-serif mb-2 leading-tight text-white">Perfil Compatível. <br/><span className="italic text-neutral-400">Você é a Paciente ideal.</span></h2>
          <p className="text-[11px] text-neutral-400 leading-relaxed mb-6 px-2">
            Com base nas suas respostas, o Método da <span className="text-white font-bold">Dra. Jacyara Lara</span> entrega a naturalidade e segurança que você procura.
          </p>
          <div className="flex flex-col gap-2">
            <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-pulse w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-[10px] uppercase tracking-wider text-white">
              <MessageCircle size={14} /> 1- Enviar minha avaliação a DRA
            </a>
            <a href={DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-[10px] uppercase tracking-wider text-neutral-200">
               <Zap size={14} className="text-yellow-400" /> 2- CHAMAR NO WHATSSAP SEM COMPROMISSO
            </a>
            <button onClick={onNext} className="w-full py-3.5 border border-white/10 bg-neutral-800 hover:bg-neutral-700 rounded-xl font-bold text-neutral-400 text-[10px] uppercase tracking-wider flex items-center justify-center gap-2">
              <XCircle size={14} /> 3- CONTINUAR NO SITE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((img, idx) => (
        <div key={idx} className="aspect-square bg-neutral-100 rounded-xl overflow-hidden cursor-pointer active:scale-95 transition-transform" onClick={() => setSelected(img)}>
          <img src={img} alt={`Resultado ${idx}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
      {selected && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="Resultado ampliado" className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10" />
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<ViewState>('intro');
  const [capturedAnswers, setCapturedAnswers] = useState<string[]>([]);

  const goToSite = () => setView('site');
  const startQuiz = () => setView('quiz');
  
  const finishQuiz = (answers: string[]) => {
    setCapturedAnswers(answers);
    setView('analyzing');
    setTimeout(() => setView('result'), 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'intro') {
    return (
      <div className="min-h-screen flex flex-col p-6 items-center justify-center relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <img src={DATA.mainPhoto} alt="" className="w-full h-full object-cover opacity-30 grayscale blur-[4px] scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
        </div>
        <div className="w-full max-w-sm text-center z-10">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 premium-shadow border-4 border-white/20 overflow-hidden bg-white/5 backdrop-blur-lg">
            <img src={DATA.mainPhoto} alt="Dra Jacyara Lara" className="w-full h-full object-cover" />
          </div>
          <span className="text-emerald-400 text-[10px] uppercase tracking-[0.5em] font-bold block mb-3">Dra. Jacyara Lara</span>
          <h1 className="text-3xl font-serif mb-3 leading-tight text-white">Como deseja<br/><span className="italic text-neutral-300">começar?</span></h1>
          <div className="flex flex-col gap-3 px-4">
            <button onClick={startQuiz} className="w-full py-4 bg-white text-neutral-900 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-3 active:scale-95">
              <Sparkles size={18} className="text-emerald-600" /> PASSAR PELO QUIZ
            </button>
            <button onClick={goToSite} className="w-full py-4 bg-transparent border border-white/20 text-white rounded-2xl font-bold text-base shadow-sm flex items-center justify-center gap-3 active:scale-95">
              SITE DIRETO <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'quiz') return <QuizOverlay onComplete={finishQuiz} onSkip={goToSite} />;
  if (view === 'analyzing') return <AnalyzingView />;
  if (view === 'result') return <QuizResult onNext={goToSite} answers={capturedAnswers} />;

  return (
    <div className="flex flex-col min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 bg-white overflow-hidden relative">
        <div className="absolute top-20 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-[100px] opacity-60 -z-10"></div>
        <div className="flex flex-col items-center">
          <div className="w-full mb-10 relative max-w-[300px]">
             <div className="relative z-10 w-full rounded-[3rem] overflow-hidden premium-shadow border-4 border-white">
                <img src={DATA.mainPhoto} alt="Jacyara Lara" className="w-full object-cover" />
             </div>
             <div className="absolute -top-3 -left-3 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20 flex flex-col gap-0.5 border border-neutral-100 animate-float">
                <span className="text-[9px] uppercase tracking-widest font-bold text-emerald-600">Especialista</span>
                <span className="text-[11px] font-serif italic text-neutral-800">Dra. Jacyara Lara</span>
             </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-5 leading-tight tracking-tight">Realçando sua melhor versão com <span className="italic font-normal">naturalidade</span>.</h1>
            <p className="text-sm text-neutral-500 mb-8 leading-relaxed max-w-xs mx-auto">Olá, eu sou <span className="text-neutral-900 font-bold underline decoration-emerald-200 underline-offset-4 font-bold">Jacyara Lara</span>. Transformo sua autoestima respeitando sua identidade.</p>
            <div className="flex flex-col gap-2">
              <a href={DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-pulse w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2">
                <MessageCircle size={20} /> AGENDAR CONSULTA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="flex flex-col gap-10">
          <div className="w-full rounded-[2.5rem] overflow-hidden premium-shadow">
            <img src={DATA.otherPhotos[0]} alt="Dra Jacyara" className="w-full object-cover" />
          </div>
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-2xl font-serif leading-tight">O rosto por trás da técnica 💚</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">Atendimento humanizado e focado em você. Minha missão é destacar o que você tem de mais belo.</p>
            <ul className="space-y-3 pt-4 text-left">
              {["Avaliação individualizada", "Produtos Premium", "Foco em resultados naturais", "Suporte completo"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-neutral-700 font-bold">
                  <CheckCircle2 size={12} className="text-emerald-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-20 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif mb-3">Transformações que<br/><span className="italic">inspiram</span> confiança.</h2>
        </div>
        <ImageGallery images={DATA.gallery} />
      </section>

      {/* Bastidores */}
      <section className="py-20 bg-neutral-50 overflow-hidden">
         <div className="px-6 mb-12">
            <h2 className="text-2xl font-serif leading-tight">O meu dia a dia 💚</h2>
         </div>
         <div className="flex overflow-x-auto gap-4 px-6 pb-6 no-scrollbar">
            {DATA.lifestyleGallery.map((img, i) => (
              <div key={i} className="shrink-0 w-64 aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                <img src={img} alt={`Expert ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
         </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: <ShieldCheck className="text-emerald-400" />, title: "Segurança Total", desc: "Protocolos rigorosos e materiais certificados." },
            { icon: <Heart className="text-pink-400" />, title: "Humanização", desc: "Atendimento direto e próximo com a Dra." },
            { icon: <Star className="text-yellow-400" />, title: "Efeito Natural", desc: "Beleza sem exageros, apenas refinamento sutil." }
          ].map((card, idx) => (
            <div key={idx} className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-serif mb-2">{card.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif mb-6 leading-tight">Invista em <span className="italic">você.</span></h2>
        <a href={DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-pulse block w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl uppercase tracking-widest">
          QUERO SABER MAIS
        </a>
        <p className="mt-8 flex items-center justify-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
          <MapPin size={12} className="text-emerald-500" /> {DATA.location}
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-neutral-50 border-t border-neutral-100 flex flex-col items-center text-center gap-6">
        <span className="font-serif text-xl font-bold uppercase tracking-widest">JACYARA LARA</span>
        <div className="flex gap-4">
          <a href={DATA.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm border border-neutral-100"><Instagram size={20} /></a>
          <a href={DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm border border-neutral-100"><MessageCircle size={20} /></a>
        </div>
        <span className="font-signature text-4xl text-neutral-800">Jacyara Lara</span>
        <p className="text-[9px] text-neutral-400 uppercase tracking-widest">© 2024 • Harmonização Facial de 💚</p>
      </footer>
    </div>
  );
}
