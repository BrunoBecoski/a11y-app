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
        <title>A11y App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${roboto.className}`}>
        <Blog />
      </div>
    </>
  );
}
