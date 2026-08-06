import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import styles from "../styles/Blog.module.css";

export function Blog() {
  return (
    <>
      <Header />

      <main aria-label="Conteúdo">
        <article className={styles.content}>
          <header>
            <h1>Desenvolvendo uma web acessível</h1>
            <h2>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </h2>
          </header>

          <p>
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>
          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>

          <h3>O que é acessibilidade, afinal?</h3>
        </article>
      </main>

      <Footer />
    </>
  );
}
