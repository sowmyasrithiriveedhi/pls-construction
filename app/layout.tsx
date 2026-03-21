import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "../src/context/LanguageContext"; // ✅ added

export const metadata = {
  title: "PLS Construction Materials",
  description: "Trusted construction materials supplier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* ✅ Added wrapper only */}
        <LanguageProvider>

          <Header />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />

        </LanguageProvider>

      </body>
    </html>
  );
}