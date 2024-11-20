import "@/app/globals.css";
import { ClientLayout } from "./ClientLayout";
import Header from "@/components/Header";

export const metadata = {
  title: "DMarket",
  description: "A market place.",
};

const FullWidthHeader = () => {
  return (
    <header className="bg-primary text-on-primary w-full">
      <div className="max-w-screen-xl mx-auto">
        <Header />
      </div>
    </header>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="br">
      <body className="font-sans min-h-screen">
        <FullWidthHeader />
        <div className="flex min-h-screen">
          <div className="flex-1"></div>
          <div className="w-full max-w-screen-xl">
            <ClientLayout>{children}</ClientLayout>
          </div>
          <div className="flex-1"></div>
        </div>
      </body>
    </html>
  );
}