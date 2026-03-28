import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl font-bold">&gt;_</span>
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              fsociety
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">
              Модули
            </a>
            <a href="#how" className="text-muted-foreground hover:text-accent transition-colors">
              Как работает
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">
              Доступ
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all text-accent">
              [ войти ]
            </button>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-bold">
              Получить доступ
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="" className="w-auto h-3/4 object-contain opacity-60" />
        </div>
        <div className="absolute inset-0 bg-black/75" />

        {/* Matrix scanline effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <div className="w-full h-1 bg-accent animate-scanline" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-bold tracking-widest text-accent uppercase border border-accent/30 px-3 py-1 rounded">
                  // penetration testing framework v2.0
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Взломай.
                </span>
                <br />
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Протестируй.
                </span>
                <br />
                <span className="text-accent">Уничтожь.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Fsociety — профессиональный фреймворк для пентеста. DDoS-атаки, распространение
                пейлоадов, сканирование сетей и эксплуатация уязвимостей в едином интерфейсе.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-bold text-lg flex items-center gap-3 justify-center">
                  Запустить фреймворк
                  <Icon name="Terminal" size={20} className="group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Документация
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">50+</div>
                  <p className="text-sm text-white/60">Модулей атаки</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">10 000+</div>
                  <p className="text-sm text-white/60">Успешных тестов</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">100%</div>
                  <p className="text-sm text-white/60">Анонимность</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              {/* Terminal window mockup */}
              <div className="relative z-10 w-full max-w-lg bg-black/80 border border-accent/30 rounded-2xl overflow-hidden shadow-2xl shadow-accent/20">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-accent/20 bg-black/60">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <span className="ml-2 text-xs text-accent/60 font-mono">fsociety@root:~#</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <p className="text-accent">$ ./fsociety --init</p>
                  <p className="text-white/60">Initializing framework...</p>
                  <p className="text-white/60">Loading modules: <span className="text-accent">✓ OK</span></p>
                  <p className="text-white/60">DDoS engine: <span className="text-accent">✓ READY</span></p>
                  <p className="text-white/60">Payload generator: <span className="text-accent">✓ READY</span></p>
                  <p className="text-white/60">Network scanner: <span className="text-accent">✓ READY</span></p>
                  <p className="text-white/40">─────────────────────────────</p>
                  <p className="text-accent font-bold">[*] Fsociety Framework v2.0</p>
                  <p className="text-accent font-bold">[*] 50 модулей загружено</p>
                  <p className="text-white/60 mt-2">$ <span className="animate-pulse">█</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/3">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-bold tracking-widest text-accent/60 uppercase">// модули</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Полный арсенал
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Wifi",
                title: "DDoS-атаки",
                desc: "HTTP/UDP/TCP флуд с поддержкой ботнетов и распределённых атак высокой мощности",
              },
              {
                icon: "Bug",
                title: "Распространение вирусов",
                desc: "Генерация и доставка пейлоадов на целевые машины с обходом антивирусов",
              },
              {
                icon: "Network",
                title: "Сканирование сетей",
                desc: "Обнаружение открытых портов, уязвимостей и картирование инфраструктуры цели",
              },
              {
                icon: "ShieldOff",
                title: "Обход защит",
                desc: "Техники уклонения от IDS/IPS, файерволов и систем обнаружения вторжений",
              },
              {
                icon: "Terminal",
                title: "Удалённый доступ",
                desc: "RAT-модули для установки постоянного доступа и управления заражёнными системами",
              },
              {
                icon: "EyeOff",
                title: "Анонимизация",
                desc: "Встроенная маршрутизация через Tor, VPN-цепочки и прокси для полной анонимности",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
                    <Icon name={item.icon} size={22} className="text-accent" fallback="Terminal" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-bold tracking-widest text-accent/60 uppercase">// процесс</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Четыре шага до цели
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Разведка", desc: "Сканируйте цель, собирайте данные об уязвимостях и инфраструктуре" },
              { num: "02", title: "Подготовка", desc: "Выберите вектор атаки и настройте нужные модули фреймворка" },
              { num: "03", title: "Атака", desc: "Запустите выбранный модуль — DDoS, пейлоад или сканер" },
              { num: "04", title: "Анализ", desc: "Изучите результаты, получите отчёт и сохраните доступ" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/5 hover:bg-accent/10 border border-accent/20 hover:border-accent/50 rounded-2xl p-8 h-full flex flex-col justify-between transition-all cursor-pointer">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-accent/3">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-bold tracking-widest text-accent/60 uppercase">// доступ</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Уровни доступа
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Hacker",
                price: "4 900 ₽/мес",
                features: [
                  "20 модулей атаки",
                  "DDoS до 10 Gbps",
                  "Базовый генератор пейлоадов",
                  "Tor-маршрутизация",
                  "Поддержка сообщества",
                ],
                highlight: false,
              },
              {
                name: "Elite",
                price: "По запросу",
                features: [
                  "Все 50+ модулей",
                  "DDoS без ограничений",
                  "Продвинутые RAT-модули",
                  "VPN + Tor-цепочки",
                  "Приоритетная поддержка 24/7",
                  "Индивидуальные модули",
                ],
                highlight: true,
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                  )}
                  <div
                    className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between transition-all ${
                      plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-accent font-mono text-sm">//</span>
                        <h3 className="font-display font-bold text-2xl">{plan.name}</h3>
                      </div>
                      <p className="text-4xl font-black text-accent mb-8">{plan.price}</p>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex gap-3 text-sm items-start">
                            <Icon name="ChevronRight" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className={`w-full px-6 py-4 rounded-xl font-bold transition-all font-mono ${
                        plan.highlight
                          ? "bg-gradient-to-r from-accent to-accent/80 text-black hover:shadow-xl hover:shadow-accent/40"
                          : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5 text-accent"
                      }`}
                    >
                      {plan.highlight ? "[ Связаться с нами ]" : "[ Попробовать бесплатно ]"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-6 text-accent font-mono text-sm">$ sudo ./fsociety --start</div>
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готов к взлому?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Присоединяйся к сотням пентестеров, которые используют Fsociety для профессионального тестирования безопасности.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto">
            Начать пентест
            <Icon name="Terminal" size={20} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-mono">
          <p>© 2025 <span className="text-accent">fsociety</span> — пентест-фреймворк</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-accent transition-colors">Условия</a>
            <a href="#" className="hover:text-accent transition-colors">Документация</a>
            <a href="#" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
