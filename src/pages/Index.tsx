import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV = [
  { id: "cover",    label: "Начало",         short: "00" },
  { id: "skill",    label: "Навык",           short: "01" },
  { id: "limits",   label: "Ограничения ИИ", short: "02" },
  { id: "effects",  label: "Side-эффекты",   short: "03" },
  { id: "tasks",    label: "Задания",         short: "04" },
  { id: "examples", label: "Примеры",         short: "05" },
  { id: "assess",   label: "Оценивание",      short: "06" },
];

// ─── микро-компоненты ────────────────────────────────────────

function Pill({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`inline-block text-[11px] font-medium tracking-wide px-3 py-1 rounded-full
      ${accent
        ? "bg-sky-500 text-white"
        : "bg-slate-100 text-slate-500 border border-slate-200"}`}>
      {children}
    </span>
  );
}

function SecNum({ n }: { n: string }) {
  return (
    <span className="font-mono text-[11px] text-slate-300 tracking-widest select-none">{n}</span>
  );
}

function Divider() {
  return <div className="h-px bg-slate-100 w-full my-10" />;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// ─── главный компонент ────────────────────────────────────────

export default function Index() {
  const [active, setActive] = useState("cover");

  const goto = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800"
      style={{ fontFamily: "'Golos Text','Inter',sans-serif" }}>

      {/* ── TOP NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-slate-400 tracking-wide">HSE LED 2026</span>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`px-3 py-1.5 rounded-lg text-[12px] transition-all duration-200
                  ${active === n.id
                    ? "bg-sky-50 text-sky-700 font-semibold"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"}`}>
                {n.label}
              </button>
            ))}
          </nav>
          <span className="text-[11px] text-slate-300 font-mono hidden lg:block">EFL · Gen AI</span>
        </div>
      </header>

      <div className="pt-12 max-w-6xl mx-auto px-6 md:px-10">

        {/* ══════════════════════════════
            00  ОБЛОЖКА
        ══════════════════════════════ */}
        <section id="cover" onMouseEnter={() => setActive("cover")}
          className="min-h-screen flex flex-col justify-center py-24 gap-12">

          <div className="flex flex-wrap items-center gap-2">
            <Pill accent>HSE LED 2026</Pill>
            <Pill>Английский язык</Pill>
            <Pill>Генеративный ИИ</Pill>
            <Pill>Неязыковые вузы</Pill>
          </div>

          <div>
            <h1 style={{ fontFamily: "'Cormorant','Georgia',serif" }}
              className="text-[clamp(2.6rem,5.5vw,5.5rem)] font-light leading-[1.06] tracking-tight text-slate-900 mb-6">
              Проектирование учебных заданий<br />
              по английскому языку<br />
              <span className="text-sky-600 italic">для неязыковых вузов</span><br />
              в эпоху генеративного ИИ
            </h1>
            <p className="text-slate-400 text-lg">От принципов до готовых сценариев</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {[
              { name: "Наталья Геннадьевна Лаврентьева", org: "Ивановский государственный университет" },
              { name: "Евгения Валерьевна Орлова",       org: "Ивановский государственный энергетический университет" },
            ].map((a, i) => (
              <Card key={a.name} className="px-6 py-4 flex items-center gap-4">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0
                  ${i === 0 ? "bg-sky-500" : "bg-slate-400"}`}>
                  {a.name[0]}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-slate-800">{a.name}</p>
                  <p className="text-[12px] text-slate-400 mt-0.5">{a.org}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Оглавление */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {NAV.slice(1).map((n) => (
              <button key={n.id} onClick={() => goto(n.id)}
                className="group flex flex-col gap-1 p-4 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-sm transition-all text-left">
                <span className="font-mono text-[10px] text-slate-300 group-hover:text-sky-400 transition-colors">{n.short}</span>
                <span className="text-[12px] text-slate-600 font-medium leading-snug">{n.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            01  НАВЫК
        ══════════════════════════════ */}
        <section id="skill" onMouseEnter={() => setActive("skill")}
          className="py-20 border-t border-slate-100">

          <div className="flex items-center gap-3 mb-10">
            <SecNum n="01" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Формирование навыка и его устойчивость
            </h2>
          </div>

          {/* Блок компетенций */}
          <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-5">
            Иноязычная коммуникативная компетенция
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "BookOpen",   color: "bg-sky-50 text-sky-600",  label: "Лингвистический",                sub: "Грамотность и связность текста" },
              { icon: "GitBranch",  color: "bg-blue-50 text-blue-600",      label: "Дискурсивный / стратегический", sub: "Логичное высказывание + тактики компенсации" },
              { icon: "Globe",      color: "bg-teal-50 text-teal-600",      label: "Социокультурный",               sub: "Понимание культурного контекста" },
              { icon: "Smartphone", color: "bg-orange-50 text-orange-600",  label: "Прагматический / цифровой",    sub: "Реальные задачи + цифровые инструменты" },
            ].map((it) => (
              <Card key={it.label} className="p-5 hover:shadow-md transition-shadow">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${it.color}`}>
                  <Icon name={it.icon as "Globe"} size={16} />
                </div>
                <p className="text-[14px] font-semibold text-slate-800 mb-1 leading-snug">{it.label}</p>
                <p className="text-[12px] text-slate-400 leading-relaxed">{it.sub}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {["Автоматизм", "Функциональность", "Адаптивность и гибкость"].map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>

          <Divider />

          {/* Skill Acquisition Theory */}
          <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-5">
            Skill Acquisition Theory · 1.1 Продуктивный коммуникативный навык
          </p>

          {/* Цепочка */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {["Декларативный", "Процедурный", "Автоматический", "Перенос в реальную коммуникацию"].map((s, i, a) => (
              <div key={s} className="flex items-center gap-2">
                <span className={`px-4 py-2 rounded-lg text-[13px] font-medium
                  ${i === a.length - 1
                    ? "bg-sky-500 text-white shadow-sm shadow-sky-200"
                    : "bg-white border border-slate-200 text-slate-600"}`}>{s}</span>
                {i < a.length - 1 && <Icon name="ChevronRight" size={14} className="text-slate-300" />}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { t: "Активное извлечение",      d: "Рассказ и ответы без опоры на текст; переключение в диалоге" },
              { t: "«Желательные трудности»",  d: "Чередование задач и структур, смещение фокуса с формы на смысл" },
              { t: "Deliberate practice",       d: "Целенаправленное повторение с получением обратной связи" },
              { t: "Реальный контекст",         d: "Упражнения имитируют когнитивные требования живой коммуникации" },
            ].map((it) => (
              <Card key={it.t} className="p-5">
                <p className="text-[13px] font-semibold text-slate-800 mb-2">{it.t}</p>
                <p className="text-[12px] text-slate-400 leading-relaxed">{it.d}</p>
              </Card>
            ))}
          </div>

          <div className="bg-sky-50 border border-sky-100 rounded-xl px-6 py-4 text-[13px] text-sky-700 italic max-w-2xl">
            Подлинная автоматизация формируется через процедурализацию в условиях, приближённых к реальным
          </div>

          <Divider />

          {/* AI-опосредованная модель */}
          <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-5">
            AI-опосредованная модель · 1.2 Устойчивость навыка
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <Card className="p-6">
              <p className="text-[11px] uppercase tracking-widest text-slate-300 mb-3 font-medium">Лингвистический трек</p>
              <p className="text-[14px] text-slate-500 italic">Без изменений — традиционный путь формирования навыка</p>
            </Card>
            <Card className="p-6 border-sky-200 bg-sky-50/50">
              <p className="text-[11px] uppercase tracking-widest text-sky-500 mb-4 font-medium">AI-опосредованный трек — новый</p>
              <ul className="space-y-2 mb-5">
                {["Практика с немедленной обратной связью", "Метакогнитивный контроль", "Адаптация к ии-собеседнику"].map(it => (
                  <li key={it} className="flex gap-2 text-[13px] text-slate-600">
                    <Icon name="Check" size={13} className="text-sky-500 mt-0.5 shrink-0" />{it}
                  </li>
                ))}
              </ul>
              <div className="border-t border-sky-100 pt-4">
                <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-2 font-medium">Human-надстройка</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Интеракциональная точность", "Прагматическая гибкость", "Эмоциональная связь"].map(it => (
                    <span key={it} className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-sky-200 text-sky-600">{it}</span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ══════════════════════════════
            02  ОГРАНИЧЕНИЯ ИИ
        ══════════════════════════════ */}
        <section id="limits" onMouseEnter={() => setActive("limits")}
          className="py-20 border-t border-slate-100">

          <div className="flex items-center gap-3 mb-10">
            <SecNum n="02" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Ограничения ИИ</h2>
          </div>

          <p className="text-slate-500 text-base max-w-xl mb-10 leading-relaxed">
            LLM не улавливают тонкие дискурсивные связи — это создаёт системные дефициты в формировании навыка
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            {[
              { area: "Лексика и грамматика", icon: "Type",     color: "bg-red-50 text-red-500",
                body: "LLM не улавливают тонкие лексические связи между частями дискурса. Знание ассоциативных полей формируется только в прагматических активностях." },
              { area: "Чтение",               icon: "BookOpen", color: "bg-amber-50 text-amber-500",
                body: "Контекстуальное понимание — реконструкция интенционального смысла с учётом ситуации и фоновых знаний — недоступно для модели." },
              { area: "Говорение",             icon: "Mic",      color: "bg-orange-50 text-orange-500",
                body: "Машинный тип прагматики развивает «шаблонный» язык: отсутствуют живые «прагматические» реакции и спонтанность речи." },
            ].map((it) => (
              <Card key={it.area} className="p-6 hover:shadow-md transition-shadow">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${it.color}`}>
                  <Icon name={it.icon as "Type"} size={16} />
                </div>
                <p className="text-[13px] font-semibold text-slate-700 mb-2">{it.area}</p>
                <p className="text-[12px] text-slate-400 leading-[1.7]">{it.body}</p>
              </Card>
            ))}
          </div>

          {/* Иерархия компетенций */}
          <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-5">
            Иерархия компетенций
          </p>
          <div className="flex flex-col gap-0 max-w-lg">
            {[
              { label: "Лексико-тематические связи",  sub: "Знание слов и их ассоциативных полей",                             arrow: "обеспечивают материал для" },
              { label: "Контекстуальное понимание",   sub: "Способность выводить импликатуры, интерпретировать интенции",       arrow: "создаёт основу для" },
              { label: "Прагматическая компетенция",  sub: "Способность действовать уместно, управлять социальными отношениями", arrow: null },
            ].map((node, i) => (
              <div key={node.label}>
                <Card className={`p-5 ${i === 2 ? "border-sky-200 bg-sky-50/40" : ""}`}>
                  <p className={`text-[14px] font-semibold mb-1 ${i === 2 ? "text-sky-700" : "text-slate-800"}`}>{node.label}</p>
                  <p className="text-[12px] text-slate-400">{node.sub}</p>
                </Card>
                {node.arrow && (
                  <div className="flex items-center gap-2 py-2 pl-5">
                    <Icon name="ArrowDown" size={12} className="text-slate-300" />
                    <span className="text-[11px] text-slate-300 italic">{node.arrow}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Divider />

          {/* Максимы Грайса */}
          <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-5">
            Письмо · нарушение максим Грайса при AI-генерации
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              { m: "Quantity", rule: "Будь информативен, но не избыточен", ai: "Чрезмерная информация" },
              { m: "Quality",  rule: "Будь правдив",                       ai: "Ложные утверждения как факты" },
              { m: "Relation", rule: "Будь релевантен",                    ai: "Сбои в поддержании релевантности" },
              { m: "Manner",   rule: "Будь ясен, краток, организован",     ai: "Verbosity, нет иерархии" },
            ].map((g) => (
              <Card key={g.m} className="p-4">
                <p className="font-mono text-[13px] font-bold text-sky-600 mb-2">{g.m}</p>
                <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">{g.rule}</p>
                <div className="flex items-start gap-1.5">
                  <Icon name="AlertCircle" size={11} className="text-red-400 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-red-400 leading-snug">{g.ai}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            03  SIDE-ЭФФЕКТЫ
        ══════════════════════════════ */}
        <section id="effects" onMouseEnter={() => setActive("effects")}
          className="py-20 border-t border-slate-100">

          <div className="flex items-center gap-3 mb-10">
            <SecNum n="03" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Side-эффекты в обучении с ИИ</h2>
          </div>

          <p className="text-slate-500 text-base mb-10 max-w-lg leading-relaxed">
            Риски, которые нельзя игнорировать при проектировании учебной среды
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              { n: "01", title: "Перенос ответственности",                desc: "Студент делегирует мышление инструменту, теряя авторство",              icon: "ArrowRightLeft" },
              { n: "02", title: "Эхо-камера",                             desc: "Подтверждение имеющихся идей без критического вызова",                    icon: "Volume2" },
              { n: "03", title: "Упрощение опыта",                        desc: "Редукция сложности — обход когнитивных трудностей",                       icon: "TrendingDown" },
              { n: "04", title: "Потеря настойчивости",                   desc: "Снижение толерантности к трудности и усилию",                             icon: "Wind" },
              { n: "05", title: "Слабость самостоятельной работы",        desc: "Деградация продуктивных навыков без поддержки ИИ",                         icon: "UserX" },
            ].map((it) => (
              <Card key={it.n} className="p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Icon name={it.icon as "Wind"} size={14} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-800 mb-1">{it.title}</p>
                    <p className="text-[12px] text-slate-400 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            04  УСТОЙЧИВЫЕ ЗАДАНИЯ
        ══════════════════════════════ */}
        <section id="tasks" onMouseEnter={() => setActive("tasks")}
          className="py-20 border-t border-slate-100">

          <div className="flex items-center gap-3 mb-10">
            <SecNum n="04" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Устойчивые задания: параметры, характеристики, принципы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mb-14">
            {/* Параметры */}
            <div>
              <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-4">Параметры устойчивости</p>
              <div className="space-y-3">
                {[
                  { t: "Контекстуализация", d: "Контекстное понимание, уникальная ситуация", icon: "MapPin" },
                  { t: "Персонализация",    d: "Личный опыт, убеждения, позиция студента",   icon: "User" },
                  { t: "Акцент на процесс", d: "Важен путь, а не только финальный продукт",  icon: "Route" },
                ].map((p) => (
                  <Card key={p.t} className="p-4 flex items-start gap-4 hover:border-sky-200 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                      <Icon name={p.icon as "User"} size={14} className="text-sky-500" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800">{p.t}</p>
                      <p className="text-[12px] text-slate-400 mt-0.5">{p.d}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Характеристики */}
            <div>
              <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-4">Характеристики заданий</p>
              <div className="flex flex-wrap gap-2">
                {["Динамичность", "Непредсказуемость", "Мета-когнитивная нагрузка", "Интеграция навыков",
                  "Контент в реальном времени", "Социальное взаимодействие", "Аффективное вовлечение"].map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[12px] font-medium
                    hover:bg-sky-100 hover:text-sky-700 transition-colors cursor-default">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Типология */}
          <p className="text-slate-400 text-[13px] uppercase tracking-widest font-medium mb-5">
            Типология заданий и целевые дефициты
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-sm">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  {["Тип", "Название", "Дефицит AI", "Механизм донастройки"].map(h => (
                    <th key={h} className="text-left py-3 px-5 text-[11px] uppercase tracking-widest font-medium text-slate-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "T1", name: "Релевантность и максимы",           deficit: "Relation, Quantity, Quality",              mech: "Маркировка нарушений + замена" },
                  { t: "T2", name: "Импликатуры и небуквальные смыслы", deficit: "Отсутствие Theory of Mind, буквализм",      mech: "Косвенные реплики → вывод импликатуры" },
                  { t: "T3", name: "Лексико-тематические связи",        deficit: "Тонкие лексические отношения, коллокации",  mech: "Групповое редактирование + аутентичные примеры" },
                  { t: "T4", name: "Социопрагматическая уместность",   deficit: "Игнорирование дистанции и статуса",          mech: "Ролевая игра + объяснение выбора" },
                  { t: "T5", name: "Ремонт и стратегии восстановления", deficit: "Отсутствие other-repair",                    mech: "Намеренные помехи + обязательная repair" },
                  { t: "T6", name: "Trans-pragmatic competence",        deficit: "Некритическая интернализация AI-шаблонов",   mech: "Групповая рефлексия + формулирование правил" },
                ].map((row, i) => (
                  <tr key={row.t} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i % 2 === 0 ? "" : ""}`}>
                    <td className="py-3.5 px-5">
                      <span className="font-mono font-bold text-sky-600 text-[12px]">{row.t}</span>
                    </td>
                    <td className="py-3.5 px-5 font-medium text-slate-800">{row.name}</td>
                    <td className="py-3.5 px-5 text-slate-400">{row.deficit}</td>
                    <td className="py-3.5 px-5 text-slate-400">{row.mech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════════════════
            05  ПРИМЕРЫ ЗАДАНИЙ
        ══════════════════════════════ */}
        <section id="examples" onMouseEnter={() => setActive("examples")}
          className="py-20 border-t border-slate-100">

          <div className="flex items-center gap-3 mb-10">
            <SecNum n="05" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Примеры заданий</h2>
          </div>

          <p className="text-slate-500 text-base mb-10 max-w-xl leading-relaxed">
            Четыре сценария донастройки — задания, которые ИИ не выполнит вместо студента
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                num: "1", tag: "T2 · Небуквальные смыслы",
                icon: "MessageCircle", color: "bg-sky-50 text-sky-600",
                title: "Импликатуры",
                goal: "Развить способность выводить и продуцировать небуквальные смыслы",
                bullets: [
                  "Студенты получают диалоги с непрямыми репликами",
                  "Задача: объяснить «что имел в виду говорящий»",
                  "Второй этап: самостоятельно продуцировать косвенные высказывания",
                ],
              },
              {
                num: "2", tag: "T3 · Лексико-тематические связи",
                icon: "Network", color: "bg-blue-50 text-blue-600",
                title: "От слов к контексту",
                goal: "Использовать лексику как часть прагматической схемы (жалоба → набор слов)",
                bullets: [
                  "Заданная коммуникативная ситуация: жалоба, просьба, совет",
                  "Построить лексическое поле для ситуации в группе",
                  "Оценить: какие слова «звучат» естественно, а какие — как AI",
                ],
              },
              {
                num: "3", tag: "T4 · Социопрагматическая уместность",
                icon: "Users", color: "bg-emerald-50 text-emerald-600",
                title: "Кто, кому, когда, где",
                goal: "Развить чувствительность к вариативности в зависимости от контекста",
                bullets: [
                  "Одна просьба: 4 варианта (преподаватель / друг / начальник / незнакомый)",
                  "Объяснить выбор слов, тона, структуры",
                  "Выявить «нейтральный» AI-стиль и его дефициты",
                ],
              },
              {
                num: "4", tag: "T5 · Стратегии восстановления",
                icon: "RefreshCw", color: "bg-green-50 text-green-600",
                title: "Repair",
                goal: "Научиться запрашивать и предоставлять уточнение при коммуникативном сбое",
                bullets: [
                  "Партнёр намеренно вносит помехи: неточность, двусмысленность",
                  "Студент обязан запросить уточнение и отреагировать",
                  "Оценивается: скорость обнаружения сбоя, стратегия repair",
                ],
              },
            ].map((ex) => (
              <Card key={ex.num} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ex.color}`}>
                    <Icon name={ex.icon as "Users"} size={18} />
                  </div>
                  <Pill>{ex.tag}</Pill>
                </div>
                <p className="text-[17px] font-bold text-slate-900 mb-1">{ex.title}</p>
                <p className="text-[12px] text-slate-400 italic mb-4 leading-relaxed">{ex.goal}</p>
                <ul className="space-y-2">
                  {ex.bullets.map(b => (
                    <li key={b} className="flex gap-2.5 text-[13px] text-slate-600">
                      <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Check" size={9} className="text-slate-400" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            06  ЧТО ОЦЕНИВАТЬ
        ══════════════════════════════ */}
        <section id="assess" onMouseEnter={() => setActive("assess")}
          className="py-20 border-t border-slate-100">

          <div className="flex items-center gap-3 mb-10">
            <SecNum n="06" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Что оценивать?</h2>
          </div>

          <p className="text-slate-500 text-base mb-10 max-w-xl leading-relaxed">
            Критерии оценивания живого навыка — не продукта, а процесса
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-14">
            {[
              { n: "01", title: "Продуктивная когнитивная нагрузка",  desc: "Уровень усилия при порождении смысла — не воспроизведение шаблона",          icon: "Brain" },
              { n: "02", title: "Гибкость коммуникативных стратегий", desc: "Способность менять тактику при изменении контекста или собеседника",           icon: "Shuffle" },
              { n: "03", title: "Генерация новых идей",               desc: "Частота оригинальных смысловых ходов, не заимствованных из источников",         icon: "Lightbulb" },
              { n: "04", title: "Интеграция личного опыта",           desc: "Органичное встраивание собственного контекста в иноязычное высказывание",        icon: "User" },
              { n: "05", title: "Осознанность выбора",                desc: "Способность объяснить выбор языковой формы в данном контексте",                  icon: "Eye" },
            ].map((it) => (
              <Card key={it.n} className="p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] text-slate-300">{it.n}</span>
                  <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center">
                    <Icon name={it.icon as "Eye"} size={13} className="text-sky-500" />
                  </div>
                </div>
                <p className="text-[14px] font-semibold text-slate-800 mb-1.5 leading-snug">{it.title}</p>
                <p className="text-[12px] text-slate-400 leading-relaxed">{it.desc}</p>
              </Card>
            ))}
          </div>

          {/* Финальный тезис */}
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 md:p-10 max-w-2xl">
            <p className="text-sky-100 text-[11px] uppercase tracking-widest font-medium mb-4">Итоговый тезис</p>
            <p style={{ fontFamily: "'Cormorant','Georgia',serif" }}
              className="text-white text-2xl md:text-3xl font-light leading-relaxed">
              Задание устойчиво, если его результат<br />
              <em className="text-sky-200">уникален для конкретного студента</em><br />
              в конкретный момент времени
            </p>
            <Divider />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sky-100 text-[12px]">Лаврентьева · Орлова</p>
                <p className="text-sky-200 text-[11px] mt-0.5">HSE LED 2026</p>
              </div>
              <button onClick={() => goto("cover")}
                className="flex items-center gap-2 text-sky-100 hover:text-white text-[12px] transition-colors">
                <Icon name="ArrowUp" size={13} />В начало
              </button>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </div>
  );
}