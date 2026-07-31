import { Roboto } from "next/font/google";
import Head from "next/head";

import { Blog } from "./blog";

const roboto = Roboto({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Desenvolvendo uma web acessível | Rocketseat Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${roboto.className}`}>
        <Blog />
      </div>
    </>
  );
}
