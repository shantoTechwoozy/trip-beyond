import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "./header/page";
import "../globals.css";
import Footer from "@/components/footer/Footer";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip-Beyond",
  description: "Trip-Beyond",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
