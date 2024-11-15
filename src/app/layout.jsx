import "@/app/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "DMarket",
  description: "A market place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="br">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}