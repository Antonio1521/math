// src/App.jsx — Math Prep Pro: Technion & Ben-Gurion level. RTL, state-based routing.

import React, { useState } from 'react';
import { allQuestions, getQuestionsByTopic, getRandomExamQuestions } from './questionBank';
import GeometryFigure from './components/GeometryFigure';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import {
  ChevronRight,
  CheckCircle,
  Calculator,
  Triangle,
  Ruler,
  Brain,
  ArrowLeft,
  FlaskConical
} from 'lucide-react';

// ——— Syllabus: 3 main sections (with subtopics as labels) ———
const SYLLABUS = [
  {
    id: 'algebra',
    title: 'אלגברה',
    subtitle: 'פרמטרים, אי־שוויונים (ערך מוחלט), אינדוקציה, חזקות ולוגריתמים',
    icon: Calculator,
    color: 'bg-blue-50 text-blue-600',
    topics: ['Parameters', 'Inequalities (Absolute value)', 'Induction', 'Exponents/Logs']
  },
  {
    id: 'trigonometry',
    title: 'טריגונומטריה',
    subtitle: 'זהויות, משוואות עם פרמטרים, אי־שוויונים, חישוב גאומטרי',
    icon: Triangle,
    color: 'bg-purple-50 text-purple-600',
    topics: ['Identities', 'Equations with parameters', 'Inequalities', 'Geometric computation']
  },
  {
    id: 'analytic_geometry',
    title: 'הנדסה אנליטית',
    subtitle: 'משוואות מעגל, משיקים, פרבולה, מקום גאומטרי',
    icon: Ruler,
    color: 'bg-emerald-50 text-emerald-600',
    topics: ['Circle equations', 'Tangents', 'Parabola', 'Locus']
  }
];

