import styles from "../styles/post.module.css";

export function Post() {
  return (
    <article className={styles.content}>
      <header>
        <h1>Crie experiências inclusivas: guia de acessibilidade na web</h1>
      </header>
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
    </article>
  );
}
