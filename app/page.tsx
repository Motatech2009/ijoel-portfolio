import Image from "next/image";

const resources = [
  {
    number: "01",
    icon: "▦",
    title: "Produtos organizados",
    text: "Fotos, opções e detalhes apresentados de forma simples para o cliente escolher sem confusão.",
  },
  {
    number: "02",
    icon: "R$",
    title: "Preços sempre claros",
    text: "Valores fáceis de consultar e atualizar, sem depender de responder a mesma pergunta toda hora.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Entrega bem explicada",
    text: "Retirada, entrega, região atendida e outras condições reunidas no mesmo lugar.",
  },
  {
    number: "04",
    icon: "✦",
    title: "Orçamento no WhatsApp",
    text: "O cliente escolhe, toca no botão e chega ao seu WhatsApp muito mais preparado para comprar.",
  },
];

const whatsappUrl =
  "https://wa.me/5543988281227?text=Ol%C3%A1%2C%20Ijoel%21%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto%20digital.";
const instagramUrl = "https://www.instagram.com/ijoel_mota/";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ijoel - início">
          <span className="brand-dot" />
          <strong>IJOEL</strong>
          <small>DEV</small>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#solucao">Solução</a>
          <a href="#demonstracoes">Demonstrações</a>
          <a href="#projetos">Projetos</a>
          <a href="#processo">Como funciona</a>
          <a href="#sobre">Sobre mim</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Vamos conversar <span>↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Catálogos digitais • Londrina e região</p>
          <h1>
            Transforme seguidores em clientes <em>prontos para comprar.</em>
          </h1>
          <p className="hero-text">
            Catálogos digitais sob medida para organizar produtos, preços,
            entrega e orçamento em um único link inteligente para a bio do seu
            Instagram.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Criar meu catálogo <span>↗</span>
            </a>
            <a className="button secondary" href="#solucao">Ver como funciona</a>
          </div>
          <div className="trust-row" aria-label="Diferenciais do serviço">
            <div><strong>01</strong><span>Feito sob medida</span></div>
            <div><strong>02</strong><span>Sem mensalidade abusiva</span></div>
            <div><strong>03</strong><span>WhatsApp integrado</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Exemplo de catálogo digital em um celular">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="phone-shell">
            <div className="phone-bar"><span>9:41</span><i /><span>●●●</span></div>
            <div className="catalog-head">
              <div className="mini-logo">S</div>
              <div><small>CATÁLOGO DIGITAL</small><strong>Sua Marca</strong></div>
              <button aria-label="Abrir menu">•••</button>
            </div>
            <div className="catalog-banner">
              <small>NOVIDADES</small>
              <strong>Escolha. Envie. Venda.</strong>
              <span>Ofertas organizadas em um só lugar.</span>
            </div>
            <div className="catalog-tabs"><span className="active">Destaques</span><span>Produtos</span><span>Entrega</span></div>
            <div className="product-grid">
              <div className="product"><i className="product-art art-one" /><strong>Produto destaque</strong><span>R$ 49,90</span></div>
              <div className="product"><i className="product-art art-two" /><strong>Nova coleção</strong><span>R$ 69,90</span></div>
            </div>
            <div className="whatsapp-bar"><span>✓</span><strong>Pedir pelo WhatsApp</strong><small>→</small></div>
          </div>
          <div className="float-card float-top"><span>↗</span><div><small>CLIENTE PRONTO</small><strong>Contato direto</strong></div></div>
          <div className="float-card float-bottom"><span>✓</span><div><small>CATÁLOGO</small><strong>Sempre organizado</strong></div></div>
        </div>
      </section>

      <section className="solution" id="solucao">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Menos dúvidas, mais oportunidades</p>
            <h2>Seu negócio explicado em poucos toques.</h2>
          </div>
          <p>
            O cliente sai do Instagram e encontra as informações necessárias
            para avançar no orçamento sem depender de uma longa troca de mensagens.
          </p>
        </div>

        <div className="resource-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.number}>
              <div className="resource-top"><span>{resource.number}</span><i>{resource.icon}</i></div>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="problem-strip" aria-label="Resumo da proposta">
        <p>O Instagram chama atenção.</p>
        <span>→</span>
        <p>O catálogo organiza a decisão.</p>
        <span>→</span>
        <p>O WhatsApp recebe o cliente pronto.</p>
      </section>

      <section className="demos" id="demonstracoes">
        <div className="demos-heading">
          <div>
            <p className="eyebrow"><span /> Demonstrações para negócios reais</p>
            <h2>Uma ideia ganha força quando você consegue testar.</h2>
          </div>
          <p>
            Cada demonstração é criada para mostrar, de forma prática, como um
            negócio pode organizar produtos e facilitar os pedidos pelo celular.
          </p>
        </div>

        <article className="demo-card">
          <div className="demo-device" aria-hidden="true">
            <div className="demo-device-bar"><span>9:41</span><i /></div>
            <div className="demo-brand"><span>K</span><div><small>CATÁLOGO DIGITAL</small><strong>Kichi Perfumaria</strong></div></div>
            <div className="demo-hero"><small>PERFUMES E PRESENTES</small><strong>Encontre seu próximo mimo.</strong><span>Produtos organizados em um só link.</span></div>
            <div className="demo-pills"><span>Presentes</span><span>Perfumes</span><span>Promoções</span></div>
            <div className="demo-products"><i /><i /><i /></div>
            <div className="demo-wa">Pedir pelo WhatsApp <b>↗</b></div>
          </div>
          <div className="demo-copy">
            <div className="case-meta"><span>DEMONSTRAÇÃO 01</span><strong>CATÁLOGO INTERATIVO</strong></div>
            <p className="case-kicker">Kichi Perfumaria</p>
            <h3>Produtos, promoções e pedidos em um só lugar.</h3>
            <p>
              Prévia de um catálogo pensado para transformar o link da bio em
              um caminho simples: a cliente encontra o produto, confere a
              oferta e chama a loja pelo WhatsApp.
            </p>
            <a className="demo-link" href="https://kichic-perfumarias.vercel.app/" target="_blank" rel="noreferrer">
              Abrir demonstração <span>↗</span>
            </a>
            <small className="demo-note">Projeto demonstrativo criado para apresentação. A versão final é ajustada junto ao negócio.</small>
          </div>
        </article>
      </section>

      <section className="projects" id="projetos">
        <div className="projects-heading">
          <div>
            <p className="eyebrow"><span /> Projetos reais entregues</p>
            <h2>Software que saiu da ideia e entrou na rotina.</h2>
          </div>
          <p>
            Além de sites e catálogos, desenvolvo sistemas sob medida para
            resolver processos reais em serviços públicos e instituições da
            região de Primeiro de Maio/PR.
          </p>
        </div>

        <article className="case-study">
          <div className="case-media case-media-single case-media-login">
            <a href="/projetos/sim-saude-painel.png" target="_blank" rel="noreferrer" aria-label="Ampliar painel do SIM Saúde">
              <Image
                src="/projetos/sim-saude-painel.png"
                alt="Painel principal do sistema SIM Saúde"
                width={1355}
                height={636}
              />
            </a>
            <span className="screen-caption">Painel principal • tela sem dados de pacientes</span>
          </div>
          <div className="case-copy">
            <div className="case-meta"><span>01</span><strong>Em uso • Primeiro de Maio/PR</strong></div>
            <p className="case-kicker">Sistema Integrado Municipal de Saúde</p>
            <h3>SIM Saúde</h3>
            <p>
              Plataforma criada para centralizar rotinas da saúde municipal,
              organizar informações e reduzir a dependência de controles
              espalhados e tarefas manuais repetitivas.
            </p>
            <ul className="project-features">
              <li>Fila e acompanhamento de exames</li>
              <li>Lançamentos e cadastro de pacientes</li>
              <li>Relatórios, malotes e movimentações</li>
              <li>Perfis de acesso, logs e administração</li>
            </ul>
            <div className="project-impact"><span>IMPACTO</span><strong>Mais organização, rastreabilidade e agilidade para a equipe.</strong></div>
          </div>
        </article>

        <article className="case-study case-study-reverse">
          <div className="case-media case-gallery">
            <a className="gallery-main" href="/projetos/tsd-painel-diario.png" target="_blank" rel="noreferrer" aria-label="Ampliar painel diário do TSD">
              <Image
                src="/projetos/tsd-painel-diario.png"
                alt="Painel diário do Transporte Saúde Digital"
                width={921}
                height={629}
              />
            </a>
            <a href="/projetos/tsd-menu.png" target="_blank" rel="noreferrer" aria-label="Ampliar menu do TSD">
              <Image src="/projetos/tsd-menu.png" alt="Menu principal do Transporte Saúde Digital" width={1365} height={632} />
            </a>
            <a href="/projetos/tsd-login.png" target="_blank" rel="noreferrer" aria-label="Ampliar login do TSD">
              <Image src="/projetos/tsd-login.png" alt="Tela de login do Transporte Saúde Digital" width={1365} height={634} />
            </a>
            <span className="screen-caption">Painel diário, módulos e acesso do sistema</span>
          </div>
          <div className="case-copy">
            <div className="case-meta"><span>02</span><strong>Em uso • Primeiro de Maio/PR</strong></div>
            <p className="case-kicker">Transporte de Saúde Digital</p>
            <h3>TSD</h3>
            <p>
              Sistema desenvolvido para organizar o transporte municipal da
              saúde em uma única operação, reunindo viagens, veículos,
              passageiros, vagas e horários.
            </p>
            <ul className="project-features">
              <li>Planejamento diário de ônibus e carros</li>
              <li>Organização de pacientes e acompanhantes</li>
              <li>Controle de capacidade e vagas</li>
              <li>Hemodiálise, relatórios e histórico de viagens</li>
            </ul>
            <div className="project-impact"><span>IMPACTO</span><strong>Uma visão clara da operação para reduzir conflitos e retrabalho.</strong></div>
          </div>
        </article>

        <article className="case-study">
          <div className="case-media case-media-single">
            <div className="case-screen">
              <Image
                src="/projetos/formacao-docentes-login.png"
                alt="Tela de acesso do Sistema Digital de Fichas de Estágio"
                width={1439}
                height={893}
              />
            </div>
            <span className="screen-caption">Tela de acesso • imagem sem dados pessoais</span>
          </div>
          <div className="case-copy">
            <div className="case-meta"><span>03</span><strong>Publicado • Formação de Docentes</strong></div>
            <p className="case-kicker">Sistema Digital de Fichas de Estágio</p>
            <h3>Formação de Docentes</h3>
            <p>
              Plataforma criada para digitalizar as fichas de Prática de
              Formação do Curso de Formação de Docentes do Colégio Estadual
              Marechal Castelo Branco, substituindo registros físicos por um
              fluxo seguro de acompanhamento e validação.
            </p>
            <ul className="project-features">
              <li>Acesso separado para aluno, professor e coordenação</li>
              <li>Cadastro de turmas, alunos e períodos trimestrais</li>
              <li>Registro, revisão e correção de atividades</li>
              <li>Cálculo de horas, histórico, auditoria e ficha A4</li>
            </ul>
            <div className="project-impact"><span>IMPACTO</span><strong>Menos papel e mais controle sobre atividades, horas e validações pedagógicas.</strong></div>
          </div>
        </article>

        <div className="privacy-note">
          <span>▣</span>
          <p><strong>Privacidade preservada.</strong> Dados pessoais, informações de pacientes ou alunos e telas sensíveis não são divulgados neste portfólio.</p>
        </div>
      </section>

      <section className="process" id="processo">
        <div className="process-intro">
          <p className="eyebrow"><span /> Simples do início ao fim</p>
          <h2>Uma solução ágil, sem complicar sua rotina.</h2>
          <p>
            Eu cuido da estrutura e da experiência. Você participa com o que
            conhece melhor: seus produtos, seu atendimento e seu cliente.
          </p>
        </div>

        <div className="process-list">
          <article>
            <span>01</span>
            <div><h3>Entendo o seu negócio</h3><p>Organizamos público, produtos, preços, entrega e o objetivo principal do catálogo.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>Crio a experiência</h3><p>Design sob medida, rápido no celular e alinhado à identidade visual da sua empresa.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><h3>Você começa a divulgar</h3><p>O link fica pronto para a bio, stories, anúncios, QR Code e atendimento no WhatsApp.</p></div>
          </article>
        </div>
      </section>

      <section className="segments" aria-labelledby="segments-title">
        <div className="segments-copy">
          <p className="eyebrow dark"><span /> Feito para negócios reais</p>
          <h2 id="segments-title">Um formato. Várias possibilidades.</h2>
        </div>
        <div className="segment-grid">
          <article className="segment-card">
            <Image src="/segmentos/restaurante.webp" alt="Restaurante contemporâneo com prato apresentado profissionalmente" width={1200} height={800} />
            <div><span>01</span><strong>Restaurantes</strong><small>Cardápios, combos e pedidos</small></div>
          </article>
          <article className="segment-card">
            <Image src="/segmentos/pousada.webp" alt="Quarto acolhedor de uma pousada" width={1200} height={800} />
            <div><span>02</span><strong>Pousadas</strong><small>Quartos, estrutura e reservas</small></div>
          </article>
          <article className="segment-card">
            <Image src="/segmentos/barbearia.webp" alt="Ambiente profissional de uma barbearia" width={1200} height={800} />
            <div><span>03</span><strong>Barbearias</strong><small>Serviços, valores e agenda</small></div>
          </article>
          <article className="segment-card">
            <Image src="/segmentos/industria.webp" alt="Ambiente industrial moderno com máquinas" width={1200} height={800} />
            <div><span>04</span><strong>Indústrias</strong><small>Produtos, aplicações e orçamento</small></div>
          </article>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="age-card" aria-label="17 anos, desenvolvedor de software">
          <span>17</span>
          <p>anos</p>
          <small>DESENVOLVENDO O PRÓXIMO PASSO</small>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Quem está por trás</p>
          <h2>Prazer, eu sou o Ijoel.</h2>
          <p className="about-lead">
            Sou desenvolvedor de software na região de Londrina/PR e encontrei
            na tecnologia uma forma de ajudar negócios locais a vender e se
            comunicar melhor.
          </p>
          <p>
            Aos 17 anos, uno olhar jovem, proximidade e execução ágil para criar
            soluções que fazem sentido para cada empresa — sem burocracia e sem
            empurrar mensalidades abusivas de sistemas engessados.
          </p>
          <p>
            Hoje, sistemas que desenvolvi apoiam processos de exames,
            transporte de saúde e formação docente na região de Primeiro de
            Maio/PR.
          </p>
          <div className="about-tags"><span>Desenvolvimento</span><span>UI/UX</span><span>Comércio local</span></div>
          <blockquote className="signature-quote">
            “A melhor escolha é a que você escolhe.”
            <span>— Ijoel</span>
          </blockquote>
        </div>
      </section>

      <section className="contact" id="contato">
        <div>
          <p className="eyebrow"><span /> Vamos tirar a ideia do papel</p>
          <h2>Seu próximo cliente pode estar a um toque de distância.</h2>
          <p>
            Me conte como sua empresa vende hoje. Eu mostro como transformar
            isso em uma experiência mais organizada, profissional e fácil de compartilhar.
          </p>
        </div>
        <a
          className="contact-button"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar com Ijoel pelo WhatsApp"
        >
          <span>WHATSAPP</span>
          <strong>Criar meu catálogo</strong>
          <i>↗</i>
        </a>
        <small className="contact-note">WhatsApp (43) 98828-1227 • Instagram @ijoel_mota</small>
      </section>

      <footer>
        <a className="brand" href="#inicio" aria-label="Ijoel - início">
          <span className="brand-dot" /><strong>IJOEL</strong><small>DEV</small>
        </a>
        <p>Catálogos digitais e soluções sob medida • Londrina e região</p>
        <div className="footer-links">
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com Ijoel pelo WhatsApp"
      >
        <span>✓</span><strong>WhatsApp</strong>
      </a>
    </main>
  );
}
