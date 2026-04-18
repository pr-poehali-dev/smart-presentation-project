import { useState } from "react";
import Icon from "@/components/ui/icon";

const C = {
  gold: "#C8A96E",
  bg: "#0F0F0B",
  surface: "#171712",
  border: "#252520",
  borderHover: "#353530",
  text: "#E8E4D8",
  muted: "#6A6A5A",
  dim: "#3A3A30",
};

const NAV = [
  { id: "cover",    label: "Начало",          short: "00" },
  { id: "skill",    label: "Навык",            short: "01" },
  { id: "limits",   label: "Ограничения ИИ",  short: "02" },
  { id: "effects",  label: "Side-эффекты",    short: "03" },
  { id: "tasks",    label: "Задания",          short: "04" },
  { id: "examples", label: "Примеры",          short: "05" },
  { id: "assess",   label: "Оценивание",       short: "06" },
];

const serif = { fontFamily: "'Cormorant', Georgia, serif" } as const;
const sans  = { fontFamily: "'Golos Text', 'IBM Plex Sans', sans-serif" } as const;

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ ...sans, borderColor: C.gold, color: C.gold }}
      className="inline-block text-[10px] tracking-[0.25em] uppercase border px-3 py-1">
      {children}
    </span>
  );
}

function SLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span style={{ color: C.gold, ...sans }} className="font-mono text-[11px] tracking-[0.3em]">{num}</span>
      <div style={{ background: C.gold }} className="h-px w-8 opacity-30" />
      <span style={{ color: C.muted, ...sans }} className="text-[11px] tracking-[0.22em] uppercase">{title}</span>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ ...sans, background: C.surface, color: C.gold, borderColor: C.border }}
      className="inline-block text-[10px] px-2.5 py-0.5 border mr-1.5 mb-1.5 tracking-wide">
      {children}
    </span>
  );
}