// ——— KaTeX: inline $...$ and block $$...$$ ———
function LatexRenderer({ text }) {
  if (!text || typeof text !== 'string') return null;
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$(?!\$)[\s\S]*?\$(?!\$))/g);
  return (
    <span dir="auto">
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const content = part.slice(2, -2).trim();
          try {
            const html = katex.renderToString(content, { displayMode: true, throwOnError: false });
            return (
              <span
                key={index}
                className="block my-2"
                dangerouslySetInnerHTML={{ __html: html }}
                dir="ltr"
              />
            );
          } catch {
            return <span key={index}>{part}</span>;
          }
        }
        if (part.startsWith('$') && part.endsWith('$') && part.length > 1) {
          const content = part.slice(1, -1).trim();
          try {
            const html = katex.renderToString(content, { displayMode: false, throwOnError: false });
            return (
              <span
                key={index}
                className="inline align-middle mx-0.5"
                dangerouslySetInnerHTML={{ __html: html }}
                dir="ltr"
              />
            );
          } catch {
            return <span key={index}>{part}</span>;
          }
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

// ——— Main App ———
export default function App() {
  const [view, setView] = useState('menu');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isExamMode, setIsExamMode] = useState(false);
  const [activeSyllabusItem, setActiveSyllabusItem] = useState(null);

  const currentQuestion = questions[currentIndex] ?? null;
  const isLast = questions.length > 0 && currentIndex === questions.length - 1;

  const startSyllabusTopic = (syllabusItem) => {
    const list = getQuestionsByTopic(syllabusItem.id);
    if (list.length === 0) {
      return;
    }
    setQuestions(list);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsExamMode(false);
    setActiveSyllabusItem(syllabusItem);
    setView('question');
  };

  const startExamSimulation = () => {
    const list = getRandomExamQuestions(10);
    setQuestions(list);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsExamMode(true);
    setActiveSyllabusItem(null);
    setView('question');
  };

  const backToMenu = () => {
    setView('menu');
    setQuestions([]);
    setActiveSyllabusItem(null);
  };

  const goNext = () => {
    if (isLast) {
      backToMenu();
    } else {
      setCurrentIndex((i) => i + 1);
      setShowAnswer(false);
    }
  };

  // ——— VIEW: Menu (Syllabus + Exam simulation) ———
  if (view === 'menu') {
    return (
      <div
        className="max-w-md mx-auto min-h-screen bg-gray-50 text-gray-800 pb-12 overflow-hidden"
        dir="rtl"
      >
        <div className="bg-white p-8 pb-10 shadow-sm rounded-b-[40px] mb-6 relative z-10">
          <div className="flex items-center gap-2 mb-3 opacity-70">
            <Brain className="text-blue-600 w-5 h-5" aria-hidden />
            <span className="font-bold text-xs tracking-widest uppercase text-gray-500">
              Math Prep Pro
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 leading-tight">
            מוכנים <br />
            <span className="text-blue-600">למבחן?</span>
          </h1>
          <p className="mt-4 text-gray-500 text-sm font-medium leading-relaxed">
            תרגול ברמת מבחן — טכניון ובן־גוריון.
          </p>
        </div>

        <div className="px-5 space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">
            מצב סילבוס
          </p>
          {SYLLABUS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => startSyllabusTopic(item)}
              className="group w-full bg-white p-4 pl-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-right"
            >
              <div className={`p-3.5 rounded-2xl ${item.color} shadow-inner`}>
                <item.icon className="w-6 h-6" aria-hidden />
              </div>
              <div className="flex-1 text-right">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mt-0.5 leading-snug">
                  {item.subtitle}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                <ArrowLeft size={18} aria-hidden />
              </div>
            </button>
          ))}

          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6 mb-2 px-1">
            סימולציה
          </p>
          <button
            type="button"
            onClick={startExamSimulation}
            className="group w-full bg-gradient-to-l from-slate-800 to-slate-700 text-white p-4 pl-6 rounded-3xl shadow-md flex items-center gap-4 hover:shadow-lg hover:from-slate-700 hover:to-slate-600 active:scale-[0.99] transition-all duration-200 text-right"
          >
            <div className="p-3.5 rounded-2xl bg-white/10">
              <FlaskConical className="w-6 h-6" aria-hidden />
            </div>
            <div className="flex-1 text-right">
              <h3 className="font-bold text-lg">סימולציית מבחן</h3>
              <p className="text-xs text-white/80 font-medium mt-0.5">
                שאלות אקראיות מכל הנושאים
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ArrowLeft size={18} aria-hidden />
            </div>
          </button>
        </div>
      </div>
    );
  }

  // ——— VIEW: Question (Syllabus topic or Exam) ———
  if (view === 'question' && currentQuestion) {
    const headerTitle = isExamMode
      ? `סימולציה — שאלה ${currentIndex + 1} מתוך ${questions.length}`
      : activeSyllabusItem
        ? activeSyllabusItem.title
        : '';

    return (
      <div
        className="max-w-md mx-auto min-h-screen bg-gray-100 flex flex-col shadow-2xl relative overflow-hidden"
        dir="rtl"
      >
        <header className="bg-white px-4 py-4 shadow-sm flex items-center justify-between z-20 shrink-0">
          <button
            type="button"
            onClick={backToMenu}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="חזרה"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
          <div className="flex flex-col items-center min-w-0">
            <span className="font-bold text-gray-800 text-sm truncate max-w-[180px] text-center">
              {headerTitle}
            </span>
            <div className="flex gap-1.5 mt-2 flex-row-reverse justify-center">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-10" />
        </header>

        <main className="flex-1 overflow-y-auto p-4 pb-28 scroll-smooth">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 min-h-[35vh] flex flex-col">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-4">
              שאלה {currentIndex + 1}
            </p>
            {currentQuestion.visualType && (
              <GeometryFigure
                type={currentQuestion.visualType}
                params={currentQuestion.visualParams}
              />
            )}
            <div className="text-lg font-medium text-gray-800 leading-relaxed text-right">
              <LatexRenderer text={currentQuestion.question} />
            </div>
          </div>

          {showAnswer && (
            <div className="mt-4 bg-white rounded-3xl shadow-lg border border-green-100 p-5 text-right animate-fade-in">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle size={20} strokeWidth={2.5} aria-hidden />
                </div>
                <span className="font-bold text-green-700">תשובה</span>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-4 text-center" dir="ltr">
                <LatexRenderer text={currentQuestion.answer} />
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  הסבר
                </p>
                <div className="text-gray-600 text-sm leading-relaxed font-medium">
                  <LatexRenderer text={currentQuestion.explanation} />
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 border-t border-gray-200 pb-safe z-30">
          {!showAnswer ? (
            <button
              type="button"
              onClick={() => setShowAnswer(true)}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all text-lg"
            >
              הצג פתרון
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all text-lg flex items-center justify-center gap-2"
            >
              <span>{isLast ? 'סיום' : 'לשאלה הבאה'}</span>
              <ArrowLeft size={20} aria-hidden />
            </button>
          )}
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir="rtl">
      <p className="text-gray-500">טוען...</p>
    </div>
  );
}
