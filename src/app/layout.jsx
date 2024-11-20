import "@/app/globals.css";
import { ClientLayout } from "./ClientLayout";

export const metadata = {
    title: "DMarket",
    description: "A market place.",
};

const FullWidthHeader = () => {
    return (
        <header className="bg-primary w-full absolute top-0 h-header shadow-md ">
        </header>
    );
};

export default function RootLayout({ children }) {
    return (
        <html lang="br">
            <body className="font-sans min-h-screen h-header">
                <FullWidthHeader />
                <div className="flex min-h-screen">
                    <div className="flex-1"></div>
                    <div className="w-full max-w-screen-xl relative">
                        <ClientLayout>{children}</ClientLayout>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </body>
        </html>
    );
}
