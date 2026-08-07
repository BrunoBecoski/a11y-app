import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main aria-label="Conteúdo">{children}</main>
      <Footer />
    </>
  );
}
