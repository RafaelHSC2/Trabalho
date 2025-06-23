import { useEffect, useState } from 'react';
import './app.css';
import { ReactComponent as EditIcon } from './images/edit.svg';
import { ReactComponent as SettingsIcon } from './images/settings.svg';
import logoImage from './images/dog_square.png';
import FooterComponent from './components/FooterComponent';
import { Quiz } from './components/Quiz';
import ImageCarousel from './components/ImageCarousel';
import Clock from './components/Clock';
import Checklist from './components/Checklist';
import { Counter } from './components/Counter';
import { ToggleSwitch } from './components/ToggleSwitch';
import { TimedMessage } from './components/TimedMessage';
import Formulario from './components/Formulario';

function App() {
  const [showFormulario, setShowFormulario] = useState(false);

  useEffect(() => {
    // Verifica URL inicial
    if (window.location.pathname === '/formulario') {
      setShowFormulario(true);
    }

    // Lida com navegação de volta/forward
    const handlePopState = () => {
      setShowFormulario(window.location.pathname === '/formulario');
    };
    window.addEventListener('popstate', handlePopState);

    // Lida com rolagem suave
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const header = document.querySelector('.app-header');
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    const menuLinks = document.querySelectorAll('.item-menu a[href^="#"]');
    menuLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      menuLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleFormularioClick = (e) => {
    e.preventDefault();
    setShowFormulario(true);
    window.history.pushState(null, null, '/formulario');
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowFormulario(false);
    window.history.pushState(null, null, '/');
  };

  const sections = [
    { id: 'quemsomos', title: 'Quem Somos' },
    { id: 'empresa', title: 'Empresa' },
    { id: 'carrossel', title: 'Carrossel' },
    { id: 'relogio', title: 'Relógio' },
    { id: 'quiz', title: 'Quiz' },
    { id: 'interativo', title: 'Interativo' },
    { id: 'toggle', title: 'Toggle' },
    { id: 'mensagem', title: 'Mensagem' },
    { id: 'formulario', title: 'Formulário', onClick: handleFormularioClick },
    { id: 'sobre', title: 'Sobre' }
  ];

  const carouselImages = [
    { url: '/images/car.jpg', caption: 'Imagem 1 - Pálio' },
    { url: '/images/dog_square.png', caption: 'Imagem 2 - Cyberpunk' },
    { url: '/images/dog1.jpg', caption: 'Imagem 3 - Coitadinho da Silva' },
    { url: '/images/dog2.jpg', caption: 'Imagem 4 - 31/05/2025' },
    { url: '/images/dog3.jpg', caption: 'Imagem 5 - 144p' },
    { url: '/images/dog4.jpg', caption: 'Imagem 6 - Tai Lung' },
    { url: '/images/sky1.jpg', caption: 'Imagem 7 - Céu UFPR' },
    { url: '/images/sky2.jpg', caption: 'Imagem 8 - Nuvens' },
    { url: '/images/ufpr.jpg', caption: 'Imagem 9 - Também Céu da UFPR' },
    { url: '/images/3.jpg', caption: 'Imagem 10 - Bosque' },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-wrapper">
          <h1 className="logo-text">Parallax</h1>
          <img src={logoImage} alt="Logo" className="header-logo" />
        </div>
        <nav>
          <ul className="menu">
            <li className="item-menu">
              <a href="/" onClick={handleHomeClick}>Home</a>
            </li>
            {sections.map((section) => (
              <li key={section.id} className="item-menu">
                <a
                  href={section.id === 'formulario' ? '/formulario' : `#${section.id}`}
                  onClick={section.onClick || null}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="icones">
            <EditIcon className="icone-svg" />
            <SettingsIcon className="icone-svg" />
          </div>
        </nav>
      </header>

      <main className="main-content">
        {showFormulario ? (
          <Formulario />
        ) : (
          <>
            <section className="textformat" id="quemsomos">
              <h3 className="sectiontitle">Quem Somos</h3>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Atirei o pau no gatis, per gatis num morreus. Delegadis gente finis, bibendum egestas augue arcu ut est. In elementis mé pra quem é amistosis quis leo.</p>
              <p>Si num tem leite então bota uma pinga aí cumpadi! Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
              <p>Negão é teu passadis, eu sou faxa pretis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Leite de capivaris, leite de mula manquis sem cabeça.</p>
            </section>

            <div className="parallax-section parallax-1">
              <div className="parallax-caption">Floresta</div>
            </div>

            <section className="textformat2" id="empresa">
              <h3 className="sectiontitle">Empresa</h3>
              <p>Si num tem leite então bota uma pinga aí cumpadi! Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
              <p>Negão é teu passadis, eu sou faxa pretis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Leite de capivaris, leite de mula manquis sem cabeça.</p>
            </section>

            <div className="parallax-section parallax-2">
              <div className="parallax-caption">Campos verdes</div>
            </div>

            <section className="textformat" id="carrossel">
              <h3 className="sectiontitle">Requisitos do Projeto</h3>
              <Checklist />
              <h3 className="sectiontitle" style={{ marginTop: '50px' }}>Top 10 Imagens</h3>
              <ImageCarousel 
                images={carouselImages} 
                autoPlay={true} 
                interval={4000} 
              />
            </section>

            <section className="textformat2" id="relogio">
              <h3 className="sectiontitle">Hora & Data</h3>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <Clock 
                  showSeconds={true} 
                  showDate={true}
                  textColor="#ff00aa" 
                  bgColor="rgba(10, 10, 42, 0.8)"
                />
              </div>
            </section>

            <section id="quiz">
              <h3 className="sectiontitle">Teste Seu Conhecimento</h3>
              <Quiz />
            </section>

            <section className="textformat" id="interativo">
              <h3 className="sectiontitle">Contador</h3>
              <Counter />
            </section>

            <div className="parallax-section parallax-3">
              <div className="parallax-caption">Bosque</div>
            </div>

            <section className="textformat2" id="toggle">
              <h3 className="sectiontitle">Interruptor</h3>
              <ToggleSwitch />
            </section>

            <section className="textformat" id="mensagem">
              <h3 className="sectiontitle">Mensagem</h3>
              <TimedMessage />
            </section>

            <section className="textformat" id="quemsomos2">
              <h3 className="sectiontitle">Nossa Equipe</h3>
              <p>Mussum ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Atirei o pau no gatis, per gatis num morreus. Delegadis gente finis, bibendum egestas augue arcu ut est. In elementis mé pra quem é amistosis quis leo.</p>
              <p>Si num tem leite então bota uma pinga aí cumpadi! Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
            </section>

            <div className="parallax-section parallax-3">
              <div className="parallax-caption">Bosque</div>
            </div>

            <section className="textformat2" id="link do github">
              <h3 className="sectiontitle">Link do Github</h3>
              <p>Mussum ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Atirei o pau no gatis, per gatis num morreus. Delegadis gente finis, bibendum egestas augue arcu ut est. In elementis mé pra quem é amistosis quis leo.</p>
              <p>Si num tem leite então bota uma pinga aí cumpadi! Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
            </section>
          </>
        )}
      </main>

      <FooterComponent />

      <div className="js-status">JavaScript: Funcionando</div>
    </div>
  );
}

export default App;