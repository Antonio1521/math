// src/data.js
import { allQuestions } from './questionBank'; // Импортируем базу задач

// Функция-помощник для фильтрации
const getQuestionsByTopic = (topicId) => {
  return allQuestions.filter(q => q.topicId === topicId);
};

export const syllabus = [
  {
    id: 1,
    topicId: 'algebra', // Связующий ключ
    title: "אלגברה",
    subtitle: "טכניקה אלגברית, חזקות ושורשים",
    icon: "Calculator",
    color: "bg-blue-50 text-blue-600",
    questions: getQuestionsByTopic('algebra') // Автоматически тянет все задачи с этим ID
  },
  {
    id: 2,
    topicId: 'trigo',
    title: "טריגונומטריה",
    subtitle: "זהויות, משוואות ומשולשים",
    icon: "Triangle",
    color: "bg-purple-50 text-purple-600",
    questions: getQuestionsByTopic('trigo')
  },
  {
    id: 3,
    topicId: 'geometry',
    title: "הנדסה אנליטית",
    subtitle: "קו ישר ומעגל",
    icon: "Ruler",
    color: "bg-green-50 text-green-600",
    questions: getQuestionsByTopic('geometry')
  }
];

// --- СПРАВОЧНИК (ОСТАВЛЯЕМ КАК БЫЛО) ---
export const cheatSheet = [
  {
    category: "טריגונומטריה (Trigo)",
    content: [
      { label: "זהות פיתגורית", value: "$$\\sin^2 x + \\cos^2 x = 1$$" },
      { label: "טנגנס", value: "$$\\tan x = \\frac{\\sin x}{\\cos x}$$" },
      { label: "זווית כפולה", value: "$$\\sin 2x = 2\\sin x \\cos x$$" },
      { label: "טבלת ערכים", value: "$$\\begin{array}{c|c|c|c} \\alpha & 30^\\circ & 45^\\circ & 60^\\circ \\\\ \\hline \\sin & 0.5 & \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{3}}{2} \\\\ \\hline \\cos & \\frac{\\sqrt{3}}{2} & \\frac{\\sqrt{2}}{2} & 0.5 \\end{array}$$" }
    ]
  },
  {
    category: "אלגברה (Algebra)",
    content: [
      { label: "כפל מקוצר 1", value: "$$(a+b)^2 = a^2 + 2ab + b^2$$" },
      { label: "כפל מקוצר 2", value: "$$(a-b)^2 = a^2 - 2ab + b^2$$" },
      { label: "הפרש ריבועים", value: "$$a^2 - b^2 = (a-b)(a+b)$$"},
      { label: "חוקי חזקות", value: "$$a^n \\cdot a^m = a^{n+m}$$" },
      { label: "שורשים", value: "$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$" }
    ]
  },
  {
    category: "גאומטריה (Geometry)",
    content: [
      { label: "משפט פיתגורס", value: "$$a^2 + b^2 = c^2$$" },
      { label: "מרחק בין נקודות", value: "$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$" },
      { label: "משוואת מעגל", value: "$$(x-a)^2 + (y-b)^2 = R^2$$" }
    ]
  }
];