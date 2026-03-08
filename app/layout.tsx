import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

        <Header />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918885577399?text=Hello%20I%20want%20information%20about%20construction%20materials"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>

      </body>
    </html>
  );
}