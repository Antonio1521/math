// src/questionBank.js
// Exam C / Moed Milluim — 30–40 questions, ≥50% with diagrams.
// Uses `topic` for app: 'algebra' | 'trigonometry' | 'analytic_geometry'.

export const allQuestions = [
  // ========== ALGEBRA (parameters + substitution, inequalities) — no visuals ==========
  {
    id: 'alg_1',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו ערכי הפרמטר $m$ למשוואה $$(m-1)4^x - (m-3)2^{x+1} + m^2-9 = 0$$ יש בדיוק פתרון ממשי חיובי אחד? (בדוק מקרה $m=1$ ומקרה ריבועי.)',
    answer: '$$m = 1 \\quad \\text{או} \\quad m = 5$$',
    explanation:
      'נציב $t = 2^x > 0$. מקרה $m=1$: מתקבל $4t-8=0$ אז $t=2$, $x=1>0$. מקרה $m \\neq 1$: ריבועית ב-$t$; נדרוש שורש כפול חיובי או בדיוק שורש חיובי אחד. אחרי חישוב $\\Delta$ ווייטה: $m=1$ או $m=5$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_2',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו ערכי $m$ למשוואה $m\\cdot 4^x - (2m+1)2^x + m + 2 = 0$ יש בדיוק אחד פתרון ממשי חיובי? (הנח $t=2^x$; בדוק $m=0$.)',
    answer: '$$m = 0 \\quad \\text{או} \\quad m = \\frac{1}{4}$$',
    explanation:
      'הצבה $t=2^x$. מקרה $m=0$: $-t+2=0$ → $t=2$, $x=1$. מקרה $m \\neq 0$: פתרון יחיד כאשר $\\Delta=0$ נותן $m=1/4$, ואז $t=3$ חיובי. התשובה $m=0$ או $m=1/4$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_3',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'נתונה המשוואה $2\\cdot 4^x - m\\cdot 2^{x+1} + 2m - 4 = 0$. עבור אילו $m$ יש בדיוק פתרון אחד ממשי חיובי?',
    answer: '$$m = 2$$',
    explanation:
      'הצבה $t=2^x$: $t^2 - m\\, t + (m-2)=0$. כאשר $m=2$: $t^2-2t=0$ → $t=0$ או $t=2$; רק $t=2$ תקף, אז $x=1>0$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_4',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו ערכי $m$ לאי-השוויון $|x^2 - 2x - 3| + 2 \\le m$ אין אף פתרון ממשי?',
    answer: '$$m < 2$$',
    explanation:
      'מינימום של $|x^2-2x-3|$ הוא $0$ (ב-$x=-1,3$). לכן $\\min f(x)=2$. אין פתרון כאשר $m<2$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_5',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו ערכי $m$ לאי-השוויון $|x^2 - 4x + 3| + 1 \\le m$ אין אף פתרון ממשי?',
    answer: '$$m < 1$$',
    explanation:
      'מינימום $|x^2-4x+3|$ הוא $0$ (ב-$x=1,3$). לכן $\\min f(x)=1$. אין פתרון כאשר $m<1$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_6',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו $m$ לאי-השוויון $|x^2 - 6|x| + 8| \\le m$ אין אף פתרון? (השתמש ב-$t=|x|$.)',
    answer: '$$m < 0$$',
    explanation:
      'נציב $t=|x|$. המינימום של $|t^2-6t+8|$ הוא $0$ (ב-$t=2,4$). אין פתרון כאשר $m<0$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_7',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו $m$ למשוואה $4^x - m\\cdot 2^{x+1} + 3m - 4 = 0$ יש שני פתרונות ממשיים שונים? (הנח $t=2^x$.)',
    answer: '$$m > 4 \\quad \\text{או} \\quad m < 1$$',
    explanation:
      'הצבה $t=2^x$: $t^2 - 2m\\, t + (3m-4)=0$. שני שורשים ממשיים שונים כאשר $\\Delta = 4m^2 - 4(3m-4) > 0$, כלומר $m^2-3m+4>0$. נוסף: שני השורשים חיוביים (לפי וייטה) כאשר $m>4$ או תנאי מתאים. לאחר ניתוח: $m>4$ או $m<1$ (עם בדיקת חיוביות $t$).',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_8',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו $m$ לאי-השוויון $|x^2 - 1| + |x| \\le m$ יש לפחות פתרון אחד? (מצא את המינימום של האגף השמאלי.)',
    answer: '$$m \\ge 1$$',
    explanation:
      'המינימום של $|x^2-1|+|x|$ מתקבל (לאחר פיצול cases) וערך מינימלי $1$. יש פתרון כאשר $m \\ge 1$.',
    visualType: null,
    visualParams: null
  },

  // ========== TRIGONOMETRY — comparison (no visuals) + geometric (with visuals) ==========
  {
    id: 'trig_1',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'השווה (ברדיאנים): $A = \\sin(\\pi - 3)$ ו-$B = \\cos(6)$. קבע: $A>B$, $A<B$, או $A=B$.',
    answer: '$$A < B$$',
    explanation:
      '$\\pi-3 \\approx 0.14$ ברביע ראשון — $A$ קטן וחיובי. $6$ רדיאן $\\approx 6-2\\pi$ ברביע רביעי — $B=\\cos(6)\\approx 0.96$. לכן $A<B$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'trig_2',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'נתון $\\alpha \\in (-3\\pi/2, -\\pi)$. השווה $\\cos(-\\alpha)$ ל-$\\sin(\\alpha)$.',
    answer: '$$\\cos(-\\alpha) > \\sin(\\alpha)$$',
    explanation:
      'ברביע שלישי $\\sin(\\alpha)<0$ ו-$\\cos(\\alpha)=\\cos(-\\alpha)<0$. $|\\cos(\\alpha)|<|\\sin(\\alpha)|$ שם, ולכן $\\cos(\\alpha)>\\sin(\\alpha)$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'trig_3',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'השווה (ברדיאנים): $A = \\tan(2)$ ו-$B = \\tan(3)$. קבע: $A>B$, $A<B$, או $A=B$.',
    answer: '$$A < B$$',
    explanation:
      '$2$ רדיאן ברביע שני — $\\tan(2)<0$. $3$ רדיאן ברביע שלישי — $\\tan(3)>0$. לכן $A<B$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'trig_4',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'השווה: $A = \\sin(1)$ (רדיאן) ל-$B = \\sin(1^\\circ)$. קבע: $A>B$, $A<B$, או $A=B$.',
    answer: '$$A > B$$',
    explanation:
      '$1$ רדיאן $\\approx 57^\\circ$ — $\\sin(1)$ קרוב ל-$0.84$. $\\sin(1^\\circ)\\approx 0.017$. לכן $A \\gg B$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'trig_5',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'השווה (ברדיאנים): $A = \\cos(4)$ ו-$B = \\cos(5)$. קבע: $A>B$, $A<B$, או $A=B$.',
    answer: '$$A < B$$',
    explanation:
      '$4$ רדיאן ברביע שלישי — $\\cos(4)<0$. $5$ רדיאן ברביע רביעי — $\\cos(5)>0$. לכן $A<B$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'trig_6',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'במשולש ישר זווית (ראה שרטוט) הניצב התחתון באורך $a$, הניצב האנכי $b$, והיתר $c$. הזווית מול $b$ היא $30^\\circ$. מצא את $a$ כפונקציה של $c$.',
    answer: '$$a = \\frac{c\\sqrt{3}}{2}$$',
    explanation:
      'לפי קוסינוס: $\\cos(30^\\circ) = \\frac{a}{c} = \\frac{\\sqrt{3}}{2}$, ולכן $a = c\\sqrt{3}/2$.',
    visualType: 'triangle_right',
    visualParams: { bottom: 'a', side: 'b', hypotenuse: 'c', angle: '30°' }
  },
  {
    id: 'trig_7',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'במשולש ישר זווית (שרטוט) נתון: היתר $20$, ניצב אנכי $10$. מה אורך הניצב התחתון ומה הזווית החדה בראש?',
    answer: '$$\\text{ניצב } 10\\sqrt{3}, \\quad \\text{זווית } 30^\\circ$$',
    explanation:
      'לפי סינוס: $\\sin(\\alpha) = 10/20 = 1/2$ → $\\alpha=30^\\circ$. הניצב התחתון $= 20\\cos(30^\\circ) = 10\\sqrt{3}$.',
    visualType: 'triangle_right',
    visualParams: { bottom: '?', side: '10', hypotenuse: '20', angle: 'α' }
  },
  {
    id: 'trig_8',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'במשולש (שרטוט) נתון: צלע $a=10$ מול זווית $30^\\circ$, וזווית נוספת $45^\\circ$. מצא את אורך הצלע שמול $45^\\circ$ (משפט הסינוסים).',
    answer: '$$10\\sqrt{2}$$',
    explanation:
      'משפט הסינוסים: $\\frac{10}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ}$ → $b = 10\\cdot\\frac{\\sqrt{2}/2}{1/2} = 10\\sqrt{2}$.',
    visualType: 'general_triangle',
    visualParams: { a: '10', b: '?', c: 'c', A: '30°', B: '45°', C: '105°' }
  },
  {
    id: 'trig_9',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'במשולש (שרטוט) נתונות צלעות $a=7$, $b=8$, וזווית $C=60^\\circ$. מצא את הצלע $c$ (משפט הקוסינוסים).',
    answer: '$$c = \\sqrt{57}$$',
    explanation:
      'משפט הקוסינוסים: $c^2 = a^2+b^2 - 2ab\\cos C = 49+64-56 = 57$, ולכן $c=\\sqrt{57}$.',
    visualType: 'general_triangle',
    visualParams: { a: '7', b: '8', c: '?', A: 'A', B: 'B', C: '60°' }
  },
  {
    id: 'trig_10',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'עבור אילו ערכי $k$ למשוואה $\\cos(2x) = 2k - 3$ יש פתרון ממשי?',
    answer: '$$1 \\le k \\le 2$$',
    explanation:
      'טווח הקוסינוס $[-1,1]$. דרוש $-1 \\le 2k-3 \\le 1$ → $2 \\le 2k \\le 4$ → $1 \\le k \\le 2$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'trig_11',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'פתור את אי-השוויון $2\\sin^2 x - \\sin x - 1 < 0$ בתחום $[0, 2\\pi]$.',
    answer: '$$x \\in (0, 7\\pi/6) \\cup (11\\pi/6, 2\\pi)$$',
    explanation:
      'נציב $t=\\sin x$. מתקבל $2t^2-t-1<0$ → $-1/2 < t < 1$. ב-$[0,2\\pi]$: $\\sin x = -1/2$ ב-$7\\pi/6$, $11\\pi/6$. הפתרון $x \\in (0, 7\\pi/6) \\cup (11\\pi/6, 2\\pi)$.',
    visualType: null,
    visualParams: null
  },

  // ========== ANALYTIC GEOMETRY — most with circle_tangent / parabola_cut ==========
  {
    id: 'geo_1',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'נתון מעגל $x^2+y^2=R^2$ (ראה שרטוט). מנקודה חיצונית $A(x_0,y_0)$ מעבירים משיק למעגל. מצא את משוואת המשיק (באמצעות הנקודה על המעגל או תנאי משיק).',
    answer: '$$x_0 x + y_0 y = R^2 \\quad \\text{(אם הנקודה על המעגל)}$$',
    explanation:
      'אם הנקודה על המעגל: משוואת המשיק בנקודה $(x_0,y_0)$ היא $x_0 x + y_0 y = R^2$. אם הנקודה חיצונית: מוצאים נקודת ההשקה ומשתמשים באותה צורה.',
    visualType: 'circle_tangent',
    visualParams: { cx: 0, cy: 0, r: 4, externalPoint: [6, 0] }
  },
  {
    id: 'geo_2',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'המעגל $(x-2)^2 + y^2 = 9$ (שרטוט) משיק לישר אנכי. מצא את משוואת המשיק העובר דרך הנקודה החיצונית $(5,3)$.',
    answer: '$$x=5 \\quad \\text{או} \\quad 4x-3y-11=0$$',
    explanation:
      'מרכז $(2,0)$, רדיוס $3$. מרחק המרכז מ-$x=5$ הוא $3$ — משיק. משיק נוסף עם שיפוע $m$: מרחק מ-$(2,0)$ ל-$y-3=m(x-5)$ שווה $3$ נותן $m=4/3$.',
    visualType: 'circle_tangent',
    visualParams: { cx: 2, cy: 0, r: 3, externalPoint: [5, 3] }
  },
  {
    id: 'geo_3',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'מצא את ערכי $k$ עבורם הישר $y=kx$ משיק למעגל $(x-3)^2+y^2=4$ (ראה שרטוט).',
    answer: '$$k = \\pm \\frac{2\\sqrt{5}}{5}$$',
    explanation:
      'מרחק המרכז $(3,0)$ מהישר $kx-y=0$ הוא $|3k|/\\sqrt{k^2+1}$. תנאי משיק: $|3k|/\\sqrt{k^2+1}=2$. ריבוע: $9k^2=4(k^2+1)$ → $5k^2=4$ → $k=\\pm 2/\\sqrt{5}$.',
    visualType: 'circle_tangent',
    visualParams: { cx: 3, cy: 0, r: 2, tangentThroughOrigin: true }
  },
  {
    id: 'geo_4',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'המעגל $(x-m)^2+(y-2m)^2=4m^2-4$ מוגדר (רדיוס ממשי) ומשיק לציר $y$. עבור אילו $m$?',
    answer: '$$m = \\pm \\frac{2}{\\sqrt{3}}$$',
    explanation:
      'רדיוס ממשי: $4m^2-4>0$ → $|m|>1$. מרחק המרכז $(m,2m)$ מציר $y$ הוא $|m|$. משיק: $|m|=\\sqrt{4m^2-4}$ → $m^2=4m^2-4$ → $3m^2=4$ → $m=\\pm 2/\\sqrt{3}$.',
    visualType: 'circle_tangent',
    visualParams: { cx: 2, cy: 4, r: 2 }
  },
  {
    id: 'geo_5',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'עבור אילו ערכי $k$ הישר $y=kx+2$ חותך את המעגל $x^2+y^2=4$ בשתי נקודות שונות?',
    answer: '$$k \\neq 0$$',
    explanation:
      'הצבה נותנת $(1+k^2)x^2+4kx=0$. שורשים $x=0$ ו-$x=-4k/(1+k^2)$. שני חיתוכים כאשר $k \\neq 0$ (אחרת רק $(0,2)$ — משיק).',
    visualType: null,
    visualParams: null
  },
  {
    id: 'geo_6',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'לאילו ערכי $k$ הישר $y=k$ (שרטוט) חותך את הפרבולה $y=x^2-4x+5$ בשתי נקודות?',
    answer: '$$k > 1$$',
    explanation:
      'קודקוד הפרבולה ב-$(2,1)$ (מינימום). הישר $y=k$ חותך בשתי נקודות כאשר $k$ מעל ערך הקודקוד, כלומר $k>1$.',
    visualType: 'parabola_cut',
    visualParams: { a: 0.25, lineThroughOrigin: false }
  },
  {
    id: 'geo_7',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'עבור אילו ערכי $k$ הישר $y=kx$ חותך את הפרבולה $y=x^2-2x+3$ בשתי נקודות שונות? (ראה שרטוט.)',
    answer: '$$k < -2-2\\sqrt{3} \\quad \\text{או} \\quad k > -2+2\\sqrt{3}$$',
    explanation:
      'הצבה: $x^2-(2+k)x+3=0$. שני חיתוכים כאשר $\\Delta=(2+k)^2-12>0$ → $k^2+4k-8>0$ → $k<-2-2\\sqrt{3}$ או $k>-2+2\\sqrt{3}$.',
    visualType: 'parabola_line',
    visualParams: { a: 0.25, lineThroughOrigin: true }
  },
  {
    id: 'geo_8',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'מצא את מקום הגאומטרי של כל הנקודות שמרחקן מ-$(2,0)$ שווה למרחקן מישר $x=-2$.',
    answer: '$$y^2 = 8x$$',
    explanation:
      'מרחק מ-$(x,y)$ ל-$(2,0)$: $\\sqrt{(x-2)^2+y^2}$. מרחק ל-$x=-2$: $|x+2|$. השוואה וריבוע: $y^2=8x$ (פרבולה).',
    visualType: 'parabola_cut',
    visualParams: { a: 0.15 }
  },
  {
    id: 'geo_9',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'המעגל $(x-m)^2+(y+2)^2=m^2-10$ מוגדר (רדיוס ממשי) רק כאשר:',
    answer: '$$|m| > \\sqrt{10}$$',
    explanation:
      'דרוש $R^2 = m^2-10 > 0$ → $m^2>10$ → $|m|>\\sqrt{10}$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'geo_10',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'נתונה הפרבולה $y=x^2$ והישר $y=k$ (שרטוט). עבור אילו $k$ יש שני חיתוכים?',
    answer: '$$k > 0$$',
    explanation:
      'המשוואה $x^2=k$ יש שני פתרונות כאשר $k>0$ (נקודות $(\\pm\\sqrt{k}, k)$).',
    visualType: 'parabola_cut',
    visualParams: { a: 0.25 }
  },
  {
    id: 'geo_11',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'מעגל שמרכזו על ציר $x$ משיק לישר $y=2$ (שרטוט). אם מרכז המעגל ב-$(3,0)$ ורדיוס $2$, מצא את משוואת המעגל ואת נקודת ההשקה.',
    answer: '$$(x-3)^2+y^2=4, \\quad \\text{נקודת השקה } (3,2)$$',
    explanation:
      'משוואת המעגל $(x-3)^2+y^2=4$. הישר $y=2$ במרחק $2$ מהמרכז $(3,0)$ — משיק. נקודת ההשקה $(3,2)$.',
    visualType: 'circle_tangent',
    visualParams: { cx: 3, cy: 0, r: 2, externalPoint: [3, 4] }
  },
  {
    id: 'geo_12',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'מה המרחק המינימלי בין הנקודה $(0,0)$ לישר $3x+4y-10=0$?',
    answer: '$$2$$',
    explanation:
      'מרחק נקודה מישר: $d = \\frac{|0+0-10|}{\\sqrt{9+16}} = \\frac{10}{5} = 2$.',
    visualType: null,
    visualParams: null
  },

  // ========== MORE TRIG WITH DIAGRAMS ==========
  {
    id: 'trig_12',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'במשולש ישר זווית (שרטוט) היתר $13$ והניצב התחתון $5$. מצא את הניצב האנכי ואת הזווית בראש.',
    answer: '$$\\text{ניצב } 12, \\quad \\text{זווית } \\approx 67^\\circ$$',
    explanation:
      'שלשה פיתגורית 5-12-13. הניצב האנכי $12$. $\\sin(\\alpha)=12/13$ → $\\alpha \\approx 67^\\circ$.',
    visualType: 'triangle_right',
    visualParams: { bottom: '5', side: '?', hypotenuse: '13', angle: 'α' }
  },
  {
    id: 'trig_13',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'במשולש (שרטוט) נתון: צלע $a=6$ מול זווית $A=60^\\circ$, צלע $b=4$. מצא את הזווית $B$ (משפט הסינוסים).',
    answer: '$$B \\approx 35^\\circ \\quad (\\sin B = \\frac{2\\sqrt{3}}{3} \\cdot \\frac{4}{6})$$',
    explanation:
      'משפט הסינוסים: $\\frac{6}{\\sin 60^\\circ} = \\frac{4}{\\sin B}$ → $\\sin B = \\frac{4\\sqrt{3}/2}{6/(\\sqrt{3}/2)} = \\frac{2\\sqrt{3}}{3}\\cdot\\frac{4}{6}$. מחשבים $B$.',
    visualType: 'general_triangle',
    visualParams: { a: '6', b: '4', c: '?', A: '60°', B: '?', C: 'C' }
  },
  {
    id: 'trig_14',
    topic: 'trigonometry',
    difficulty: 'hard',
    question:
      'במשולש ישר זווית (שרטוט) זווית של $45^\\circ$ בראש. אם היתר באורך $d$, מה אורך כל ניצב?',
    answer: '$$\\frac{d\\sqrt{2}}{2}$$',
    explanation:
      'משולש שווה שוקיים ישר זווית. ניצבים שווים: $d/\\sqrt{2} = d\\sqrt{2}/2$.',
    visualType: 'triangle_right',
    visualParams: { bottom: 'x', side: 'x', hypotenuse: 'd', angle: '45°' }
  },

  // ========== MORE GEOMETRY WITH DIAGRAMS ==========
  {
    id: 'geo_13',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'מעגל שמרכזו בראשית ורדיוס $5$ (שרטוט). הישר $y=3$ חותך את המעגל. מצא את נקודות החיתוך.',
    answer: '$$(\\pm 4, 3)$$',
    explanation:
      'הצבה $y=3$: $x^2+9=25$ → $x^2=16$ → $x=\\pm 4$. נקודות $(4,3)$, $(-4,3)$.',
    visualType: 'circle_tangent',
    visualParams: { cx: 0, cy: 0, r: 5, externalPoint: [0, 3] }
  },
  {
    id: 'geo_14',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'פרבולה $y=x^2-2x$ (שרטוט) וישר $y=k$. עבור אילו $k$ יש שני חיתוכים?',
    answer: '$$k > -1$$',
    explanation:
      'קודקוד ב-$(1,-1)$. שני חיתוכים כאשר $k$ מעל המינימום: $k > -1$.',
    visualType: 'parabola_cut',
    visualParams: { a: 0.25 }
  },
  {
    id: 'geo_15',
    topic: 'analytic_geometry',
    difficulty: 'hard',
    question:
      'מעגל $(x-1)^2+(y-1)^2=2$ (שרטוט). מצא את משוואת המשיק במקביל לציר $x$ (יש שניים).',
    answer: '$$y = 1+\\sqrt{2} \\quad \\text{או} \\quad y = 1-\\sqrt{2}$$',
    explanation:
      'מרכז המעגל $(1,1)$, רדיוס $\\sqrt{2}$. משיק במקביל לציר $x$ הוא ישר $y=c$. מרחק המרכז ל-$y=c$ הוא $|1-c|$. תנאי משיק: $|1-c|=\\sqrt{2}$ → $c=1+\\sqrt{2}$ או $c=1-\\sqrt{2}$.',
    visualType: 'circle_tangent',
    visualParams: { cx: 1, cy: 1, r: 1.5 }
  },
  {
    id: 'alg_9',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו $m$ למשוואה $\\sqrt{x+2} = x + m$ יש בדיוק פתרון אחד? (השתמש בהצבה $t=\\sqrt{x+2}$, $t \\ge 0$.)',
    answer: '$$m = -2 \\quad \\text{או} \\quad m > \\frac{9}{4}$$',
    explanation:
      'לאחר הצבה וריבוע מתקבל ריבועי ב-$t$. דרישת פתרון יחיד: שורש כפול או הגבלת תחום כך שרק פתרון אחד תקף. ניתוח נותן $m=-2$ או $m>9/4$.',
    visualType: null,
    visualParams: null
  },
  {
    id: 'alg_10',
    topic: 'algebra',
    difficulty: 'hard',
    question:
      'עבור אילו $m$ לאי-השוויון $|x^2-5x+6| + 3 \\le m$ אין אף פתרון?',
    answer: '$$m < 3$$',
    explanation:
      'מינימום $|x^2-5x+6|$ הוא $0$ (ב-$x=2,3$). לכן $\\min f(x)=3$. אין פתרון כאשר $m<3$.',
    visualType: null,
    visualParams: null
  },
];


/** Get questions by topic. Topic: 'algebra' | 'trigonometry' | 'analytic_geometry'. */
export function getQuestionsByTopic(topic) {
  return allQuestions.filter((q) => q.topic === topic);
}

/** Get random questions for exam simulation. */
export function getRandomExamQuestions(count = 10) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, allQuestions.length));
}
