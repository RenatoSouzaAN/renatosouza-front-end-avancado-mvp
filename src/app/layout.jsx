import "@/app/globals.css";
import { ClientLayout } from "./ClientLayout";

export const metadata = {
  title: "DMarket",
  description: "A market place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="br">
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}