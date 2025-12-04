import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-green-50">
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div
          className="absolute w-96 h-96 rounded-full bg-purple-200/30 blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        
        <div className="relative z-10 text-center max-w-3xl animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light mb-12 text-purple-900 tracking-tight">
            расслабься
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-purple-700/80 mb-8 leading-relaxed">
            здесь нет никаких дедлайнов
          </p>
          
          <p className="text-xl md:text-2xl font-light text-purple-600/70 mb-16">
            поводи мышкой, подыши
          </p>

          <div className="animate-pulse-slow">
            <Icon name="ChevronDown" size={48} className="text-purple-400 mx-auto" />
          </div>
          
          <p className="text-lg text-purple-500/60 mt-4 animate-float">
            кейс внизу, листай ниже
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-purple-100 rounded-full text-purple-700 font-medium mb-6">
            SEO & Маркетинг
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-purple-900">
            Кейс: Клиника лазерной коррекции зрения
          </h2>
          <a href="https://glaza.help" target="_blank" rel="noopener noreferrer" className="text-xl text-purple-600 hover:text-purple-800 underline">
            glaza.help
          </a>
          <p className="text-xl text-purple-700/70 max-w-3xl mx-auto mt-6">
            За 4 года проект вырос с ~100 до 4300+ заявок в месяц.<br />
            Моя роль: исполнитель в команде на этапе масштабирования гео-сетки из 1200+ городских страниц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
            </div>
            <div className="text-5xl font-bold text-purple-600 mb-3">4300+</div>
            <div className="text-lg font-semibold text-purple-900 mb-2">Заявок в месяц</div>
            <p className="text-purple-700/70 text-sm">Рост с ~100 за 4 года</p>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Icon name="DollarSign" size={24} className="text-white" />
              </div>
            </div>
            <div className="text-5xl font-bold text-green-600 mb-3">350₽</div>
            <div className="text-lg font-semibold text-purple-900 mb-2">CPA</div>
            <p className="text-purple-700/70 text-sm">Снижение с ~900₽</p>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
            </div>
            <div className="text-5xl font-bold text-pink-600 mb-3">52К+</div>
            <div className="text-lg font-semibold text-purple-900 mb-2">Посетителей/мес</div>
            <p className="text-purple-700/70 text-sm">Органический трафик с 800</p>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Icon name="Target" size={24} className="text-white" />
              </div>
            </div>
            <div className="text-5xl font-bold text-blue-600 mb-3">6.8%</div>
            <div className="text-lg font-semibold text-purple-900 mb-2">Конверсия</div>
            <p className="text-purple-700/70 text-sm">Рост с 2.1%</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-10 bg-gradient-to-br from-purple-100/50 to-pink-100/50 backdrop-blur-sm border-purple-200">
            <h3 className="text-3xl font-semibold mb-8 text-purple-900 flex items-center gap-3">
              <Icon name="Briefcase" size={32} className="text-purple-600" />
              Моя зона ответственности
            </h3>
            <div className="space-y-5">
              {[
                {
                  title: 'Разработка гео-сетки',
                  desc: 'Создание 1200+ городских страниц вида «лазерная коррекция в [городе]»'
                },
                {
                  title: 'Контент и структура',
                  desc: 'Заголовки, тексты, формы записи, блоки отзывов и описание методик по ТЗ'
                },
                {
                  title: 'Адаптация под города',
                  desc: 'Ориентиры, районы, местная лексика — чтобы страницы были «живыми»'
                },
                {
                  title: 'SEO-оптимизация',
                  desc: 'Title, description, H1-H3, внутренняя перелинковка со статьями'
                },
                {
                  title: 'Работа с командой',
                  desc: 'Коммуникация с SEO-специалистами и разработчиками по правкам'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 animate-fade-in bg-white/50 p-4 rounded-xl" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <div>
                    <div className="text-lg font-semibold text-purple-900 mb-1">{item.title}</div>
                    <div className="text-purple-700/80">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-green-100/50 to-purple-100/50 backdrop-blur-sm border-green-200">
            <h3 className="text-3xl font-semibold mb-8 text-purple-900 flex items-center gap-3">
              <Icon name="BarChart3" size={32} className="text-green-600" />
              Динамика роста за 4 года
            </h3>
            <div className="space-y-8">
              {[
                { metric: 'Органический трафик', from: '800', to: '52 000+', unit: 'посетителей/мес', progress: 100 },
                { metric: 'ТОП-3 в поиске', from: '8', to: '380', unit: 'запросов', progress: 85 },
                { metric: 'Конверсия в заявку', from: '2.1%', to: '6.8%', unit: '', progress: 70 },
                { metric: 'Доля органики', from: '—', to: '65%', unit: 'всех заявок', progress: 90 }
              ].map((item, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-lg font-semibold text-purple-900">{item.metric}</span>
                    <div className="text-right">
                      <span className="text-purple-600/60 line-through text-sm mr-2">{item.from}</span>
                      <span className="text-green-600 font-bold text-xl">{item.to}</span>
                      {item.unit && <span className="text-purple-700/60 text-sm ml-1">{item.unit}</span>}
                    </div>
                  </div>
                  <div className="h-2 bg-purple-200/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Award" size={48} className="text-white" />
          </div>
          <h3 className="text-4xl font-bold mb-6">Главный результат</h3>
          <p className="text-2xl font-light opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Построена масштабируемая гео-сетка из 1200+ страниц,<br />
            которая генерирует 65% всех заявок клиники
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">43x</div>
              <div className="text-lg opacity-90">рост заявок</div>
              <div className="text-sm opacity-70 mt-1">за 4 года</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">65x</div>
              <div className="text-lg opacity-90">рост трафика</div>
              <div className="text-sm opacity-70 mt-1">с 800 до 52К</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">-61%</div>
              <div className="text-lg opacity-90">снижение CPA</div>
              <div className="text-sm opacity-70 mt-1">с 900₽ до 350₽</div>
            </div>
          </div>
        </Card>

        <Card className="p-10 bg-white/60 backdrop-blur-sm border-purple-200">
          <h3 className="text-3xl font-semibold mb-8 text-purple-900 text-center">
            Контекст проекта
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={20} className="text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-purple-900 mb-1">Отрасль</div>
                  <div className="text-purple-700/70">Клиника лазерной коррекции зрения с серьёзными инвестициями в оборудование</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-purple-900 mb-1">Моя роль</div>
                  <div className="text-purple-700/70">Исполнитель в проектной команде на этапе масштабирования</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={20} className="text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-purple-900 mb-1">Конкуренция</div>
                  <div className="text-purple-700/70">Высокая конкуренция в нише медицинских услуг</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-purple-900 mb-1">Задача</div>
                  <div className="text-purple-700/70">Развитие гео-сетки для масштабирования охвата по регионам</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="py-32 px-4 text-center bg-gradient-to-br from-pink-100/50 to-purple-100/50">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-12">
            <div className="text-8xl mb-8 animate-float">🐱 🐶</div>
            <h3 className="text-5xl font-light text-purple-900 mb-6">
              Спасибо, что дочитал до конца
            </h3>
            <p className="text-2xl text-purple-700/70 font-light">
              Надеюсь, тебе было так же приятно читать,<br />как мне было делать эти результаты 💜
            </p>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-2xl">
              Связаться со мной
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 rounded-2xl">
              Скачать полный кейс
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;