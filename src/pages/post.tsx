import styles from "../styles/post.module.css";

export function Post() {
  return (
    <article className={styles.content}>
      <h1>Crie experiências inclusivas: guia de acessibilidade na web</h1>
      <p>
        Em um mundo onde a web é essencial para tantas atividades do dia a dia,
        garantir que ela seja acessível a todos não é apenas uma boa prática – é
        uma responsabilidade. A acessibilidade na web é sobre criar experiências
        que incluam todas as pessoas, independentemente de limitações físicas,
        sensoriais ou cognitivas. Para desenvolvedores front-end, adotar
        práticas acessíveis desde o início é uma forma de construir um ambiente
        digital mais justo e eficiente.
      </p>
      <h2>Por que a acessibilidade na web é importante?</h2>

      <p>
        Imagine um cenário onde uma pessoa com deficiência visual não consegue
        acessar informações em um site, ou alguém com limitações motoras tem
        dificuldade em navegar em um formulário. Essas barreiras excluem milhões
        de pessoas da experiência digital. A acessibilidade web é a ponte para
        superar essas dificuldades, promovendo inclusão digital. Além disso,
        criar interfaces acessíveis beneficia não só pessoas com deficiência,
        mas também melhora a experiência geral de todos os usuários. Por
        exemplo, legendas em vídeos são úteis para pessoas que assistem
        conteúdos em ambientes barulhentos ou que preferem não ativar o som.
      </p>

      <h2>Quem se beneficia da acessibilidade?</h2>

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
          <strong>Deficiência motora</strong>: aqueles que utilizam tecnologias
          assistivas para navegação, como switches ou teclados adaptados.
        </li>
        <li>
          <strong>Deficiência cognitiva</strong>: usuários com dislexia, déficit
          de atenção ou dificuldades de compreensão.
        </li>
      </ul>

      <blockquote>
        Quando criamos para todos, atingimos um público muito mais amplo,
        melhoramos o SEO e até mesmo nos alinhamos a leis de acessibilidade.
      </blockquote>

      <h2>
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
            A importância de pensar na acessibilidade desde o início de qualquer
            projeto.
          </li>
        </ul>
      </blockquote>

      <p>
        Não deixe de conferir e colocar em prática as dicas apresentadas por
        profissionais que vivenciam essas questões diariamente. Para saber mais,
        continue explorando nosso conteúdo e veja como você pode contribuir para
        um ecossistema mais inclusivo!
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/B_jepC7Eufo"
        title="YouTube video player"
        loading="lazy"
        allowFullScreen
      ></iframe>

      <h2>Princípios básicos de acessibilidade (WCAG)</h2>

      <h3>1. Perceptível</h3>
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
          {`<img src="formacao.png" alt="Ilustração mostrando o fluxo de aprendizado na Rocketseat">`}
        </code>
      </pre>
      <ul>
        <li>
          Para imagens decorativas, use <code>alt=""</code> para que leitores de
          tela as ignorem.
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
          {`body {
              color: #222;
              background-color: #f9f9f9;
            }`}
        </code>
      </pre>
    </article>
  );
}
