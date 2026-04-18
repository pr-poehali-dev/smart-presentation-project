import { useState } from "react";
import Icon from "@/components/ui/icon";

const sections = [
  { id: "cover", label: "Начало", num: "00" },
  { id: "contents", label: "Оглавление", num: "01" },
  { id: "content", label: "Ключевые идеи", num: "02" },
  { id: "summary", label: "Итоги", num: "03" },
];

const ideas = [
  {
    num: "I",
    title: "Стратегическое видение",
    text: "Долгосрочная перспектива определяет тактические решения. Понимание глобального контекста позволяет принимать осознанные шаги в краткосрочной перспективе.",
  },
  {
    num: "II",
    title: "Системный подход",
    text: "Каждый элемент влияет на всю систему. Анализ взаимосвязей между компонентами открывает неочевидные точки роста и скрытые риски.",
  },
  {
    num: "III",
    title: "Измеримые результаты",
    text: "Качество решений определяется конкретными метриками. Без чётких критериев успеха невозможно отследить реальный прогресс и скорректировать курс.",
  },
  {
    num: "IV",
    title: "Непрерывное совершенствование",
    text: "Стагнация — это движение назад. Культура постоянного улучшения процессов создаёт устойчивое конкурентное преимущество.",
  },
];

const recommendations = [
  {
    title: "Приоритизация",
    text: "Сосредоточить усилия на трёх ключевых направлениях, отказавшись от распыления ресурсов.",
  },
  {
    title: "Метрики",
    text: "Внедрить систему измерения результатов с еженедельным мониторингом показателей.",
  },
  {
    title: "Команда",
    text: "Сформировать кросс-функциональную группу для реализации стратегических инициатив.",
  },
];

