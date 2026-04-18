import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV = [
  { id: "cover", label: "Начало", short: "00" },
  { id: "skill", label: "Навык", short: "01" },
  { id: "limits", label: "Ограничения ИИ", short: "02" },
  { id: "effects", label: "Side-эффекты", short: "03" },
  { id: "tasks", label: "Задания", short: "04" },
  { id: "examples", label: "Примеры", short: "05" },
  { id: "assess", label: "Оценивание", short: "06" },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] tracking-[0.25em] uppercase border border-[#C8A96E] text-[#C8A96E] px-3 py-1 rounded-sm">
      {children}
    </span>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-[11px] text-[#C8A96E] tracking-[0.3em]">{num}</span>
      <div className="h-px w-10 bg-[#C8A96E] opacity-40" />
      <span className="text-[11px] tracking-[0.25em] uppercase text-[#8A8A7A]">{title}</span>
    </div>
  );
}

export default function Index() {
  const [activeNav, setActiveNav] = useState("cover");

  const goto = (id: string) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#12120E] text-[#E8E4D8]" style={{ fontFamily: "'Golos Text', 'IBM Plex Sans', sans-serif" }}>
      {/* Боковая навигация */}
      <aside className="fixed left-0 top-0 h-full w-14 z-50 flex flex-col items-center justify-center border-r border-[#2A2A20] gap-5">
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => goto(n.id)}
            title={n.label}
            className="group flex flex-col items-center gap-1"
          >
            <span className={`font-mono text-[9px] tracking-[0.2em] transition-colors duration-300 ${activeNav === n.id ? "text-[#C8A96E]" : "text-[#3A3A30]"}`}>
              {n.short}
            </span>
            <div className={`w-px transition-all duration-500 ${activeNav === n.id ? "h-5 bg-[#C8A96E]" : "h-2 bg-[#2A2A20]"}`} />
          </button>
        ))}
      </aside>

      <div className="ml-14">

        {/* ── 00 ОБЛОЖКА ── */}
        <section
          id="cover"
          onMouseEnter={() => setActiveNav("cover")}
          className="min-h-screen flex flex-col justify-between px-12 md:px-20 py-14 border-b border-[#2A2A20]"
        >
          <div className="flex items-center justify-between">
            <Tag>HSE LED 2026</Tag>
            <span className="text-[10px] text-[#3A3A30] tracking-[0.2em] font-mono uppercase">EFL · Higher Education · Gen AI</span>
          </div>

          <div className="max-w-4xl">
            <div className="grid grid-cols-3 gap-px bg-[#2A2A20] border border-[#2A2A20] mb-10 w-fit">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-2 h-2 ${i === 4 ? "bg-[#C8A96E]" : "bg-[#12120E]"}`} />
              ))}
            </div>

            <h1 style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-[clamp(2.4rem,5vw,5rem)] font-light leading-[1.08] tracking-tight mb-6 text-[#E8E4D8]">
              Проектирование учебных<br />
              заданий по английскому языку<br />
              <span style={{ color: "#C8A96E", fontStyle: "italic" }}>для неязыковых вузов</span><br />
              в эпоху генеративного ИИ
            </h1>

            <p className="text-[13px] text-[#5A5A4A] mb-10 leading-relaxed tracking-wide">
              От принципов до готовых сценариев
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="border-l-2 border-[#C8A96E] pl-5">
                <p className="text-[14px] text-[#E8E4D8] font-medium">Наталья Геннадьевна Лаврентьева</p>
                <p className="text-[12px] text-[#5A5A4A] mt-0.5">Ивановский государственный университет</p>
              </div>
              <div className="border-l-2 border-[#3A3A30] pl-5">
                <p className="text-[14px] text-[#E8E4D8] font-medium">Евгения Валерьевна Орлова</p>
                <p className="text-[12px] text-[#5A5A4A] mt-0.5">Ивановский государственный энергетический университет</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {NAV.slice(1).map((n) => (
              <button
                key={n.id}
                onClick={() => goto(n.id)}
                className="text-[11px] tracking-[0.12em] uppercase text-[#3A3A30] hover:text-[#C8A96E] transition-colors"
              >
                <span className="text-[#C8A96E] mr-1.5">{n.short}</span>{n.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── 01 НАВЫК ── */}
        <section
          id="skill"
          onMouseEnter={() => setActiveNav("skill")}
          className="min-h-screen px-12 md:px-20 py-14 border-b border-[#2A2A20]"
        >
          <SectionLabel num="01" title="Формирование навыка и его устойчивость" />

          <h2 style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-3xl md:text-4xl font-light text-[#E8E4D8] mb-10">
            Иноязычная коммуникативная компетенция
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2A20] mb-8">
            {[
              { icon: "BookOpen", label: "Лингвистический", desc: "Грамотность и связность текста" },
              { icon: "GitBranch", label: "Дискурсивный / стратегический", desc: "Логичное высказывание + тактики компенсации" },
              { icon: "Globe", label: "Социокультурный", desc: "Понимание культурного контекста" },
              { icon: "Smartphone", label: "Прагматический / цифровой", desc: "Реальные задачи + цифровые инструменты" },
            ].map((item, i) => (
              <div key={i} className="bg-[#12120E] p-7 group hover:bg-[#1A1A14] transition-colors">
                <div className="w-8 h-8 rounded-sm bg-[#1E1E16] flex items-center justify-center mb-5 border border-[#2A2A20] group-hover:border-[#C8A96E] transition-colors">
                  <Icon name={item.icon as "BookOpen"} size={14} className="text-[#C8A96E]" />
                </div>
                <p className="text-[13px] font-medium text-[#E8E4D8] mb-2 leading-snug">{item.label}</p>
                <p className="text-[12px] text-[#5A5A4A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 mb-16">
            {["Автоматизм", "Функциональность", "Адаптивность и гибкость"].map((c) => (
              <div key={c} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#C8A96E]" />
                <span className="text-[12px] text-[#8A8A7A]">{c}</span>
              </div>
            ))}
          </div>

          <div className="mb-14">
            <div className="mb-7"><Tag>Skill Acquisition Theory</Tag></div>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {["Декларативный", "Процедурный", "Автоматический", "Перенос в реальную коммуникацию"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`px-4 py-2.5 text-[12px] tracking-wide ${i === arr.length - 1 ? "bg-[#C8A96E] text-[#12120E] font-semibold" : "bg-[#1E1E16] text-[#C8A96E] border border-[#2A2A20]"}`}>
                    {step}
                  </div>
                  {i < arr.length - 1 && <Icon name="ChevronRight" size={13} className="text-[#3A3A30]" />}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
              {[
                { t: "Активное извлечение", d: "Рассказ и ответы без опоры на текст, переключение в диалоге" },
                { t: "Deliberate practice", d: "Целенаправленное повторение с немедленной обратной связью" },
                { t: "Когнитивное требование", d: "Имитация реальной коммуникации, чередование задач" },
              ].map((item) => (
                <div key={item.t} className="p-5 border border-[#2A2A20] hover:border-[#3A3A30] transition-colors">
                  <p className="text-[13px] font-semibold text-[#E8E4D8] mb-2">{item.t}</p>
                  <p className="text-[12px] text-[#5A5A4A] leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-7">
              <Tag>AI-опосредованная модель</Tag>
              <span className="text-[11px] text-[#3A3A30]">Устойчивость навыка в эпоху ИИ</span>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
              <div className="p-6 border border-[#2A2A20]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#4A4A3A] mb-4">Лингвистический трек</div>
                <p className="text-[13px] text-[#6A6A5A] italic">Без изменений — традиционный путь</p>
              </div>
              <div className="p-6 border border-[#C8A96E] border-opacity-30 bg-[#1A1A14]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] mb-4">AI-опосредованный трек — новый</div>
                <ul className="space-y-2 mb-5">
                  {["Практика с немедленной обратной связью", "Метакогнитивный контроль", "Адаптация к ии-собеседнику"].map(it => (
                    <li key={it} className="flex gap-2 text-[12px] text-[#8A8A7A]">
                      <span className="text-[#C8A96E]">·</span>{it}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#2A2A20]">
                  <p className="text-[10px] text-[#4A4A3A] uppercase tracking-wide mb-2">Human-надстройка</p>
                  <div className="flex flex-wrap gap-1">
                    {["Интеракциональная точность", "Прагматическая гибкость", "Эмоциональная связь"].map(it => (
                      <span key={it} className="text-[10px] px-2 py-0.5 bg-[#2A2A20] text-[#C8A96E]">{it}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 ОГРАНИЧЕНИЯ ── */}
        <section
          id="limits"
          onMouseEnter={() => setActiveNav("limits")}
          className="min-h-screen px-12 md:px-20 py-14 border-b border-[#2A2A20]"
        >
          <SectionLabel num="02" title="Ограничения ИИ" />

          <h2 style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-3xl md:text-5xl font-light text-[#E8E4D8] mb-4 leading-tight">
            Что ИИ <em style={{ color: "#C8A96E" }}>не может</em><br />
            сделать за студента
          </h2>
          <p className="text-[13px] text-[#5A5A4A] mb-14 max-w-lg">Понимание ограничений — основа проектирования устойчивых заданий</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2A20] border border-[#2A2A20] max-w-3xl">
            {[
              { area: "Лексика и грамматика", limit: "Нет лексико-тематических связей", icon: "Type" },
              { area: "Чтение", limit: "Нет смыслового чтения", icon: "BookOpen" },
              { area: "Письмо", limit: "Гомогенизация текстов", icon: "PenLine" },
              { area: "Говорение", limit: "Развитие «шаблонного» языка", icon: "Mic" },
            ].map((item, i) => (
              <div key={i} className="bg-[#12120E] p-9 group hover:bg-[#1A1A14] transition-colors">
                <div className="flex items-start gap-4">
                  <Icon name={item.icon as "Type"} size={15} className="text-[#3A3A30] group-hover:text-[#C8A96E] transition-colors mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A3A] mb-2">{item.area}</p>
                    <p className="text-[15px] text-[#E8E4D8] font-light leading-snug">{item.limit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 SIDE-ЭФФЕКТЫ ── */}
        <section
          id="effects"
          onMouseEnter={() => setActiveNav("effects")}
          className="min-h-screen px-12 md:px-20 py-14 border-b border-[#2A2A20]"
        >
          <SectionLabel num="03" title="Side-эффекты в обучении с ИИ" />

          <h2 style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-3xl md:text-5xl font-light text-[#E8E4D8] mb-14 leading-tight">
            Риски, которые<br />
            <em style={{ color: "#C8A96E" }}>нельзя игнорировать</em>
          </h2>

          <div className="space-y-0 max-w-2xl">
            {[
              { n: "01", title: "Перенос ответственности", desc: "Студент делегирует мышление инструменту, теряя авторство" },
              { n: "02", title: "Эхо-камера", desc: "Подтверждение имеющихся идей без критического вызова" },
              { n: "03", title: "Упрощение опыта", desc: "Редукция сложности — обход когнитивных трудностей" },
              { n: "04", title: "Потеря настойчивости", desc: "Снижение толерантности к трудности и усилию" },
              { n: "05", title: "Слабое качество самостоятельной работы", desc: "Деградация продуктивных навыков без поддержки ИИ" },
            ].map((item) => (
              <div key={item.n} className="group flex items-start gap-7 py-7 border-b border-[#1E1E18] hover:bg-[#161612] px-2 -mx-2 transition-colors">
                <span className="font-mono text-[10px] text-[#3A3A30] mt-1 shrink-0">{item.n}</span>
                <div>
                  <p className="text-[15px] text-[#C8A96E] font-medium mb-1">{item.title}</p>
                  <p className="text-[12px] text-[#5A5A4A] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 УСТОЙЧИВЫЕ ЗАДАНИЯ ── */}
        <section
          id="tasks"
          onMouseEnter={() => setActiveNav("tasks")}
          className="min-h-screen px-12 md:px-20 py-14 border-b border-[#2A2A20]"
        >
          <SectionLabel num="04" title="Устойчивые задания: параметры, характеристики, принципы" />

          <h2 style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-3xl md:text-5xl font-light text-[#E8E4D8] mb-14 leading-tight">
            Задания, устойчивые<br />
            к <em style={{ color: "#C8A96E" }}>автоматизированному</em><br />
            выполнению
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#4A4A3A] mb-6">Параметры устойчивости</p>
              <div className="space-y-3">
                {[
                  { t: "Контекстуализация", d: "Контекстное понимание, уникальная ситуация" },
                  { t: "Персонализация", d: "Личный опыт, убеждения, позиция студента" },
                  { t: "Акцент на процесс", d: "Важен путь, а не только финальный продукт" },
                ].map((p) => (
                  <div key={p.t} className="flex gap-4 p-5 border border-[#2A2A20] hover:border-[#C8A96E] hover:border-opacity-40 transition-colors">
                    <div className="w-0.5 bg-[#C8A96E] shrink-0 rounded-full opacity-50" />
                    <div>
                      <p className="text-[13px] text-[#E8E4D8] font-semibold mb-1">{p.t}</p>
                      <p className="text-[12px] text-[#5A5A4A]">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#4A4A3A] mb-6">Характеристики заданий</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Динамичность",
                  "Непредсказуемость",
                  "Мета-когнитивная нагрузка",
                  "Интеграция навыков",
                  "Контент в реальном времени",
                  "Социальное взаимодействие",
                  "Аффективное вовлечение",
                ].map((c, i) => (
                  <div key={c} className={`p-4 text-[12px] text-center border border-[#2A2A20] hover:bg-[#1E1E16] hover:text-[#C8A96E] transition-all cursor-default ${i === 6 ? "col-span-2" : ""}`}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 ПРИМЕРЫ ── */}
        <section
          id="examples"
          onMouseEnter={() => setActiveNav("examples")}
          className="min-h-screen px-12 md:px-20 py-14 border-b border-[#2A2A20]"
        >
          <SectionLabel num="05" title="Примеры заданий" />

          <h2 style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-3xl md:text-5xl font-light text-[#E8E4D8] mb-14 leading-tight">
            Задания, которые<br />
            <em style={{ color: "#C8A96E" }}>ИИ не выполнит</em><br />
            вместо студента
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-[#2A2A20] max-w-5xl">
            {[
              { num: "A", title: "Live Debate Switch", skill: "Говорение · Стратегии", desc: "Студент начинает отстаивать одну позицию, затем по сигналу переключается на противоположную. Требует мгновенной адаптации без подготовки." },
              { num: "B", title: "Personal Story Integration", skill: "Письмо · Персонализация", desc: "Задание включает обязательный личный эпизод из жизни студента, который нельзя сгенерировать. Оценивается достоверность и языковая точность." },
              { num: "C", title: "Error Hunt + рефлексия", skill: "Чтение · Метакогниция", desc: "Студент анализирует ошибки в AI-тексте, классифицирует их и объясняет, почему ИИ так написал. Развивает критическое чтение." },
              { num: "D", title: "Think-Aloud Protocol", skill: "Говорение · Процесс", desc: "Студент проговаривает вслух ход мыслей при решении задачи. Процесс важнее результата — ИИ не может воспроизвести живой поток сознания." },
              { num: "E", title: "Cultural Insider View", skill: "Социокультурный", desc: "Объяснение культурного явления глазами участника: праздник, профессиональный обычай, локальный феномен. Требует подлинного опыта." },
              { num: "F", title: "Real-time Negotiation", skill: "Диалог · Непредсказуемость", desc: "Пара студентов решает конфликтный сценарий в реальном времени, задания меняются каждые 2 минуты. Нет времени обращаться к ИИ." },
            ].map((ex) => (
              <div key={ex.num} className="bg-[#12120E] p-7 hover:bg-[#171712] transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <span style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-4xl text-[#2A2A20] group-hover:text-[#3A3A28] transition-colors font-light">{ex.num}</span>
                  <span className="text-[9px] tracking-[0.15em] text-[#C8A96E] uppercase text-right leading-tight max-w-[80px]">{ex.skill}</span>
                </div>
                <h3 className="text-[13px] font-semibold text-[#E8E4D8] mb-3">{ex.title}</h3>
                <p className="text-[12px] text-[#5A5A4A] leading-[1.8]">{ex.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 06 ЧТО ОЦЕНИВАТЬ ── */}
        <section
          id="assess"
          onMouseEnter={() => setActiveNav("assess")}
          className="min-h-screen px-12 md:px-20 py-14"
        >
          <SectionLabel num="06" title="Что оценивать?" />

          <h2 style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-3xl md:text-5xl font-light text-[#E8E4D8] mb-14 leading-tight">
            Критерии оценивания<br />
            <em style={{ color: "#C8A96E" }}>живого навыка</em>
          </h2>

          <div className="max-w-3xl space-y-0">
            {[
              { n: "01", title: "Продуктивная когнитивная нагрузка", desc: "Уровень усилия, затраченного на продуцирование смысла — не воспроизведение шаблона" },
              { n: "02", title: "Гибкость коммуникативных стратегий", desc: "Способность менять тактику при изменении контекста, задачи или собеседника" },
              { n: "03", title: "Генерация новых идей", desc: "Частота появления оригинальных смысловых ходов, не заимствованных из источников" },
              { n: "04", title: "Интеграция личного опыта", desc: "Способность органично встроить собственный контекст в иноязычное высказывание" },
            ].map((item) => (
              <div key={item.n} className="group flex items-start gap-7 py-8 border-b border-[#1E1E18]">
                <span className="font-mono text-[10px] text-[#3A3A30] mt-1 shrink-0">{item.n}</span>
                <div className="flex-1">
                  <p className="text-[16px] text-[#E8E4D8] font-medium mb-2 leading-snug">{item.title}</p>
                  <p className="text-[13px] text-[#5A5A4A] leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-7 h-7 rounded-full border border-[#2A2A20] flex items-center justify-center group-hover:border-[#C8A96E] transition-colors shrink-0 mt-0.5">
                  <Icon name="ArrowRight" size={11} className="text-[#3A3A30] group-hover:text-[#C8A96E] transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-[#2A2A20] grid md:grid-cols-2 gap-10 items-end">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#3A3A30] mb-4">Итоговый тезис</p>
              <p style={{ fontFamily: "'Cormorant', Georgia, serif" }} className="text-2xl md:text-3xl font-light text-[#E8E4D8] leading-relaxed">
                Задание устойчиво, если его результат<br />
                <em style={{ color: "#C8A96E" }}>уникален для конкретного студента</em><br />
                в конкретный момент времени
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <Tag>HSE LED 2026</Tag>
              <p className="text-[12px] text-[#3A3A30]">Лаврентьева · Орлова</p>
              <button
                onClick={() => goto("cover")}
                className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#3A3A30] hover:text-[#C8A96E] transition-colors mt-2"
              >
                <Icon name="ArrowUp" size={11} />В начало
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
