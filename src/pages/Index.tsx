import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-green-50">
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div
          className="absolute w-96 h-96 rounded-full bg-purple-200/30 blur-3xl transition-all duration-300"
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
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-purple-900">
            Мой кейс
          </h2>
          <p className="text-xl text-purple-700/70 max-w-2xl mx-auto">
            Результаты, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-6xl font-bold text-purple-600 mb-4">+247%</div>
            <div className="text-2xl font-semibold text-purple-900 mb-2">Рост конверсии</div>
            <p className="text-purple-700/70">За первые 3 месяца работы</p>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-6xl font-bold text-pink-600 mb-4">1.2М₽</div>
            <div className="text-2xl font-semibold text-purple-900 mb-2">Экономия бюджета</div>
            <p className="text-purple-700/70">Оптимизация процессов найма</p>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-6xl font-bold text-green-600 mb-4">-68%</div>
            <div className="text-2xl font-semibold text-purple-900 mb-2">Время закрытия вакансий</div>
            <p className="text-purple-700/70">С 45 до 14 дней в среднем</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-10 bg-gradient-to-br from-purple-100/50 to-pink-100/50 backdrop-blur-sm border-purple-200">
            <h3 className="text-3xl font-semibold mb-8 text-purple-900 flex items-center gap-3">
              <Icon name="TrendingUp" size={32} className="text-purple-600" />
              Динамика результатов
            </h3>
            <div className="space-y-6">
              {[
                { month: 'Месяц 1', value: 35, label: '+35% качество кандидатов' },
                { month: 'Месяц 2', value: 68, label: '+68% скорость найма' },
                { month: 'Месяц 3', value: 92, label: '+92% удовлетворенность' },
                { month: 'Месяц 4', value: 124, label: '+124% эффективность' }
              ].map((item, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium text-purple-800">{item.month}</span>
                    <span className="text-lg font-bold text-purple-600">{item.label}</span>
                  </div>
                  <div className="h-3 bg-purple-200/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(item.value, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-green-100/50 to-purple-100/50 backdrop-blur-sm border-green-200">
            <h3 className="text-3xl font-semibold mb-8 text-purple-900 flex items-center gap-3">
              <Icon name="Target" size={32} className="text-green-600" />
              Ключевые достижения
            </h3>
            <div className="space-y-6">
              {[
                { icon: 'Users', title: 'Команда выросла', desc: 'С 12 до 47 человек' },
                { icon: 'Award', title: 'Качество найма', desc: '95% кандидатов прошли испытательный срок' },
                { icon: 'Clock', title: 'Время реакции', desc: 'Отклик на вакансию за 2 часа' },
                { icon: 'Heart', title: 'NPS сотрудников', desc: 'Вырос с 45 до 87 пунктов' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-purple-900">{item.title}</div>
                    <div className="text-purple-700/70">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
          <h3 className="text-4xl font-bold mb-4">Итого:</h3>
          <p className="text-2xl font-light opacity-90 mb-8">
            Построена система найма, которая работает как часы
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">3.2x</div>
              <div className="text-lg opacity-80">быстрее закрытие вакансий</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">92%</div>
              <div className="text-lg opacity-80">удовлетворенность процессом</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1.2М₽</div>
              <div className="text-lg opacity-80">экономия за квартал</div>
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
