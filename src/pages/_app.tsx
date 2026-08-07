import { useEffect } from "react";
import type { AppProps } from "next/app";

import { axeAccessibilityReport } from "@/utils/axeAccessibilityReporter";
import Layout from "./layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReport();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
