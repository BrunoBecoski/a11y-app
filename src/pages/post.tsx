import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "../styles/post.module.css";

export function Post() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  function handleNavigateTo(id: string) {
    const element = sectionsRef.current.get(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  useEffect(() => {
    window.location.hash = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sectionsMap = Array.from(sectionsRef.current.values());

    const options = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionsMap.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.tags}>
            <a href="/acessibilidade">Acessibilidade</a>
            <a href="/acessibilidade-na-web">Acessibilidade na Web</a>
            <a href="/como-tornar-sites-acessiveis">
              Como tornar sites acessíveis
            </a>
            <a href="/boas-praticas-de-acessibilidade">
              Boas práticas de acessibilidade
            </a>
            <a href="/desenvolvimento-web-acessivel">
              Desenvolvimento web acessível
            </a>
          </div>

          <h1>Crie experiências inclusivas: guia de acessibilidade na web</h1>

          <div className={styles.info}>
            <svg
              height="25"
              width="34"
              viewBox="0 0 34 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Blog da Rocketseat</title>
              <path
                d="M17.7212 19.0955C11.2549 24.6195 6.66309 25.0092 4.31153 22.6556C2.14483 20.4889 3.9418 15.0543 8.32091 9.68721L0 1.36829H5.31736L13.5826 9.63355C8.36663 14.8813 5.32531 20.469 6.89766 22.0414C8.19966 23.3454 12.2071 21.5385 16.5305 17.9048L17.7212 19.0955Z"
                fill="currentColor"
              ></path>
              <path
                d="M32.8901 23.6315H27.5727L19.3075 15.3663C24.5234 10.1205 27.5648 4.53079 25.9944 2.96043C24.6924 1.65644 20.681 3.46533 16.3576 7.09903L15.1669 5.90834C21.6352 0.382265 26.229 -0.00934154 28.5805 2.34421C30.7472 4.51091 28.9522 9.94555 24.5711 15.3126L32.892 23.6315H32.8901Z"
                fill="currentColor"
              ></path>
            </svg>
            <strong>Rocketseat</strong>
            <div />
            <span>5 min de leitura</span>
          </div>
        </div>

        <Image
          className={styles.image}
          src="/html-css.avif"
          alt="html-css"
          width={1120}
          height={502}
        />
      </div>

      <article className={styles.article}>
        <nav className={styles.nav}>
          <h2>Navegação Rápida</h2>

          <ul className={styles.list}>
            <li>
              <button
                data-hover={activeSection === "por-que-a-acessibilidade"}
                type="button"
                onClick={() => handleNavigateTo("por-que-a-acessibilidade")}
              >
                <span className={styles.number}>1</span>
                <span className={styles.label}>
                  Por que a acessibilidade na web é importante?
                </span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "quem-se-beneficia"}
                type="button"
                onClick={() => handleNavigateTo("quem-se-beneficia")}
              >
                <span className={styles.number}>2</span>
                <span className={styles.label}>
                  Quem se beneficia da acessibilidade?
                </span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "acessibilidade-na-pratica"}
                type="button"
                onClick={() => handleNavigateTo("acessibilidade-na-pratica")}
              >
                <span className={styles.number}>3</span>
                <span className={styles.label}>
                  Acessibilidade na prática: impacto real no ecossistema de
                  programação
                </span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "1-perceptivel"}
                type="button"
                onClick={() => handleNavigateTo("1-perceptivel")}
              >
                <span className={styles.number}>4</span>
                <span className={styles.label}>1. Perceptível</span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "2-operavel"}
                type="button"
                onClick={() => handleNavigateTo("2-operavel")}
              >
                <span className={styles.number}>5</span>
                <span className={styles.label}>2. Operável</span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "3-compreensivel"}
                type="button"
                onClick={() => handleNavigateTo("3-compreensivel")}
              >
                <span className={styles.number}>6</span>
                <span className={styles.label}>3. Compreensível</span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "4-robusto"}
                type="button"
                onClick={() => handleNavigateTo("4-robusto")}
              >
                <span className={styles.number}>7</span>
                <span className={styles.label}>4. Robusto</span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "ferramentas-uteis"}
                type="button"
                onClick={() => handleNavigateTo("ferramentas-uteis")}
              >
                <span className={styles.number}>8</span>
                <span className={styles.label}>Ferramentas úteis</span>
              </button>
            </li>

            <li>
              <button
                data-hover={activeSection === "conclusao"}
                type="button"
                onClick={() => handleNavigateTo("conclusao")}
              >
                <span className={styles.number}>9</span>
                <span className={styles.label}>Conclusão</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className={styles.content}>
          <div>
            <p>
              Em um mundo onde a web é essencial para tantas atividades do dia a
              dia, garantir que ela seja acessível a todos não é apenas uma boa
              prática – é uma responsabilidade. A acessibilidade na web é sobre
              criar experiências que incluam todas as pessoas, independentemente
              de limitações físicas, sensoriais ou cognitivas. Para
              desenvolvedores front-end, adotar práticas acessíveis desde o
              início é uma forma de construir um ambiente digital mais justo e
              eficiente.
            </p>
          </div>

          <div
            id="por-que-a-acessibilidade"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("por-que-a-acessibilidade", node);
              } else {
                sectionsRef.current.delete("por-que-a-acessibilidade");
              }
            }}
          >
            <h2>Por que a acessibilidade na web é importante?</h2>

            <p>
              Imagine um cenário onde uma pessoa com deficiência visual não
              consegue acessar informações em um site, ou alguém com limitações
              motoras tem dificuldade em navegar em um formulário. Essas
              barreiras excluem milhões de pessoas da experiência digital. A
              acessibilidade web é a ponte para superar essas dificuldades,
              promovendo inclusão digital. Além disso, criar interfaces
              acessíveis beneficia não só pessoas com deficiência, mas também
              melhora a experiência geral de todos os usuários. Por exemplo,
              legendas em vídeos são úteis para pessoas que assistem conteúdos
              em ambientes barulhentos ou que preferem não ativar o som.
            </p>
          </div>

          <div
            id="quem-se-beneficia"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("quem-se-beneficia", node);
              } else {
                sectionsRef.current.delete("quem-se-beneficia");
              }
            }}
          >
            <h2>Quem se beneficia da acessibilidade?</h2>
            <ul>
              <li>
                <b>Deficiência visual</b>: usuários com cegueira, baixa visão ou
                daltonismo.
              </li>

              <li>
                <b>Deficiência auditiva</b>: pessoas com dificuldades auditivas
                ou surdez.
              </li>

              <li>
                <b>Deficiência motora</b>: aqueles que utilizam tecnologias
                assistivas para navegação, como switches ou teclados adaptados.
              </li>

              <li>
                <b>Deficiência cognitiva</b>: usuários com dislexia, déficit de
                atenção ou dificuldades de compreensão.
              </li>
            </ul>

            <blockquote>
              Quando criamos para todos, atingimos um público muito mais amplo,
              melhoramos o SEO e até mesmo nos alinhamos a leis de
              acessibilidade.
            </blockquote>
          </div>

          <div
            id="acessibilidade-na-pratica"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("acessibilidade-na-pratica", node);
              } else {
                sectionsRef.current.delete("acessibilidade-na-pratica");
              }
            }}
          >
            <h2>
              Acessibilidade na prática: impacto real no ecossistema de
              programação
            </h2>

            <p>
              A acessibilidade vai muito além de boas práticas de código; ela
              transforma vidas e torna o ambiente digital mais inclusivo. Para
              ilustrar isso, recomendamos que você assista ao vídeo{" "}
              <b>"Acessibilidade no ecossistema de programação"</b>, onde
              Alexandre Costa e Camila Marinho compartilham experiências,
              desafios e dicas sobre a construção de aplicações acessíveis.
            </p>

            <blockquote>
              No vídeo, você aprenderá:
              <ul>
                <li>
                  O impacto da acessibilidade na vida de pessoas com
                  deficiência.
                </li>

                <li>
                  Como ferramentas e boas práticas ajudam no desenvolvimento de
                  aplicações acessíveis.
                </li>

                <li>
                  A importância de pensar na acessibilidade desde o início de
                  qualquer projeto.
                </li>
              </ul>
            </blockquote>

            <iframe
              src="https://www.youtube.com/embed/B_jepC7Eufo"
              title="Acessibilidade no ecossistema de programação | Faladev #44"
              allowFullScreen
            ></iframe>

            <p>
              Não deixe de conferir e colocar em prática as dicas apresentadas
              por profissionais que vivenciam essas questões diariamente. Para
              saber mais, continue explorando nosso conteúdo e veja como você
              pode contribuir para um ecossistema mais inclusivo!
            </p>
          </div>

          <h2>Princípios básicos de acessibilidade (WCAG)</h2>

          <p>
            A <b> Web Content Accessibility Guidelines (WCAG)</b> é a base para
            construir experiências acessíveis. Vamos detalhar os quatro
            princípios fundamentais, com seções menores para facilitar a
            leitura.
          </p>

          <div
            id="1-perceptivel"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("1-perceptivel", node);
              } else {
                sectionsRef.current.delete("1-perceptivel");
              }
            }}
          >
            <h3>1. Perceptível</h3>
            <ul>
              <li>
                O conteúdo deve ser apresentado de forma clara, permitindo que
                todos os usuários consigam percebê-lo.
              </li>
            </ul>

            <h4>1.1. Texto alternativo</h4>
            <ul>
              <li>
                Forneça descrições claras para imagens que contenham informações
                importantes:
              </li>
            </ul>
            <pre>
              <code>
                {`
<img src="formacao.png" alt="Ilustração mostrando o fluxo de aprendizado na Rocketseat">
                `}
              </code>
            </pre>
            <ul>
              <li>
                Para imagens decorativas, use
                <span>
                  <code>alt=""</code>
                </span>
                para que leitores de tela as ignorem.
              </li>
            </ul>

            <h4>1.2. Audiodescrição</h4>

            <ul>
              <li>
                Inclua narrações que descrevam o contexto visual de vídeos.
              </li>

              <li>Use ferramentas para criar audiodescrições.</li>
            </ul>

            <h4>1.3. Cores e contraste</h4>
            <p>
              Adote cores que atendam aos critérios de contraste (mínimo de
              4.5:1). Ferramentas como o{" "}
              <a
                href="https://webaim.org/resources/contrastchecker/"
                target="_blank"
              >
                Contrast Checker
              </a>{" "}
              ajudam a validar
            </p>
            <pre>
              <code>
                {`
body {
  color: #222;
  background-color: #f9f9f9;
}
                `}
              </code>
            </pre>

            <h4>1.4. Design responsivo e zoom</h4>
            <ol>
              <li>
                1.
                <b> Layout fluido:</b>
              </li>

              <li>
                <ul>
                  <li>
                    Evitar uso de larguras fixas em pixels para o layout
                    principal. Prefira unidades relativas (%,
                    <span>
                      <code>rem</code>
                    </span>
                    ,
                    <span>
                      <code>em</code>
                    </span>
                    ) para que o conteúdo se adapte ao zoom.
                  </li>

                  <li>
                    Para entender na prática a importância de unidades relativas
                    (
                    <span>
                      <code>rem</code>
                    </span>
                    ) e espaçamentos fluídos em um footer, confira o vídeo
                    abaixo:
                  </li>

                  <li>
                    <iframe
                      src="https://www.youtube.com/embed/dAdXLOAg4TM"
                      title="Responsividade e acessibilidade com Tailwind"
                      allowFullScreen
                    ></iframe>
                  </li>
                </ul>
              </li>

              <li>
                2.
                <b> Teste de zoom (200% ou mais):</b>
              </li>

              <li>
                <ul>
                  <li>
                    Certificar-se de que, ao aplicar zoom, o layout não exige
                    rolagem horizontal contínua e que os elementos não fiquem
                    sobrepostos.
                  </li>
                </ul>
              </li>

              <li>
                3. <b> Manter boa legibilidade:</b>
              </li>

              <li>
                <ul>
                  <li>
                    Fontes devem ter tamanho mínimo recomendado (ex.: 16px
                    padrão) e permitir fácil escala com zoom.
                  </li>

                  <li>
                    Contraste e espaçamento devem ser pensados para que o
                    conteúdo continue legível mesmo em telas pequenas ou com
                    zoom aumentado.
                  </li>
                </ul>
              </li>
            </ol>

            <h4>Exemplo rápido de CSS</h4>
            <pre>
              <code>
                {`
.container {
  max-width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}
                `}
              </code>
            </pre>

            <ul>
              <li>
                Assim, quando aplicado zoom, o conteúdo se ajusta sem criar
                barras de rolagem indesejadas.
              </li>
            </ul>

            <h4>1.5. Estrutura da página</h4>
            <p>
              Organizar o conteúdo com cabeçalhos hierárquicos é uma prática
              essencial para melhorar a experiência de navegação e garantir que
              leitores de tela interpretem corretamente a estrutura da página.
              Use tags semânticas como{" "}
              <span>
                <code>{`<main>`}</code>
              </span>
              ,{" "}
              <span>
                <code>{`<section>`}</code>
              </span>
              ,{" "}
              <span>
                <code>{`<header>`}</code>
              </span>{" "}
              e{" "}
              <span>
                <code>{`<footer>`}</code>
              </span>{" "}
              para dar significado aos elementos do seu site.
            </p>
            <p>Exemplo prático de organização hierárquica:</p>

            <pre>
              <code>
                {`
<main>
  <h1>Cursos Rocketseat</h1>
  <section>
    <h2>Trilhas disponíveis</h2>
    <ul>
      <li>Ignite</li>
      <li>Explorer</li>
    </ul>
  </section>
</main>
                `}
              </code>
            </pre>

            <span>
              📄 Para aprofundar seus conhecimentos sobre <b>HTML Semântico</b>{" "}
              e como ele contribui para uma web mais acessível, recomendamos o
              artigo{" "}
              <a href="https://www.rocketseat.com.br/blog/artigos/post/html-semantico-web-acessivel">
                HTML semântico: como criar uma web acessível
              </a>{" "}
              no blog da Rocketseat.
            </span>
          </div>

          <div
            id="2-operavel"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("2-operavel", node);
              } else {
                sectionsRef.current.delete("2-operavel");
              }
            }}
          >
            <h3>2. Operável</h3>
            <p>O site deve ser funcional para diferentes meios de navegação.</p>

            <h4>2.1. Foco visível</h4>
            <ul>
              <li>Destaque o elemento em foco com estilos visuais:</li>
            </ul>
            <pre>
              <code>
                {`
button:focus {
  outline: 3px solid #8257e5;
}
                `}
              </code>
            </pre>
            <h4>2.2. Atalhos de teclado</h4>
            <ul>
              <li>
                Adicione atalhos para facilitar o acesso a funcionalidades:
              </li>
            </ul>
            <pre>
              <code>
                {`
<button accesskey="h">Home</button>
                `}
              </code>
            </pre>

            <h4>2.3. Ordem de tabulação</h4>
            <ul>
              <li>Certifique-se de que a navegação seja lógica:</li>
            </ul>
            <pre>
              <code>
                {`
<a href="#inicio">Ir para o início</a>
                `}
              </code>
            </pre>

            <h4>2.4. Tempo limite</h4>
            <ul>
              <li>
                Permita que usuários ajustem ou estendam o tempo para completar
                ações importantes.
              </li>

              <li>
                Se o site tiver formulários longos ou etapas de compra, garanta
                que seja possível retomar a sessão ou revalidar dados sem perder
                todo o progresso.
              </li>
            </ul>

            <blockquote>
              Assim como o tempo limite, outras medidas de usabilidade, como
              oferecer um “Link de pular para o conteúdo”, são fundamentais para
              garantir a navegabilidade por teclado ou leitor de tela. Ambas as
              técnicas fazem parte do princípio de “Operável” na WCAG.
            </blockquote>

            <h4>2.5. Link de pular para o conteúdo (Skip to Main Content)</h4>
            <ul>
              <li>
                Essa âncora deve ter uma classe (por exemplo,
                <span>
                  <code>.skip-link</code>
                </span>
                ) que possibilita aplicar estilo para que fique visível apenas
                ao receber foco (para não atrapalhar o layout).
              </li>

              <li>
                Identifique o conteúdo principal:
                <pre>
                  <code>
                    {`
<main id="conteudo-principal">
  <!-- Conteúdo principal do site -->
</main>
                    `}
                  </code>
                </pre>
              </li>

              <li>
                <ul>
                  <li>
                    Garanta que o
                    <span>
                      <code>id</code>
                    </span>
                    no{" "}
                    <span>
                      <code>main</code>
                    </span>{" "}
                    seja o mesmo especificado no{" "}
                    <span>
                      <code>href</code>
                    </span>
                    do link de pulo.
                  </li>
                </ul>
              </li>

              <li>
                <b>Estilize corretamente</b> (opcional, mas recomendado):
              </li>

              <li>
                <pre>
                  <code>
                    {`
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip-link:focus {
  position: static;
  width: auto;
  height: auto;
  background: #f1f1f1;
  padding: 8px;
  font-size: 1rem;
  color: #000;
  z-index: 1000;
}
                  `}
                  </code>
                </pre>
              </li>

              <li>
                <ul>
                  <li>
                    Isso fará com que o link apareça somente quando focado,
                    mantendo o design limpo, mas oferecendo acessibilidade para
                    usuários que navegam via teclado ou leitor de tela.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div
            id="3-compreensivel"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("3-compreensivel", node);
              } else {
                sectionsRef.current.delete("3-compreensivel");
              }
            }}
          >
            <h3>3. Compreensível</h3>
            <p>
              O conteúdo e a navegação devem ser previsíveis e de fácil
              entendimento.
            </p>
            <h4>3.1. Linguagem clara</h4>
            <ul>
              <li>Explique termos técnicos e use linguagem simples:</li>
            </ul>

            <pre>
              <code>
                {`
<p>Digite seu e-mail no campo abaixo para receber atualizações.</p>
                `}
              </code>
            </pre>

            <h4>3.2. Navegação consistente</h4>

            <ul>
              <li>
                Utilize menus e estrutura de navegação uniformes em todo o site.
              </li>
            </ul>

            <h4>3.3. Prevenção de erros</h4>
            <ul>
              <li>
                Inclua validação de formulários e mensagens de erro amigáveis:
              </li>
            </ul>
            <pre>
              <code>
                {`
<label for="senha">Senha:</label>
<input type="password" id="senha" required>
<span role="alert">A senha deve conter ao menos 8 caracteres.</span>
                `}
              </code>
            </pre>
          </div>

          <div
            id="4-robusto"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("4-robusto", node);
              } else {
                sectionsRef.current.delete("4-robusto");
              }
            }}
          >
            <h3>4. Robusto</h3>
            <p>
              O site deve ser compatível com diversas tecnologias e navegadores.
            </p>

            <h4>4.1. Compatibilidade com tecnologias assistivas</h4>
            <p>
              Para garantir que o conteúdo seja acessível a leitores de tela e
              outras tecnologias, podemos usar atributos ARIA para fornecer
              informações semânticas adicionais.
            </p>

            <h4>4.1.1 Exemplos práticos de ARIA</h4>

            <ul>
              <li>
                <b>Barra de navegação:</b>
              </li>
              <li>
                <b>Botões e ícones (aria-label):</b>
              </li>
              <li>
                <b>Alertas (role="alert"):</b>
              </li>
            </ul>

            <p>
              Esses exemplos práticos ajudam a tornar a navegação mais clara e
              robusta para quem usa leitores de tela ou outras ferramentas de
              acessibilidade.
            </p>

            <h4>4.2. Testes em diferentes navegadores</h4>
            <ul>
              <li>
                Garanta a funcionalidade em navegadores como Chrome, Firefox e
                Edge.
              </li>
            </ul>

            <h4>4.3. Validação de código</h4>
            <ul>
              <li>
                Use ferramentas como o{" "}
                <a href="https://validator.w3.org/" target="_blank">
                  W3C Validator.
                </a>
              </li>
            </ul>
          </div>

          <div
            id="ferramentas-uteis"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("ferramentas-uteis", node);
              } else {
                sectionsRef.current.delete("ferramentas-uteis");
              }
            }}
          >
            <h3>Ferramentas úteis</h3>

            <ul>
              <li>
                <b>
                  <a
                    href="https://developer.chrome.com/docs/lighthouse/overview?hl=pt-br"
                    target="_blank"
                  >
                    Google Lighthouse
                  </a>
                </b>
                : auditorias automáticas de acessibilidade.
              </li>
              <li>
                <b>
                  <a href="https://wave.webaim.org/" target="_blank">
                    WAVE
                  </a>
                </b>
                : identificação de barreiras.
              </li>
              <li>
                <b>
                  <a href="https://www.nvaccess.org/download/" target="_blank">
                    NVDA
                  </a>
                </b>
                : identificação de barreiras.
              </li>
            </ul>

            <p>
              Além de usar essas ferramentas para identificar barreiras de
              acessibilidade, realize testes de usabilidade com pessoas que
              utilizam leitores de tela ou que navegam exclusivamente via
              teclado. Esses testes práticos ajudam a garantir que a experiência
              real do usuário seja satisfatória e sem obstáculos.
            </p>

            <ul>
              <li>
                Realizar <b>testes exploratórios</b>: convidar usuários com
                deficiência visual ou motora para navegar pelo site e fornecer
                feedback sobre dificuldades encontradas.
              </li>
              <li>
                <b>Documentar</b> as descobertas: criar relatórios que apontem
                barreiras e oportunidades de melhoria, garantindo um ciclo de
                desenvolvimento inclusivo.
              </li>
            </ul>
          </div>

          <div
            id="conclusao"
            ref={(node) => {
              if (node) {
                sectionsRef.current.set("conclusao", node);
              } else {
                sectionsRef.current.delete("conclusao");
              }
            }}
          >
            <h3>Conclusão</h3>

            <p>
              Promover acessibilidade na web é um passo essencial para criar
              experiências inclusivas e igualitárias. Ao aplicar essas práticas,
              você não apenas melhora seu trabalho como desenvolvedor, mas
              também ajuda a tornar a internet um lugar melhor para todos.
            </p>

            <span>💜</span>
          </div>
        </div>
      </article>
    </section>
  );
}