export default function Index() {
  const [active, setActive] = useState("cover");

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-ibm text-[#1A1A18]">
      {/* Фиксированная боковая навигация */}
      <nav className="fixed left-0 top-0 h-full w-20 flex flex-col items-center justify-center z-50 border-r border-[#E8E6E0]">
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="group flex flex-col items-center gap-1"
            >
              <span
                className={`text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                  active === s.id ? "text-[#1A1A18]" : "text-[#BDBDB5]"
                }`}
              >
                {s.num}
              </span>
              <div
                className={`w-px transition-all duration-300 ${
                  active === s.id ? "h-8 bg-[#1A1A18]" : "h-4 bg-[#BDBDB5]"
                }`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Контент */}
      <div className="ml-20">

        {/* 00 — Титул */}
        <section
          id="cover"
          className="min-h-screen flex flex-col justify-between px-16 py-20"
          onMouseEnter={() => setActive("cover")}
        >
          <div className="flex items-center justify-between text-[11px] tracking-[0.25em] text-[#BDBDB5] uppercase">
            <span>2026</span>
            <span>Версия 1.0</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.3em] text-[#BDBDB5] uppercase mb-8">
              Стратегическая презентация
            </p>
            <h1 className="font-cormorant text-[clamp(4rem,9vw,8rem)] font-light leading-[1.05] tracking-tight mb-10 text-[#1A1A18]">
              Название<br />
              <span className="italic">вашего проекта</span>
            </h1>
            <div className="w-16 h-px bg-[#1A1A18] mb-10" />
            <p className="text-[15px] font-light text-[#7A7A72] leading-relaxed max-w-md">
              Краткое описание темы — одно-два предложения, которые объясняют суть презентации и её цель для аудитории.
            </p>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[13px] text-[#1A1A18] font-medium mb-1">Иван Иванов</p>
              <p className="text-[12px] text-[#BDBDB5]">Должность · Организация</p>
            </div>
            <button
              onClick={() => scrollTo("contents")}
              className="flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-[#7A7A72] hover:text-[#1A1A18] transition-colors group"
            >
              Далее
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* 01 — Оглавление */}
        <section
          id="contents"
          className="min-h-screen flex flex-col justify-center px-16 py-20 border-t border-[#E8E6E0]"
          onMouseEnter={() => setActive("contents")}
        >
          <p className="text-[11px] tracking-[0.3em] text-[#BDBDB5] uppercase mb-16">01 · Оглавление</p>

          <div className="max-w-2xl">
            {[
              { n: "00", title: "Введение", desc: "Контекст и постановка задачи" },
              { n: "01", title: "Оглавление", desc: "Структура и навигация" },
              { n: "02", title: "Ключевые идеи", desc: "Четыре основных тезиса" },
              { n: "03", title: "Итоги и рекомендации", desc: "Выводы и следующие шаги" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(["cover", "contents", "content", "summary"][i])}
                className="w-full group flex items-baseline gap-8 py-7 border-b border-[#E8E6E0] last:border-b-0 text-left hover:pl-2 transition-all duration-300"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#BDBDB5] w-6 shrink-0">{item.n}</span>
                <div className="flex-1">
                  <h3 className="font-cormorant text-3xl font-light text-[#1A1A18] group-hover:text-[#3A3A32] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#BDBDB5]">{item.desc}</p>
                </div>
                <Icon name="ArrowRight" size={14} className="text-[#BDBDB5] group-hover:text-[#1A1A18] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </section>

        {/* 02 — Ключевые идеи */}
        <section
          id="content"
          className="min-h-screen px-16 py-20 border-t border-[#E8E6E0]"
          onMouseEnter={() => setActive("content")}
        >
          <p className="text-[11px] tracking-[0.3em] text-[#BDBDB5] uppercase mb-16">02 · Ключевые идеи</p>

          <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] mb-20 max-w-xl">
            Четыре тезиса,<br />
            <span className="italic">которые определяют</span><br />
            направление
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl">
            {ideas.map((idea, i) => (
              <div
                key={i}
                className={`p-10 border-[#E8E6E0] ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b" : ""}`}
              >
                <div className="font-cormorant text-5xl font-light text-[#E8E6E0] mb-6 select-none">
                  {idea.num}
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-[#1A1A18] mb-4">
                  {idea.title}
                </h3>
                <p className="text-[13px] text-[#7A7A72] leading-[1.8] font-light">
                  {idea.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Итоги */}
        <section
          id="summary"
          className="min-h-screen px-16 py-20 border-t border-[#E8E6E0]"
          onMouseEnter={() => setActive("summary")}
        >
          <p className="text-[11px] tracking-[0.3em] text-[#BDBDB5] uppercase mb-16">03 · Итоги и рекомендации</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-5xl">
            {/* Итоги */}
            <div>
              <h2 className="font-cormorant text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-12">
                Что мы<br />
                <span className="italic">выяснили</span>
              </h2>

              <div className="space-y-6">
                {[
                  "Текущая ситуация требует пересмотра ключевых приоритетов и перераспределения ресурсов.",
                  "Три из четырёх выявленных проблем имеют общий корневой источник.",
                  "Потенциал роста оценивается в 30–40% при правильном применении стратегии.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-px bg-[#1A1A18] mt-1 shrink-0" style={{ height: "calc(100% - 4px)" }} />
                    <p className="text-[14px] text-[#7A7A72] leading-[1.8] font-light">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Рекомендации */}
            <div>
              <h2 className="font-cormorant text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-12">
                Что<br />
                <span className="italic">делать дальше</span>
              </h2>

              <div className="space-y-0">
                {recommendations.map((r, i) => (
                  <div key={i} className="py-7 border-b border-[#E8E6E0] last:border-b-0">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-[10px] tracking-[0.2em] text-[#BDBDB5]">0{i + 1}</span>
                      <h4 className="font-cormorant text-xl font-medium text-[#1A1A18]">{r.title}</h4>
                    </div>
                    <p className="text-[13px] text-[#7A7A72] leading-[1.8] font-light pl-8">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Финальная строка */}
          <div className="mt-24 pt-10 border-t border-[#E8E6E0] flex items-center justify-between text-[11px] tracking-[0.2em] text-[#BDBDB5] uppercase">
            <span>Иван Иванов · 2026</span>
            <button
              onClick={() => scrollTo("cover")}
              className="flex items-center gap-2 hover:text-[#1A1A18] transition-colors group"
            >
              <Icon name="ArrowUp" size={12} className="group-hover:-translate-y-0.5 transition-transform" />
              В начало
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