export default function Index() {
  const [active, setActive] = useState("cover");

  const goto = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: C.bg, color: C.text, ...sans }} className="min-h-screen">

      {/* ── БОКОВАЯ НАВИГАЦИЯ ── */}
      <aside style={{ borderColor: C.border }} className="fixed left-0 top-0 h-full w-14 z-50 flex flex-col items-center justify-center border-r gap-5">
        {NAV.map((n) => (
          <button key={n.id} onClick={() => goto(n.id)} title={n.label} className="flex flex-col items-center gap-1">
            <span style={{ color: active === n.id ? C.gold : C.dim, fontFamily: "monospace" }}
              className="text-[9px] tracking-[0.2em] transition-colors duration-300">{n.short}</span>
            <div style={{ background: active === n.id ? C.gold : C.dim }}
              className={`w-px transition-all duration-500 ${active === n.id ? "h-5" : "h-2"}`} />
          </button>
        ))}
      </aside>

      <div className="ml-14">

        {/* ══════════════════════════════════════
            00  ОБЛОЖКА
        ══════════════════════════════════════ */}
        <section id="cover" onMouseEnter={() => setActive("cover")}
          style={{ borderColor: C.border }}
          className="min-h-screen flex flex-col justify-between px-12 md:px-20 py-14 border-b">

          <div className="flex items-center justify-between">
            <Tag>HSE LED 2026</Tag>
            <span style={{ color: C.dim, fontFamily: "monospace" }} className="text-[10px] tracking-[0.2em] uppercase">
              EFL · Higher Education · Gen AI
            </span>
          </div>

          <div className="max-w-4xl">
            {/* акцентная точка */}
            <div style={{ borderColor: C.border }} className="grid grid-cols-3 gap-px border mb-10 w-fit">
              {[...Array(9)].map((_, i) => (
                <div key={i} style={{ background: i === 4 ? C.gold : C.bg }} className="w-2 h-2" />
              ))}
            </div>

            <h1 style={{ ...serif, color: C.text }}
              className="text-[clamp(2.2rem,4.8vw,4.8rem)] font-light leading-[1.08] tracking-tight mb-5">
              Проектирование учебных заданий<br />
              по английскому языку<br />
              <em style={{ color: C.gold }}>для неязыковых вузов</em><br />
              в эпоху генеративного ИИ
            </h1>
            <p style={{ color: C.muted }} className="text-[13px] mb-10 tracking-wide">
              От принципов до готовых сценариев
            </p>

            <div className="flex flex-wrap gap-6">
              {[
                { name: "Наталья Геннадьевна Лаврентьева", org: "Ивановский государственный университет", accent: true },
                { name: "Евгения Валерьевна Орлова", org: "Ивановский государственный энергетический университет", accent: false },
              ].map((a) => (
                <div key={a.name} style={{ borderLeftColor: a.accent ? C.gold : C.dim }} className="border-l-2 pl-5">
                  <p style={{ color: C.text }} className="text-[14px] font-medium">{a.name}</p>
                  <p style={{ color: C.muted }} className="text-[12px] mt-0.5">{a.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {NAV.slice(1).map((n) => (
              <button key={n.id} onClick={() => goto(n.id)}
                className="text-[11px] tracking-[0.12em] uppercase transition-colors"
                style={{ color: C.dim }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.dim)}>
                <span style={{ color: C.gold }}>{n.short} </span>{n.label}
              </button>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            01  НАВЫК
        ══════════════════════════════════════ */}
        <section id="skill" onMouseEnter={() => setActive("skill")}
          style={{ borderColor: C.border }} className="px-12 md:px-20 py-14 border-b">
          <SLabel num="01" title="Формирование навыка и его устойчивость" />

          {/* — Компетенция — */}
          <h2 style={serif} className="text-3xl md:text-4xl font-light mb-8" >
            Иноязычная коммуникативная компетенция
          </h2>

          <div style={{ background: C.border }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mb-6">
            {[
              { icon: "BookOpen",   label: "Лингвистический",           sub: "Грамотность · связность текста" },
              { icon: "GitBranch",  label: "Дискурсивный / стратегический", sub: "Логичное высказывание + тактики компенсации" },
              { icon: "Globe",      label: "Социокультурный",            sub: "Понимание культурного контекста" },
              { icon: "Smartphone", label: "Прагматический / цифровой", sub: "Реальные задачи + цифровые инструменты" },
            ].map((it) => (
              <div key={it.label} style={{ background: C.bg }}
                className="p-7 group transition-colors hover:brightness-125">
                <div style={{ borderColor: C.border }} className="w-8 h-8 flex items-center justify-center mb-5 border group-hover:border-[#C8A96E] transition-colors">
                  <Icon name={it.icon as "Globe"} size={14} style={{ color: C.gold }} />
                </div>
                <p style={{ color: C.text }} className="text-[13px] font-medium mb-1.5 leading-snug">{it.label}</p>
                <p style={{ color: C.muted }} className="text-[11px] leading-relaxed">{it.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 mb-14">
            {["Автоматизм", "Функциональность", "Адаптивность и гибкость"].map((c) => (
              <span key={c} className="flex items-center gap-2">
                <span style={{ background: C.gold }} className="w-1 h-1 rounded-full inline-block" />
                <span style={{ color: C.muted }} className="text-[12px]">{c}</span>
              </span>
            ))}
          </div>

          {/* — Skill Acquisition Theory — */}
          <div style={{ borderColor: C.border }} className="border p-8 mb-6 max-w-4xl">
            <div className="flex items-center gap-3 mb-7">
              <Tag>Skill Acquisition Theory</Tag>
              <span style={{ color: C.dim }} className="text-[11px]">1.1 · Продуктивный коммуникативный навык</span>
            </div>

            {/* Цепочка */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {["Декларативный", "Процедурный", "Автоматический", "Перенос в реальную коммуникацию"].map((s, i, a) => (
                <div key={s} className="flex items-center gap-2">
                  <div style={{ background: i === a.length - 1 ? C.gold : C.surface, color: i === a.length - 1 ? C.bg : C.gold, borderColor: C.border }}
                    className={`px-4 py-2 text-[12px] tracking-wide border ${i === a.length - 1 ? "font-semibold" : ""}`}>{s}</div>
                  {i < a.length - 1 && <Icon name="ChevronRight" size={12} style={{ color: C.dim }} />}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { t: "Активное извлечение", d: "Рассказ и ответы без опоры на текст; переключение в диалоге" },
                { t: "«Желательные трудности»", d: "Чередование задач и структур, смещение фокуса с формы на смысл" },
                { t: "Deliberate practice", d: "Целенаправленное повторение с получением обратной связи" },
                { t: "Реальный контекст", d: "Упражнения имитируют когнитивные требования живой коммуникации" },
              ].map((it) => (
                <div key={it.t} style={{ borderColor: C.border, background: C.surface }} className="p-5 border">
                  <p style={{ color: C.text }} className="text-[12px] font-semibold mb-1.5">{it.t}</p>
                  <p style={{ color: C.muted }} className="text-[11px] leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>

            <p style={{ color: C.dim, borderColor: C.border }} className="mt-5 pt-5 border-t text-[12px] italic">
              Подлинная автоматизация формируется через процедурализацию в условиях, приближённых к реальным
            </p>
          </div>

          {/* — AI-опосредованная модель — */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Tag>AI-опосредованная модель</Tag>
              <span style={{ color: C.dim }} className="text-[11px]">1.2 · Устойчивость навыка в эпоху ИИ</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div style={{ borderColor: C.border }} className="border p-6">
                <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-[0.2em] mb-3">Лингвистический трек</p>
                <p style={{ color: C.muted }} className="text-[13px] italic">Без изменений — традиционный путь формирования навыка</p>
              </div>
              <div style={{ borderColor: C.gold, background: C.surface }} className="border border-opacity-40 p-6">
                <p style={{ color: C.gold }} className="text-[10px] uppercase tracking-[0.2em] mb-4">AI-опосредованный трек — новый</p>
                <ul className="space-y-1.5 mb-4">
                  {["Практика с немедленной обратной связью", "Метакогнитивный контроль", "Адаптация к ии-собеседнику"].map(it => (
                    <li key={it} className="flex gap-2 text-[12px]" style={{ color: "#9A9A8A" }}>
                      <span style={{ color: C.gold }}>·</span>{it}
                    </li>
                  ))}
                </ul>
                <div style={{ borderColor: C.border }} className="pt-4 border-t">
                  <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-wide mb-2">Human-надстройка</p>
                  {["Интеракциональная точность", "Прагматическая гибкость", "Эмоциональная связь"].map(it => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            02  ОГРАНИЧЕНИЯ ИИ
        ══════════════════════════════════════ */}
        <section id="limits" onMouseEnter={() => setActive("limits")}
          style={{ borderColor: C.border }} className="px-12 md:px-20 py-14 border-b">
          <SLabel num="02" title="Ограничения ИИ" />

          <h2 style={{ ...serif, color: C.text }} className="text-3xl md:text-5xl font-light mb-4 leading-tight">
            Что ИИ <em style={{ color: C.gold }}>не может</em> сделать за студента
          </h2>
          <p style={{ color: C.muted }} className="text-[13px] mb-12 max-w-xl leading-relaxed">
            LLM не улавливают тонкие дискурсивные связи — это создаёт системные дефициты в формировании навыка
          </p>

          {/* 3 дефицита */}
          <div style={{ background: C.border }} className="grid md:grid-cols-3 gap-px mb-14">
            {[
              { area: "Лексика и грамматика", icon: "Type",
                body: "LLM не улавливают тонкие лексические связи между частями дискурса. Знание слов и их ассоциативных полей формируется встроенным в прагматические активности — критично для беглой, контекстуально-уместной речи." },
              { area: "Чтение", icon: "BookOpen",
                body: "Контекстуальное понимание — реконструкция интенционального смысла с учётом ситуации и фоновых знаний — недоступно для модели." },
              { area: "Говорение", icon: "Mic",
                body: "Машинный тип прагматики развивает «шаблонный» язык: отсутствуют «прагматические» реакции, живая спонтанность речи." },
            ].map((it) => (
              <div key={it.area} style={{ background: C.bg }}
                className="p-8 group hover:brightness-110 transition-all">
                <Icon name={it.icon as "Type"} size={15} style={{ color: C.dim }} className="mb-4 group-hover:text-[#C8A96E] transition-colors" />
                <p style={{ color: C.gold }} className="text-[11px] uppercase tracking-[0.2em] mb-3">{it.area}</p>
                <p style={{ color: C.muted }} className="text-[13px] leading-[1.8]">{it.body}</p>
              </div>
            ))}
          </div>

          {/* Цепочка компетенций */}
          <div className="max-w-2xl">
            <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-[0.25em] mb-6">Иерархия компетенций</p>
            <div className="space-y-0">
              {[
                { label: "Лексико-тематические связи", sub: "знание слов и их ассоциативных полей", dir: "обеспечивают материал для" },
                { label: "Контекстуальное понимание", sub: "способность выводить импликатуры, интерпретировать интенции", dir: "создаёт основу для" },
                { label: "Прагматическая компетенция", sub: "способность действовать уместно, управлять социальными отношениями", dir: null },
              ].map((node, i) => (
                <div key={node.label}>
                  <div style={{ borderColor: i === 2 ? C.gold : C.border, background: i === 2 ? C.surface : C.bg }}
                    className="flex items-start gap-4 p-5 border">
                    <div style={{ background: i === 2 ? C.gold : C.dim }} className="w-1 self-stretch rounded-sm shrink-0" />
                    <div>
                      <p style={{ color: C.text }} className="text-[14px] font-medium">{node.label}</p>
                      <p style={{ color: C.muted }} className="text-[12px] mt-1">{node.sub}</p>
                    </div>
                  </div>
                  {node.dir && (
                    <div className="flex items-center gap-2 py-2 pl-6">
                      <Icon name="ArrowDown" size={11} style={{ color: C.dim }} />
                      <span style={{ color: C.dim }} className="text-[10px] italic">{node.dir}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Максимы Грайса */}
          <div className="mt-12">
            <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-[0.25em] mb-5">
              Письмо · нарушение максим Грайса при AI-генерации
            </p>
            <div style={{ background: C.border }} className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-3xl">
              {[
                { m: "Quantity", rule: "Будь информативен, но не избыточен", ai: "Чрезмерная информация" },
                { m: "Quality",  rule: "Будь правдив",                       ai: "Ложные утверждения как факты" },
                { m: "Relation", rule: "Будь релевантен",                    ai: "Сбои в поддержании релевантности" },
                { m: "Manner",   rule: "Будь ясен, краток, организован",     ai: "Verbosity, нет иерархической структуры" },
              ].map((g) => (
                <div key={g.m} style={{ background: C.bg }} className="p-5">
                  <p style={{ color: C.gold }} className="font-mono text-[12px] font-semibold mb-2">{g.m}</p>
                  <p style={{ color: C.muted }} className="text-[11px] mb-2 leading-snug">{g.rule}</p>
                  <p style={{ color: "#7A3A3A" }} className="text-[11px] leading-snug">↳ {g.ai}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            03  SIDE-ЭФФЕКТЫ
        ══════════════════════════════════════ */}
        <section id="effects" onMouseEnter={() => setActive("effects")}
          style={{ borderColor: C.border }} className="px-12 md:px-20 py-14 border-b">
          <SLabel num="03" title="Side-эффекты в обучении с ИИ" />

          <h2 style={{ ...serif, color: C.text }} className="text-3xl md:text-5xl font-light mb-12 leading-tight">
            Риски, которые<br />
            <em style={{ color: C.gold }}>нельзя игнорировать</em>
          </h2>

          <div className="max-w-2xl space-y-0">
            {[
              { n: "01", title: "Перенос ответственности",                  desc: "Студент делегирует мышление инструменту, теряя авторство" },
              { n: "02", title: "Эхо-камера",                               desc: "Подтверждение имеющихся идей без критического вызова" },
              { n: "03", title: "Упрощение опыта",                          desc: "Редукция сложности — обход когнитивных трудностей" },
              { n: "04", title: "Потеря настойчивости",                     desc: "Снижение толерантности к трудности и усилию" },
              { n: "05", title: "Слабое качество самостоятельной работы",   desc: "Деградация продуктивных навыков без поддержки ИИ" },
            ].map((it) => (
              <div key={it.n} style={{ borderColor: C.border }}
                className="group flex items-start gap-7 py-7 border-b transition-colors hover:bg-[#171712] px-2 -mx-2">
                <span style={{ color: C.dim, fontFamily: "monospace" }} className="text-[10px] mt-0.5 shrink-0">{it.n}</span>
                <div>
                  <p style={{ color: C.gold }} className="text-[15px] font-medium mb-1">{it.title}</p>
                  <p style={{ color: C.muted }} className="text-[12px] leading-relaxed">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            04  УСТОЙЧИВЫЕ ЗАДАНИЯ
        ══════════════════════════════════════ */}
        <section id="tasks" onMouseEnter={() => setActive("tasks")}
          style={{ borderColor: C.border }} className="px-12 md:px-20 py-14 border-b">
          <SLabel num="04" title="Устойчивые задания: параметры, характеристики, принципы" />

          <h2 style={{ ...serif, color: C.text }} className="text-3xl md:text-5xl font-light mb-12 leading-tight">
            Задания, устойчивые к<br />
            <em style={{ color: C.gold }}>автоматизированному</em><br />
            выполнению
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mb-14">
            {/* Параметры */}
            <div>
              <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-[0.25em] mb-5">Параметры устойчивости</p>
              <div className="space-y-3">
                {[
                  { t: "Контекстуализация", d: "Контекстное понимание, уникальная ситуация" },
                  { t: "Персонализация", d: "Личный опыт, убеждения, позиция студента" },
                  { t: "Акцент на процесс", d: "Важен путь, а не только финальный продукт" },
                ].map((p) => (
                  <div key={p.t} style={{ borderColor: C.border }}
                    className="flex gap-4 p-5 border hover:border-[#C8A96E] transition-colors" style2={{ borderColor: C.border }}>
                    <div style={{ background: C.gold }} className="w-0.5 shrink-0 rounded-sm opacity-50" />
                    <div>
                      <p style={{ color: C.text }} className="text-[13px] font-semibold mb-1">{p.t}</p>
                      <p style={{ color: C.muted }} className="text-[12px]">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Характеристики */}
            <div>
              <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-[0.25em] mb-5">Характеристики заданий</p>
              <div className="grid grid-cols-2 gap-2">
                {["Динамичность", "Непредсказуемость", "Мета-когнитивная нагрузка", "Интеграция навыков",
                  "Контент в реальном времени", "Социальное взаимодействие", "Аффективное вовлечение"].map((c, i) => (
                  <div key={c} style={{ borderColor: C.border, color: C.muted }}
                    className={`p-3.5 text-[11px] text-center border hover:text-[#C8A96E] hover:border-[#C8A96E] transition-all cursor-default ${i === 6 ? "col-span-2" : ""}`}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Типология */}
          <div>
            <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-[0.25em] mb-5">
              Типология заданий и целевые дефициты
            </p>
            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl text-[12px] border-collapse">
                <thead>
                  <tr style={{ borderColor: C.border }} className="border-b">
                    {["Тип", "Название", "Дефицит AI", "Механизм донастройки"].map(h => (
                      <th key={h} style={{ color: C.dim }} className="text-left py-3 pr-6 text-[10px] uppercase tracking-[0.2em] font-normal">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "T1", name: "Релевантность и максимы",        deficit: "Relation, Quantity, Quality",                      mech: "Маркировка нарушений + замена" },
                    { t: "T2", name: "Импликатуры и небуквальные смыслы", deficit: "Отсутствие Theory of Mind, буквализм",          mech: "Косвенные реплики → вывод импликатуры" },
                    { t: "T3", name: "Лексико-тематические связи",      deficit: "Тонкие лексические отношения, коллокации",         mech: "Групповое редактирование + аутентичные примеры" },
                    { t: "T4", name: "Социопрагматическая уместность",  deficit: "Игнорирование дистанции и статуса",                mech: "Ролевая игра + объяснение выбора" },
                    { t: "T5", name: "Ремонт и стратегии восстановления", deficit: "Отсутствие other-repair",                        mech: "Намеренные помехи + обязательная repair" },
                    { t: "T6", name: "Trans-pragmatic competence",      deficit: "Некритическая интернализация AI-шаблонов",          mech: "Групповая рефлексия + формулирование правил" },
                  ].map((row) => (
                    <tr key={row.t} style={{ borderColor: C.border }}
                      className="border-b hover:bg-[#171712] transition-colors">
                      <td style={{ color: C.gold }} className="py-4 pr-6 font-mono font-semibold align-top">{row.t}</td>
                      <td style={{ color: C.text }} className="py-4 pr-6 font-medium align-top">{row.name}</td>
                      <td style={{ color: C.muted }} className="py-4 pr-6 align-top">{row.deficit}</td>
                      <td style={{ color: C.muted }} className="py-4 align-top">{row.mech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            05  ПРИМЕРЫ ЗАДАНИЙ
        ══════════════════════════════════════ */}
        <section id="examples" onMouseEnter={() => setActive("examples")}
          style={{ borderColor: C.border }} className="px-12 md:px-20 py-14 border-b">
          <SLabel num="05" title="Примеры заданий" />

          <h2 style={{ ...serif, color: C.text }} className="text-3xl md:text-5xl font-light mb-12 leading-tight">
            Четыре сценария<br />
            <em style={{ color: C.gold }}>донастройки</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-px" style={{ background: C.border }}>
            {[
              {
                num: "1",
                tag: "T2 · Небуквальные смыслы",
                title: "Импликатуры",
                goal: "Развить способность выводить и продуцировать небуквальные смыслы",
                icon: "MessageCircle",
                bullets: [
                  "Студенты получают диалоги с непрямыми репликами",
                  "Задача: объяснить «что имел в виду говорящий» — не буквально",
                  "Второй этап: самостоятельно продуцировать косвенные высказывания",
                ],
              },
              {
                num: "2",
                tag: "T3 · Лексико-тематические связи",
                title: "От слов к контексту",
                goal: "Использовать лексику как часть прагматической схемы (жалоба → набор слов и структур)",
                icon: "Network",
                bullets: [
                  "Заданная коммуникативная ситуация: жалоба, просьба, совет",
                  "Построить лексическое поле для ситуации в группе",
                  "Оценить: какие слова «звучат» естественно, а какие — как AI",
                ],
              },
              {
                num: "3",
                tag: "T4 · Социопрагматическая уместность",
                title: "Кто, кому, когда, где",
                goal: "Развить чувствительность к вариативности в зависимости от контекста",
                icon: "Users",
                bullets: [
                  "Одна и та же просьба: 4 варианта (преподаватель / друг / начальник / незнакомый)",
                  "Объяснить выбор слов, тона, структуры",
                  "Выявить «нейтральный» AI-стиль и его дефициты",
                ],
              },
              {
                num: "4",
                tag: "T5 · Стратегии восстановления",
                title: "Repair",
                goal: "Научиться запрашивать и предоставлять уточнение при коммуникативном сбое",
                icon: "RefreshCw",
                bullets: [
                  "Партнёр намеренно вносит помехи: неточность, двусмысленность",
                  "Студент обязан запросить уточнение и отреагировать",
                  "Оценивается: скорость обнаружения сбоя, стратегия repair",
                ],
              },
            ].map((ex) => (
              <div key={ex.num} style={{ background: C.bg }}
                className="p-8 group hover:brightness-110 transition-all">
                <div className="flex items-start justify-between mb-5">
                  <span style={{ ...serif, color: C.border }} className="text-5xl font-light select-none group-hover:text-[#2A2A20] transition-colors">{ex.num}</span>
                  <span style={{ color: C.gold }} className="text-[9px] tracking-[0.15em] uppercase text-right mt-1">{ex.tag}</span>
                </div>
                <p style={{ color: C.text }} className="text-[15px] font-semibold mb-2">{ex.title}</p>
                <p style={{ color: C.muted }} className="text-[12px] italic mb-5 leading-relaxed border-l border-[#252520] pl-3">{ex.goal}</p>
                <ul className="space-y-2">
                  {ex.bullets.map(b => (
                    <li key={b} className="flex gap-2 text-[12px]" style={{ color: "#7A7A6A" }}>
                      <span style={{ color: C.gold }} className="mt-0.5 shrink-0">→</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            06  ЧТО ОЦЕНИВАТЬ
        ══════════════════════════════════════ */}
        <section id="assess" onMouseEnter={() => setActive("assess")}
          className="px-12 md:px-20 py-14">
          <SLabel num="06" title="Что оценивать?" />

          <h2 style={{ ...serif, color: C.text }} className="text-3xl md:text-5xl font-light mb-14 leading-tight">
            Критерии оценивания<br />
            <em style={{ color: C.gold }}>живого навыка</em>
          </h2>

          <div className="max-w-3xl">
            {[
              { n: "01", title: "Продуктивная когнитивная нагрузка",    desc: "Уровень усилия, затраченного на порождение смысла — не воспроизведение шаблона" },
              { n: "02", title: "Гибкость коммуникативных стратегий",   desc: "Способность менять тактику при изменении контекста, задачи или собеседника" },
              { n: "03", title: "Генерация новых идей",                  desc: "Частота появления оригинальных смысловых ходов, не заимствованных из источников" },
              { n: "04", title: "Интеграция личного опыта",              desc: "Способность органично встроить собственный контекст в иноязычное высказывание" },
              { n: "05", title: "Осознанность выбора",                   desc: "Способность объяснить, почему выбрана именно эта языковая форма в данном контексте" },
            ].map((it) => (
              <div key={it.n} style={{ borderColor: C.border }}
                className="group flex items-start gap-7 py-7 border-b">
                <span style={{ color: C.dim, fontFamily: "monospace" }} className="text-[10px] mt-0.5 shrink-0">{it.n}</span>
                <div className="flex-1">
                  <p style={{ color: C.text }} className="text-[15px] font-medium mb-1.5">{it.title}</p>
                  <p style={{ color: C.muted }} className="text-[13px] leading-relaxed">{it.desc}</p>
                </div>
                <div style={{ borderColor: C.border }}
                  className="w-7 h-7 rounded-full border flex items-center justify-center group-hover:border-[#C8A96E] transition-colors shrink-0 mt-0.5">
                  <Icon name="ArrowRight" size={11} style={{ color: C.dim }} className="group-hover:text-[#C8A96E] transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Финальный тезис */}
          <div style={{ borderColor: C.border }} className="mt-20 pt-10 border-t grid md:grid-cols-2 gap-10 items-end">
            <div>
              <p style={{ color: C.dim }} className="text-[10px] uppercase tracking-[0.3em] mb-4">Итоговый тезис</p>
              <p style={{ ...serif, color: C.text }} className="text-2xl md:text-3xl font-light leading-relaxed">
                Задание устойчиво, если его результат<br />
                <em style={{ color: C.gold }}>уникален для конкретного студента</em><br />
                в конкретный момент времени
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <Tag>HSE LED 2026</Tag>
              <p style={{ color: C.dim }} className="text-[12px]">Лаврентьева · Орлова</p>
              <button onClick={() => goto("cover")}
                className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase transition-colors mt-1"
                style={{ color: C.dim }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.dim)}>
                <Icon name="ArrowUp" size={11} />В начало
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
