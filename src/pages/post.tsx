import styles from "../styles/post.module.css";

export function Post() {
  return (
    <section className={styles.section}>
      <nav className={styles.nav}>
        <h2>Navegação Rápida</h2>

        <ul className={styles.list}>
          <li>
            <a href="#por-que-a-acessibilidade">
              <span className={styles.number}>1</span>
              <p className={styles.label}>
                Por que a acessibilidade na web é importante?
              </p>
            </a>
          </li>
          <li>
            <a href="#quem-se-beneficia">
              <span className={styles.number}>2</span>
              <span className={styles.label}>
                Quem se beneficia da acessibilidade?
              </span>
            </a>
          </li>
          <li>
            <a href="#acessibilidade-na-pratica">
              <span className={styles.number}>3</span>
              <span className={styles.label}>
                Acessibilidade na prática: impacto real no ecossistema de
                programação
              </span>
            </a>
          </li>
          <li>
            <a href="#1-perceptivel">
              <span className={styles.number}>4</span>
              <span className={styles.label}>1. Perceptível</span>
            </a>
          </li>
          <li>
            <a href="#2-operavel">
              <span className={styles.number}>5</span>
              <span className={styles.label}>2. Operável</span>
            </a>
          </li>
          <li>
            <a href="#3-compreensivel">
              <span className={styles.number}>6</span>
              <span className={styles.label}>3. Compreensível</span>
            </a>
          </li>
          <li>
            <a href="#4-robusto">
              <span className={styles.number}>7</span>
              <span className={styles.label}>4. Robusto</span>
            </a>
          </li>
          <li>
            <a href="#ferramentas-uteis">
              <span className={styles.number}>8</span>
              <span className={styles.label}>Ferramentas úteis</span>
            </a>
          </li>
          <li>
            <a href="#conclusao">
              <span className={styles.number}>9</span>
              <span className={styles.label}>Conclusão</span>
            </a>
          </li>
        </ul>
      </nav>

      <article className={styles.content}>
        <h1>Crie experiências inclusivas: guia de acessibilidade na web</h1>
        <p>
          Em um mundo onde a web é essencial para tantas atividades do dia a
          dia, garantir que ela seja acessível a todos não é apenas uma boa
          prática – é uma responsabilidade. A acessibilidade na web é sobre
          criar experiências que incluam todas as pessoas, independentemente de
          limitações físicas, sensoriais ou cognitivas. Para desenvolvedores
          front-end, adotar práticas acessíveis desde o início é uma forma de
          construir um ambiente digital mais justo e eficiente.
        </p>
        <h2 id="por-que-a-acessibilidade">
          Por que a acessibilidade na web é importante?
        </h2>

        <p>
          Imagine um cenário onde uma pessoa com deficiência visual não consegue
          acessar informações em um site, ou alguém com limitações motoras tem
          dificuldade em navegar em um formulário. Essas barreiras excluem
          milhões de pessoas da experiência digital. A acessibilidade web é a
          ponte para superar essas dificuldades, promovendo inclusão digital.
          Além disso, criar interfaces acessíveis beneficia não só pessoas com
          deficiência, mas também melhora a experiência geral de todos os
          usuários. Por exemplo, legendas em vídeos são úteis para pessoas que
          assistem conteúdos em ambientes barulhentos ou que preferem não ativar
          o som.
        </p>

        <h2 id="quem-se-beneficia">Quem se beneficia da acessibilidade?</h2>

        <ul>
          <li>
            <strong>Deficiência visual</strong>: usuários com cegueira, baixa
            visão ou daltonismo.
          </li>
          <li>
            <strong>Deficiência auditiva</strong>: pessoas com dificuldades
            auditivas ou surdez.
          </li>
          <li>
            <strong>Deficiência motora</strong>: aqueles que utilizam
            tecnologias assistivas para navegação, como switches ou teclados
            adaptados.
          </li>
          <li>
            <strong>Deficiência cognitiva</strong>: usuários com dislexia,
            déficit de atenção ou dificuldades de compreensão.
          </li>
        </ul>

        <blockquote>
          Quando criamos para todos, atingimos um público muito mais amplo,
          melhoramos o SEO e até mesmo nos alinhamos a leis de acessibilidade.
        </blockquote>

        <h2 id="acessibilidade-na-pratica">
          Acessibilidade na prática: impacto real no ecossistema de programação
        </h2>

        <p>
          A acessibilidade vai muito além de boas práticas de código; ela
          transforma vidas e torna o ambiente digital mais inclusivo. Para
          ilustrar isso, recomendamos que você assista ao vídeo{" "}
          <strong>"Acessibilidade no ecossistema de programação"</strong>, onde
          Alexandre Costa e Camila Marinho compartilham experiências, desafios e
          dicas sobre a construção de aplicações acessíveis.
        </p>

        <blockquote>
          No vídeo, você aprenderá:
          <ul>
            <li>
              O impacto da acessibilidade na vida de pessoas com deficiência.
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

        <p>
          Não deixe de conferir e colocar em prática as dicas apresentadas por
          profissionais que vivenciam essas questões diariamente. Para saber
          mais, continue explorando nosso conteúdo e veja como você pode
          contribuir para um ecossistema mais inclusivo!
        </p>

        <iframe
          src="https://www.youtube.com/embed/B_jepC7Eufo"
          title="Acessibilidade no ecossistema de programação | Faladev #44"
          allowFullScreen
        ></iframe>

        <h2>Princípios básicos de acessibilidade (WCAG)</h2>

        <h3 id="1-perceptivel">1. Perceptível</h3>
        <ul>
          <li>
            O conteúdo deve ser apresentado de forma clara, permitindo que todos
            os usuários consigam percebê-lo.
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
            Para imagens decorativas, use <code>alt=""</code> para que leitores
            de tela as ignorem.
          </li>
        </ul>

        <h4>1.2. Audiodescrição</h4>

        <ul>
          <li>Inclua narrações que descrevam o contexto visual de vídeos.</li>
          <li>Use ferramentas para criar audiodescrições.</li>
        </ul>

        <h4>1.3. Cores e contraste</h4>
        <p>
          Adote cores que atendam aos critérios de contraste (mínimo de 4.5:1).
          Ferramentas como o Contrast Checker ajudam a validar
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
          <li>Layout fluido:</li>
          <ul>
            <li>
              Evitar uso de larguras fixas em pixels para o layout principal.
              Prefira unidades relativas (%, rem, em) para que o conteúdo se
              adapte ao zoom.
            </li>
            <li>
              Para entender na prática a importância de unidades relativas (rem)
              e espaçamentos fluídos em um footer, confira o vídeo abaixo:
            </li>

            <iframe
              src="https://www.youtube.com/embed/dAdXLOAg4TM"
              title="Responsividade e acessibilidade com Tailwind"
              allowFullScreen
            ></iframe>
          </ul>

          <li>Teste de zoom (200% ou mais):</li>
          <ul>
            <li>
              Certificar-se de que, ao aplicar zoom, o layout não exige rolagem
              horizontal contínua e que os elementos não fiquem sobrepostos.
            </li>
          </ul>
          <li>Manter boa legibilidade:</li>
          <ul>
            <li>
              Fontes devem ter tamanho mínimo recomendado (ex.: 16px padrão) e
              permitir fácil escala com zoom.
            </li>
            <li>
              Contraste e espaçamento devem ser pensados para que o conteúdo
              continue legível mesmo em telas pequenas ou com zoom aumentado.
            </li>
          </ul>
        </ol>

        <h5>Exemplo rápido de CSS</h5>
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
            Assim, quando aplicado zoom, o conteúdo se ajusta sem criar barras
            de rolagem indesejadas.
          </li>
        </ul>

        <h4>1.5. Estrutura da página</h4>
        <p>
          Organizar o conteúdo com cabeçalhos hierárquicos é uma prática
          essencial para melhorar a experiência de navegação e garantir que
          leitores de tela interpretem corretamente a estrutura da página. Use
          tags semânticas como {`<main>`},{`<section>`}, {`<header>`} e{" "}
          {`<footer>`} para dar significado aos elementos do seu site.
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
          📄 Para aprofundar seus conhecimentos sobre HTML Semântico e como ele
          contribui para uma web mais acessível, recomendamos o artigo HTML
          semântico: como criar uma web acessível no blog da Rocketseat.{" "}
        </span>

        <h3 id="2-operavel">2. Operável</h3>
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
          <li>Adicione atalhos para facilitar o acesso a funcionalidades:</li>
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
            Se o site tiver formulários longos ou etapas de compra, garanta que
            seja possível retomar a sessão ou revalidar dados sem perder todo o
            progresso.
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
            Essa âncora deve ter uma classe (por exemplo, .skip-link) que
            possibilita aplicar estilo para que fique visível apenas ao receber
            foco (para não atrapalhar o layout).
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
            <ul>
              <li>
                Garanta que o id no main seja o mesmo especificado no href do
                link de pulo.
              </li>
            </ul>
          </li>

          <li>Estilize corretamente (opcional, mas recomendado):</li>
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

          <ul>
            <li>
              Isso fará com que o link apareça somente quando focado, mantendo o
              design limpo, mas oferecendo acessibilidade para usuários que
              navegam via teclado ou leitor de tela.
            </li>
          </ul>
        </ul>
        <h3 id="3-compreensivel">3. Compreensível</h3>
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

        <h3 id="4-robusto">4. Robusto</h3>
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
          <li>Barra de navegação:</li>
          <li>Botões e ícones (aria-label):</li>
          <li>Alertas (role="alert"):</li>
        </ul>

        <p>
          Esses exemplos práticos ajudam a tornar a navegação mais clara e
          robusta para quem usa leitores de tela ou outras ferramentas de
          acessibilidade.
        </p>

        <h4>4.2. Testes em diferentes navegadores</h4>
        <ul>
          <li>
            Garanta a funcionalidade em navegadores como Chrome, Firefox e Edge.
          </li>
        </ul>

        <h4>4.3. Validação de código</h4>
        <ul>
          <li>Use ferramentas como o W3C Validator.</li>
        </ul>

        <h3 id="ferramentas-uteis">Ferramentas úteis</h3>

        <ul>
          <li>
            <strong>Google Lighthouse</strong>: auditorias automáticas de
            acessibilidade.
          </li>
          <li>
            <strong>WAVE</strong>: identificação de barreiras.
          </li>
          <li>
            <strong>NVDA</strong>identificação de barreiras.
          </li>
        </ul>

        <p>
          Além de usar essas ferramentas para identificar barreiras de
          acessibilidade, realize testes de usabilidade com pessoas que utilizam
          leitores de tela ou que navegam exclusivamente via teclado. Esses
          testes práticos ajudam a garantir que a experiência real do usuário
          seja satisfatória e sem obstáculos.
        </p>

        <ul>
          <li>
            Realizar <strong>testes exploratórios</strong>: convidar usuários
            com deficiência visual ou motora para navegar pelo site e fornecer
            feedback sobre dificuldades encontradas.
          </li>
          <li>
            <strong>Documentar</strong> as descobertas: criar relatórios que
            apontem barreiras e oportunidades de melhoria, garantindo um ciclo
            de desenvolvimento inclusivo.
          </li>
        </ul>

        <h3 id="conclusao">Conclusão</h3>

        <p>
          Promover acessibilidade na web é um passo essencial para criar
          experiências inclusivas e igualitárias. Ao aplicar essas práticas,
          você não apenas melhora seu trabalho como desenvolvedor, mas também
          ajuda a tornar a internet um lugar melhor para todos.
        </p>
      </article>
    </section>
  );
}
